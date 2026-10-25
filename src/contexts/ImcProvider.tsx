import { type ReactNode, useState } from 'react'
import { ImcContext } from './ImcContext'
import { Genders } from '@/types/genders'

interface Props {
  children: ReactNode
}
export function ImcProvider({ children }: Props) {
  const [gender, setGender] = useState<Genders>()
  const [height, setHeight] = useState(170)
  const [age, setAge] = useState(30)
  const [weight, setWeight] = useState(70)

  const values = {
    gender,
    height,
    age,
    weight,
    setGender,
    setAge,
    setHeight,
    setWeight,
  }

  return <ImcContext.Provider value={values}>{children}</ImcContext.Provider>
}
