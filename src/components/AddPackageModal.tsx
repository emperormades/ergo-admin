import { useState } from 'react'
import './AddPackageModal.css'

// Image assets from Figma
const imgIcon = "https://www.figma.com/api/mcp/asset/9b0628b3-2358-40c4-a70e-42b19c7d6eab"

interface AddPackageModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (quantity: number) => void
}

export default function AddPackageModal({ isOpen, onClose, onAdd }: AddPackageModalProps) {
  const [customQuantity, setCustomQuantity] = useState('')
  const [selectedQuickQuantity, setSelectedQuickQuantity] = useState<number | null>(null)

  if (!isOpen) return null

  const handleQuickSelect = (quantity: number) => {
    setSelectedQuickQuantity(quantity)
    setCustomQuantity('')
  }

  const handleCustomInput = (value: string) => {
    setCustomQuantity(value)
    setSelectedQuickQuantity(null)
  }

  const handleAdd = () => {
    const quantity = selectedQuickQuantity || parseInt(customQuantity) || 0
    if (quantity > 0) {
      onAdd(quantity)
      handleClose()
    }
  }

  const handleClose = () => {
    setCustomQuantity('')
    setSelectedQuickQuantity(null)
    onClose()
  }

  const isAddEnabled = selectedQuickQuantity !== null || (customQuantity !== '' && parseInt(customQuantity) > 0)

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          <img src={imgIcon} alt="Fechar" />
        </button>

        <div className="modal-header">
          <h2>Adicionar pacote de laudos</h2>
          <p>Escolha a quantidade de laudos extras para este mês.</p>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label>Quantidade de laudos</label>
            <div className="quick-quantity-buttons">
              <button
                className={`quick-quantity-btn ${selectedQuickQuantity === 10 ? 'selected' : ''}`}
                onClick={() => handleQuickSelect(10)}
              >
                +10
              </button>
              <button
                className={`quick-quantity-btn ${selectedQuickQuantity === 50 ? 'selected' : ''}`}
                onClick={() => handleQuickSelect(50)}
              >
                +50
              </button>
              <button
                className={`quick-quantity-btn ${selectedQuickQuantity === 200 ? 'selected' : ''}`}
                onClick={() => handleQuickSelect(200)}
              >
                +200
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Quantidade personalizada</label>
            <input
              type="number"
              className="custom-quantity-input"
              placeholder="Digite a quantidade"
              value={customQuantity}
              onChange={(e) => handleCustomInput(e.target.value)}
              min="1"
            />
          </div>
        </div>

        <div className="modal-footer">
          <button className="cancel-button" onClick={handleClose}>
            Cancelar
          </button>
          <button
            className={`add-button ${isAddEnabled ? 'enabled' : ''}`}
            onClick={handleAdd}
            disabled={!isAddEnabled}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}

