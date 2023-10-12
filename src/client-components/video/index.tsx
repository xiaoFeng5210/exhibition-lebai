'use client'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { type Card } from '~/constants'
import { VideoStyles } from '~/assets/video-styles'

const Video = forwardRef((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [title, setTitle] = useState<string>('')
  useImperativeHandle(ref, () => {
    return {
      open(card?: Card) {
        console.log(card)
        if (card !== undefined) {
          card.name ? setTitle(card.name) : setTitle('视频展示')
        }
        onOpen()
      }
    };
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='full'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody className='flex justify-center items-center'>
          <VideoStyles controls muted autoPlay loop>
            <source src="/mp4/煮面.mp4" type="video/mp4" />
          </VideoStyles>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
export default Video
