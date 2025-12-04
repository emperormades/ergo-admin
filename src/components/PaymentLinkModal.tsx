import { useState } from 'react'
import './PaymentLinkModal.css'

// Image assets from Figma
const imgIcon = "https://www.figma.com/api/mcp/asset/64893350-adcb-4a3d-9c93-6c19e6c3bc51"

interface PaymentLinkModalProps {
  isOpen: boolean
  onClose: () => void
  paymentLink?: string
}

export default function PaymentLinkModal({ isOpen, onClose, paymentLink = 'https://ergo360.com.br/pagamento/vrssn9' }: PaymentLinkModalProps) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(paymentLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <img src={imgIcon} alt="Fechar" />
        </button>

        <div className="modal-header">
          <h2>Link de cobrança gerado</h2>
          <p>Compartilhe este link com o cliente para realizar o pagamento</p>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label>Link de pagamento</label>
            <div className="link-input-wrapper">
              <input
                type="text"
                className="link-input"
                value={paymentLink}
                readOnly
              />
              <button
                className={`copy-button ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
              >
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
          </div>
          <p className="info-text">
            Este link é válido por 30 dias e pode ser usado apenas uma vez.
          </p>
        </div>
      </div>
    </div>
  )
}

