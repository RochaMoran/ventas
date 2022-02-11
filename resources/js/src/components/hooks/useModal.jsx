import {useState} from 'react'

export default function useModal() {
  const [show, setShow] = useState(false)

  const toggleModal = () => {
    setShow(value => !value);
  }

  return {
    show,
    toggleModal
  }
}
