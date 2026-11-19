// TODO: reemplazar por el número real del despacho (formato internacional, sin "+" ni espacios).
export const WHATSAPP_NUMBER = '521XXXXXXXXXX'
export const WHATSAPP_DISPLAY = '+52 1 XX XXXX XXXX'

export const wa = (msg = 'Hola, me gustaría recibir información sobre sus servicios contables.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
