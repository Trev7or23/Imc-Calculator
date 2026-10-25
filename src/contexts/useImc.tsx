import { useContext } from 'react'
import { ImcContext } from './ImcContext'

export function useImc() {
  const context = useContext(ImcContext)
  if (context === null)
    throw new Error('useImc debe usarse dentro del provider <ImcProvider>')
  return context!
}
