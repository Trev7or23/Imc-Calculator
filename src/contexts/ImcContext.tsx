import { Genders } from '@/types/genders'
import { createContext, type Dispatch, type SetStateAction } from 'react'

interface ImcContextValue {
  gender: Genders | undefined
  age: number
  weight: number
  height: number
  setGender: Dispatch<SetStateAction<Genders | undefined>>
  setAge: Dispatch<SetStateAction<number>>
  setWeight: Dispatch<SetStateAction<number>>
  setHeight: Dispatch<SetStateAction<number>>
}

export const ImcContext = createContext<ImcContextValue | undefined>(undefined)
