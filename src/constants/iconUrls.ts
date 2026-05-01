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

const MENU_LOGO_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/menu/logo.svg'

const MENU_LUPA_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/menu/lupa.svg'

const MENU_CALENDARIO_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/menu/calendario.svg'

const MENU_ARROW_DOWN_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/menu/arrow_down.svg'

const MENU_USER_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/menu/user.svg'

const MENU_DASHBOARD_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/menu/dashboard.svg'

const MENU_USERS_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/menu/users.svg'

const MENU_MONEY_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/menu/money.svg'

const MENU_CONFIGURACOES_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/menu/configuracoes.svg'

export const iconUrls = {
  logoInterno: PLACEHOLDER,
  /** Logo da navbar (Dashboard e demais telas que usem menu/logo.svg). */
  logoMenu: MENU_LOGO_URL,
  /** Ícone de busca (navbar e demais usos de lupa). */
  lupa: MENU_LUPA_URL,
  /** Ícone de calendário / filtro de data. */
  calendario: MENU_CALENDARIO_URL,
  /** Seta de dropdown (filtro de data etc.). */
  setaBaixo: MENU_ARROW_DOWN_URL,
  /** Ícone de usuário / avatar na navbar. */
  pessoa: MENU_USER_URL,
  /** Ícone item menu Dashboard na sidebar. */
  dashboard: MENU_DASHBOARD_URL,
  /** Ícone item menu Usuários na sidebar. */
  usuarios: MENU_USERS_URL,
  /** Ícone item menu Financeiro na sidebar. */
  financeiro: MENU_MONEY_URL,
  /** Ícone item menu Configurações na sidebar. */
  configuracoes: MENU_CONFIGURACOES_URL,
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
