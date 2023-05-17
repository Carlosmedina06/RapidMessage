'use client'

import Image from 'next/image'

import Modal from '@/app/components/modals/Modal'

interface ImageModalProps {
  isOpen?: boolean
  onClose: () => void
  src?: string | null
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) {
    return null
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image fill alt="Image" className="object-cover" src={src} />
      </div>
    </Modal>
  )
}

export default ImageModal
