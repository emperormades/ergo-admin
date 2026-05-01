/**
 * Os assets em `images/` foram removidos.
 * Cada chave corresponde ao arquivo antigo — substitua pelo URL do Supabase/CDN.
 * Enquanto isso, um SVG neutro evita quebra de build.
 */
const PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#d1d5db"><circle cx="12" cy="12" r="8"/></svg>'
  )

export const iconUrls = {
  logoInterno: PLACEHOLDER,
  lupa: PLACEHOLDER,
  calendario: PLACEHOLDER,
  setaBaixo: PLACEHOLDER,
  pessoa: PLACEHOLDER,
  dashboard: PLACEHOLDER,
  usuarios: PLACEHOLDER,
  financeiro: PLACEHOLDER,
  configuracoes: PLACEHOLDER,
  download: PLACEHOLDER,
  adicionar: PLACEHOLDER,
  setas: PLACEHOLDER,
  pacote: PLACEHOLDER,
  lixo: PLACEHOLDER,
  tendencia: PLACEHOLDER,
  receitas: PLACEHOLDER,
  dinheiro: PLACEHOLDER,
  info: PLACEHOLDER,
  setaCimaVerde: PLACEHOLDER,
  correnteBranca: PLACEHOLDER,
  vision: PLACEHOLDER,
  voltar: PLACEHOLDER,
  corrente: PLACEHOLDER,
  fechar: PLACEHOLDER,
} as const
