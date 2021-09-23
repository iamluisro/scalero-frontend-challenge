import {useEffect, useState, useRef} from 'react'

export default function useClickAway() {
  const [active, setActive] = useState(false)
  const ref = useRef(null)

  function handleClickAway(e) {
    if (!ref.current.contains(e.target)) setActive(false)
  }

  function toggle() {
    setActive(!active)
  }

  useEffect(() => {
    if (active) document.addEventListener('mousedown', handleClickAway)
    else document.removeEventListener('mousedown', handleClickAway)

    return () => {
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [active])

  return {ref, active, setActive, toggle}
}
