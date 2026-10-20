import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'epic-portfolio-site-7giz5fsc',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_n4HPT-u4jAZecx_iJ8MpB8Ok1jLO5tVV',
  authRequired: false,
  auth: { mode: 'managed' },
})
