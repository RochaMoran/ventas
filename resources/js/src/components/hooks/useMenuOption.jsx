import { useState } from 'react'

export default function useMenuOption() {
  const [tab, setTab] = useState(0);

  const toggleTab = (n) => {
      setTab(n)
  }

  return {
    tab,
    toggleTab
  }
}
