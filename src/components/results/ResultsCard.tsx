import { type Health } from '@/types/health'
import { View, Text } from 'react-native'
import Card from '../Card'

interface Props {
  health: Health
  imc: number
  description: string
}
export default function ResultsCard({ health, imc, description }: Props) {
  const textColor = {
    'Low Imc': 'text-blue-600',
    Normal: 'text-green-800',
    'Over Weight': 'text-orange-700',
    Obesity: 'text-red-700',
  }[health]
  return (
    <Card className="bg-backgroundComponent  rounded-2xl py-4 px-3 justify-between flex-1">
      <Text className={`${textColor} text-center text-6xl`}>{health}</Text>
      <Text className="text-center text-7xl text-white ">{imc.toFixed(2)}</Text>
      <Text className="text-white text-xl leading-loose text-center">
        {description}
      </Text>
    </Card>
  )
}
