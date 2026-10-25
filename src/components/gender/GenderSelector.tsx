import { View } from 'react-native'
import Gender from './Gender'
import { useState } from 'react'
import { Genders } from '@/types/genders'

interface Props {
  gender: Genders | undefined
  onGenderChange: (gender: Genders) => void
}
export default function GenderSelector({ gender, onGenderChange }: Props) {
  return (
    <View className="flex-row gap-5 justify-center">
      <Gender
        gender="male"
        selected={gender === 'male'}
        onPress={() => onGenderChange('male')}
      >
        Hombre
      </Gender>
      <Gender
        gender="female"
        selected={gender === 'female'}
        onPress={() => onGenderChange('female')}
      >
        Mujer
      </Gender>
    </View>
  )
}
