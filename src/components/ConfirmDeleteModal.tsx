import './ConfirmDeleteModal.css'

interface ConfirmDeleteModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  userName?: string
}

export default function ConfirmDeleteModal({ isOpen, onClose, onConfirm, userName }: ConfirmDeleteModalProps) {
  if (!isOpen) return null

  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="confirm-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="confirm-modal-header">
          <h2>Confirmar exclusão</h2>
          <p>
            Tem certeza que deseja remover {userName ? `o usuário ${userName}` : 'este usuário'}? Esta ação não pode ser desfeita.
          </p>
        </div>

        <div className="confirm-modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancelar
          </button>
          <button className="remove-button" onClick={handleConfirm}>
            Remover
          </button>
        </div>
      </div>
    </div>
  )
}

