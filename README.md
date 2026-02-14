<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1_4uun4NQvha9aqWklQoMUfdXrulACewB

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Cambiar la música (fácil)

1. Copia tu archivo en `public/music/nrique Iglesias, Juan Luis Guerra - Cuando Me Enamoro (Official Music Video).webm`.
2. La app lo tomará automáticamente con `src="/music/nrique Iglesias, Juan Luis Guerra - Cuando Me Enamoro (Official Music Video).webm"`.
3. Opcional: si quieres usar un enlace externo, crea `.env.local` y agrega:
   `VITE_MUSIC_URL=https://tu-dominio.com/tu-cancion.webm`

Si falla la carga del audio, la app usa una canción romántica de respaldo para que no quede sin música.
