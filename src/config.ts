export const WHATSAPP_NUMBER = '526562963291'
export const WHATSAPP_DISPLAY = '+52 656 296 3291'

export const wa = (msg = 'Hola, me gustaría recibir información sobre sus servicios contables.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
