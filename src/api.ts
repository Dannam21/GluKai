// Conexion con el backend Flask que habla con Gemma 4 (Ollama).
const API_URL = 'http://localhost:5001/chat'

export async function preguntarAKai(
  mensaje: string,
  personalidad = 'amigable y valiente'
): Promise<string> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mensaje, personalidad }),
  })
  if (!res.ok) throw new Error('No se pudo conectar con Kai')
  const data = await res.json()
  return data.respuesta as string
}
