import { View, Text, Pressable, type PressableProps } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { capitalize } from '@/utils/capitalize'
import { useEffect } from 'react'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import StyledText from '../StyledText'

interface Props extends PressableProps {
  children: string
  gender?: 'male' | 'female'
  selected: boolean
}
export default function Gender({
  children,
  gender,
  selected,
  ...props
}: Props) {
  const progress = useSharedValue(selected ? 1 : 0)

  useEffect(() => {
    progress.value = withTiming(selected ? 1 : 0, { duration: 100 })
  }, [selected, progress])

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      ['#1D1E33', '#4F548B'], // backgroundComponent → backgroundComponentSelected
    ),
  }))
  return (
    <Pressable {...props}>
      <Animated.View
        style={animatedStyle}
        className={`gap-2 bg-backgroundComponent rounded-xl px-8 py-4 ${selected ? 'bg-backgroundComponentSelected' : ''
          } `}
      >
        <Ionicons
          name={gender === 'male' ? 'male-outline' : 'female-outline'}
          size={110}
          color="white"
        />
        <StyledText>{capitalize(gender!.toString())}</StyledText>
      </Animated.View>
    </Pressable>
  )
}
