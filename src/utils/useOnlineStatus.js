import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
  const [onlinestatus, setONlineStatus] = useState(true)

  useEffect(() => {
    window.addEventListener('online', () => {
      setONlineStatus(true)
    })

    window.addEventListener('offline', () => {
      setONlineStatus(false)
    })
  }, [])

  return onlinestatus
}

export default useOnlineStatus
