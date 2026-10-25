import { Text, Pressable, type PressableProps } from 'react-native'

interface Props extends PressableProps {
  children: string
}
export default function ResultsButton({ children, ...props }: Props) {
  return (
    <Pressable {...props} className="bg-primary mt-auto mb-3 p-4 rounded-2xl">
      <Text className="text-white text-center font-bold text-2xl">
        {children}
      </Text>
    </Pressable>
  )
}
