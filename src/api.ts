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

const API_BASE = 'http://localhost:5001'

export async function enviarEmocion(emocion: string): Promise<string> {
  const res = await fetch(`${API_BASE}/emocion`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ emocion }),
  })
  if (!res.ok) throw new Error('No se pudo enviar la emoción')
  const data = await res.json()
  return data.respuesta as string
}

export async function analizarComida(archivo: File): Promise<string> {
  const formData = new FormData()
  formData.append('imagen', archivo)
  const res = await fetch(`${API_BASE}/comida`, {
    method: 'POST',
    body: formData,
  })
  if (!res.ok) throw new Error('No se pudo analizar la comida')
  const data = await res.json()
  return data.respuesta as string
}