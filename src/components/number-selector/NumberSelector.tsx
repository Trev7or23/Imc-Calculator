import { View } from 'react-native'
import NumberSelectorComponent from './NumberSelectorComponent'

interface Props {
  weight: number
  age: number
  onAgeChange: (age: number) => void
  onWeightChange: (weight: number) => void
}
export default function NumberSelector({
  age,
  weight,
  onAgeChange,
  onWeightChange,
}: Props) {
  return (
    <View className="flex-row gap-2 justify-between">
      <NumberSelectorComponent
        label="Weight (Kg)"
        value={weight}
        onChange={onWeightChange}
      />
      <NumberSelectorComponent label="Age" value={age} onChange={onAgeChange} />
    </View>
  )
}
