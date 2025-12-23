/**
 * Modal Component
 * Reusable modal component
 */

'use client'

import { useEffect } from 'react'
import { useUIStore } from '@/store'

interface ModalProps {
  modalId: string
  title?: string
  children: React.ReactNode
}

export default function Modal({ modalId, title, children }: ModalProps) {
  const { modals, closeModal } = useUIStore()
  const isOpen = modals[modalId]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={() => closeModal(modalId)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="modal-header">
            <h2>{title}</h2>
            <button onClick={() => closeModal(modalId)}>&times;</button>
          </div>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}
