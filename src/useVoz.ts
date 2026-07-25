// Hook simple para la voz del navegador (Web Speech API).
// hablar(): Kai dice el texto en voz alta.
// escuchar(): convierte la voz del nino en texto.

export function hablar(texto: string) {
  speechSynthesis.cancel()
  const limpio = texto.replace(/[^\p{L}\p{N}\s.,!?¿¡]/gu, '')
  const decir = () => {
    const u = new SpeechSynthesisUtterance(limpio)
    u.lang = 'es-ES'
    u.pitch = 1.7
    u.rate = 0.95
    const voces = speechSynthesis.getVoices()
    const vozES = voces.find((v) => v.lang.startsWith('es'))
    if (vozES) u.voice = vozES
    speechSynthesis.speak(u)
  }
  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.onvoiceschanged = decir
  } else {
    decir()
  }
}

export function escuchar(onResultado: (texto: string) => void) {
  const SR =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
  if (!SR) {
    alert('Tu navegador no soporta voz. Usa Chrome 🙂')
    return
  }
  const rec = new SR()
  rec.lang = 'es-ES'
  rec.continuous = false
  rec.interimResults = false
  rec.onresult = (e: any) => {
    const texto = e.results[0][0].transcript
    console.log('Escuché:', texto)
    onResultado(texto)
  }
  rec.onerror = (e: any) => {
    console.log('Error del micrófono:', e.error)
    alert('No pude escucharte: ' + e.error)
  }
  rec.start()
}