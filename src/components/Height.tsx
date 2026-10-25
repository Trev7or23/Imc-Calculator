import { View } from 'react-native'
import StyledText from './StyledText'
import Slider from '@react-native-community/slider'
import Card from './Card'

interface Props {
  height: number
  onValueChange: (height: number) => void
}
export default function Height({ height, onValueChange }: Props) {
  return (
    <Card className="h-40">
      <StyledText size="md">Height</StyledText>
      <StyledText size="xxl">{height.toString()} CM</StyledText>
      <Slider
        minimumTrackTintColor="#6200EA"
        thumbTintColor="#6200EA"
        maximumTrackTintColor="#ffffff"

        minimumValue={100}
        maximumValue={250}
        thumbSize={25}
        step={1}
        value={height}
        onValueChange={onValueChange}
      />
    </Card>
  )
}
