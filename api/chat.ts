const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent'

type GeminiContent = {
  role: 'user' | 'model'
  parts: Array<{ text: string }>
}

type ChatRequestBody = {
  contents?: GeminiContent[]
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API key is not configured' })
  }

  let body: ChatRequestBody

  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' })
  }

  const contents = body?.contents

  const isValidContents =
    Array.isArray(contents) &&
    contents.length > 0 &&
    contents.every(
      (content) =>
        content &&
        (content.role === 'user' || content.role === 'model') &&
        Array.isArray(content.parts) &&
        content.parts.every((part) => typeof part?.text === 'string'),
    )

  if (!isValidContents) {
    return res.status(400).json({ error: 'Request body must include a non-empty contents array' })
  }

  try {
    const geminiResponse = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contents }),
    })

    const data = await geminiResponse.json().catch(() => null)

    if (!geminiResponse.ok) {
      const message = data?.error?.message || 'Gemini API request failed'
      return res.status(500).json({ error: message })
    }

    return res.status(200).json(data)
  } catch (error) {
    console.error('Error proxying Gemini request:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
