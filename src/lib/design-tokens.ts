// Gina's College Design Tokens
// Single source of truth — matches creative-direction.md exactly

export const colors = {
  navy: '#01426A',
  navyDark: '#012d4a',
  navyLight: '#0a5a8a',
  black: '#000000',
  white: '#FFFFFF',
  softBlue: '#B1C6D9',
  blueGray: '#D4DDE5',
  lightGray: '#E9E9E9',
} as const

export const fonts = {
  display: 'Nohemi, system-ui, sans-serif',
  body: 'Ranade, system-ui, sans-serif',
} as const

export const ease = {
  luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
  snappy: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const

export const duration = {
  micro: 200,
  standard: 400,
  dramatic: 800,
  cinematic: 1200,
} as const

export const stagger = {
  char: 0.02,
  word: 0.06,
  element: 0.12,
  section: 0.25,
} as const
