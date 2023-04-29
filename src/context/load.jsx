import { createContext, useState, useEffect } from 'react'

export const LoadContext = createContext()

export function LoadContextProvider ({children}) {

  // loading status
  const [loading, setLoading] = useState (true)

  // Disable loading 1 second after page load
  useEffect (() => {
    setTimeout (() => {
      setLoading (false)
    }, 1000)
  }, [])

  useEffect (() => {
    // apply styles to body
    const loadElem = document.querySelector ('.load')
    if (loading) {
      loadElem.classList.remove ('opacity-0')
      loadElem.classList.remove ('-z-10')      
    } else {
      loadElem.classList.add ('opacity-0')
      loadElem.classList.add ('!-z-10')      
    }

  }, [loading])

  return (
    <LoadContext.Provider value={{loading, setLoading}}>
      {children}
    </LoadContext.Provider>
  )
} 

export default LoadContext