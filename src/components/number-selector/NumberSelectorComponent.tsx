import { View, Pressable } from 'react-native'
import StyledText from '../StyledText'
import { capitalize } from '@/utils/capitalize'
import { Ionicons } from '@expo/vector-icons'
import Card from '../Card'

interface Props {
  label: string
  onChange: (value: number) => void
  value: number
}
export default function ToggleValue({ value, label, onChange }: Props) {
  const onAddValue = () => onChange(value + 1)
  const onSubValue = () => onChange(value - 1)

  return (
    <View className="gap-2 bg-backgroundComponent rounded-2xl px-5 py-2">
      <View className="gap-3">
        <StyledText size="md">{capitalize(label)}</StyledText>
        <StyledText size="xxl">{value.toString()}</StyledText>
      </View>
      <View className="flex-row justify-between w-36">
        <Pressable onPress={onSubValue} className="bg-primary rounded-full p-2">
          <Ionicons name="remove" size={40} color="white" />
        </Pressable>
        <Pressable onPress={onAddValue} className="bg-primary rounded-full p-2">
          <Ionicons name="add-outline" size={40} color="white" />
        </Pressable>
      </View>
    </View>
  )
}
