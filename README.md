# Portfolio (React + Vite)

Green glassmorphism developer portfolio with demo content, a placeholder profile picture and a downloadable resume. No backend needed.

## Run it

```bash
npm install
npm run dev        # development at http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## Make it yours

- **Text and links:** edit `src/data.js` (name, intro, skills, projects, experience, email).
- **Profile picture:** copy your photo into `public/` (for example `public/profile.jpg`), then change `photo` in `src/data.js` to `` `${base}profile.jpg` ``.
- **Resume download:** replace `public/Lerato_Nkosi_Resume.pdf` with your own PDF, keeping the same file name, or change `resume` and `resumeFileName` in `src/data.js`. Every Download resume button saves the file straight to the visitor's device.
- **Colours:** change the variables at the top of `src/index.css`.

## Deploy

Upload the `dist` folder to Netlify, Vercel or GitHub Pages after `npm run build`.
