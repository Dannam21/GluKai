# GluKai 🦊

Compañero de IA para niños con diabetes tipo 1. Usa Gemma 4 (offline) para
conversar con cariño, y genera reportes para los padres.

## Requisitos
- Node.js y npm
- Ollama con el modelo gemma4 corriendo
- El backend Flask (app.py) corriendo en el puerto 5001

## Cómo correr el frontend
1. npm install
2. npm run dev
3. Abrir la URL que aparece (normalmente http://localhost:5173)

## Importante
- Poner la imagen de la mascota en: public/mascota.png
- El backend Flask debe estar corriendo (python app.py)
- Usar Chrome para que funcione la voz

## Stack
- React + TypeScript + Vite + Tailwind CSS
- Animaciones de la mascota: CSS puro (definidas en tailwind.config.js)
- IA: Gemma 4 vía Ollama (100% local, sin internet)
