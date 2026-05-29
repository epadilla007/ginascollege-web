// Font configuration for Gina's College
// Both fonts are self-hosted in /public/fonts/ as WOFF2

// NOHEMI — Display font (neo-grotesque variable, 9 weights)
// Source: Awwwards free fonts collection
// Weight range: 100–900
export const nohemiFont = {
  family: 'Nohemi',
  src: '/fonts/Nohemi-Variable.woff2',
  weight: '100 900',
  display: 'swap',
} as const

// RANADE — Body font (variable, clean elegant sans)
// Source: FontShare (free commercial use)
export const ranadeFont = {
  family: 'Ranade',
  src: '/fonts/Ranade-Variable.woff2',
  weight: '100 700',
  display: 'swap',
} as const

// CSS @font-face declarations — injected via globals.css
export const fontFaceCSS = `
@font-face {
  font-family: 'Nohemi';
  src: url('/fonts/Nohemi-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Ranade';
  src: url('/fonts/Ranade-Variable.woff2') format('woff2');
  font-weight: 100 700;
  font-style: normal;
  font-display: swap;
}
`
