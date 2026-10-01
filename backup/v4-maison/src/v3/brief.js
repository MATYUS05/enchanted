import { whatsappLink } from '../data/site'

export const emptyBrief = { kind: null, tone: null, color: null, occasion: null }

export function briefParts(brief) {
  return [brief.tone, brief.color, brief.kind].filter(Boolean)
}

export function briefUrl(brief, likes) {
  const lines = ["Hi Enchanted! I'd love to arrange a bouquet"]
  const parts = briefParts(brief)
  if (parts.length) lines.push(`My vibe: ${parts.join(', ')}`)
  if (brief.occasion) lines.push(`Occasion: ${brief.occasion}`)
  if (likes.length) lines.push(`Looks I love: ${likes.join(', ')}`)
  return whatsappLink(lines.join('\n'))
}

export function briefLabel(brief, likes) {
  const parts = [...briefParts(brief), brief.occasion, likes.length ? `${likes.length} ♡` : null].filter(Boolean)
  return parts.length ? parts.join(' · ') : 'Chat us on WhatsApp'
}
