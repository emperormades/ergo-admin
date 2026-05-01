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

const DASHBOARD_PACOTE_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/dashboard/pacote.svg'

const DASHBOARD_GERAR_LINK_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/dashboard/gerar_link.svg'

const DASHBOARD_RECEITA_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/dashboard/receita.svg'

const DASHBOARD_LAUDOS_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/dashboard/laudos.svg'

const DASHBOARD_USUARIOS_ATIVOS_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/dashboard/usuarios_ativos.svg'

const DASHBOARD_ALTA_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/dashboard/UpArrowIcon.svg'

const DASHBOARD_BAIXAR_CSV_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/dashboard/baixar_csv.svg'

const DASHBOARD_NOVO_USUARIO_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/dashboard/novo_usuario.svg'

const DASHBOARD_DUAS_SETAS_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/dashboard/duas_setas.svg'

const DASHBOARD_APAGAR_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/dashboard/apagar.svg'

/** Fechar modais (X) — mesmo asset que no design (dashboard/sair.svg). */
const DASHBOARD_FECHAR_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/dashboard/sair.svg'

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
  /** Exportar / baixar CSV (usuários, financeiro). */
  download: DASHBOARD_BAIXAR_CSV_URL,
  /** Botão novo usuário (lista de usuários). */
  adicionar: DASHBOARD_NOVO_USUARIO_URL,
  /** Cabeçalhos ordenáveis (setas ↑↓) na tabela de usuários. */
  setas: DASHBOARD_DUAS_SETAS_URL,
  /** Ícone “Adicionar pacote” nas tabelas do dashboard. */
  pacote: DASHBOARD_PACOTE_URL,
  /** Ícone “Gerar link” (tabela Renovações). */
  gerarLink: DASHBOARD_GERAR_LINK_URL,
  /** Ícone KPI Laudos (dashboard). */
  laudos: DASHBOARD_LAUDOS_URL,
  /** Apagar / lixeira na tabela de usuários. */
  lixo: DASHBOARD_APAGAR_URL,
  tendencia: PLACEHOLDER,
  /** KPI receita / laudos extras (dashboard e telas monetárias). */
  receitas: DASHBOARD_RECEITA_URL,
  dinheiro: PLACEHOLDER,
  info: PLACEHOLDER,
  /** Variação positiva em KPIs (UpArrowIcon.svg; dashboard / financeiro). */
  setaCimaVerde: DASHBOARD_ALTA_URL,
  correnteBranca: PLACEHOLDER,
  vision: PLACEHOLDER,
  /** Ícone KPI Usuários ativos (dashboard). */
  usuariosAtivos: DASHBOARD_USUARIOS_ATIVOS_URL,
  voltar: PLACEHOLDER,
  corrente: PLACEHOLDER,
  fechar: DASHBOARD_FECHAR_URL,
} as const
