import { View, Text, type ViewProps } from 'react-native'

interface Props extends ViewProps { }
export default function Card({ className, children, ...props }: Props) {
  return (
    <View
      className={`${className} gap-2 bg-backgroundComponent rounded-xl px-4 py-2 pb-7 `}
    >
      {children}
    </View>
  )
}
