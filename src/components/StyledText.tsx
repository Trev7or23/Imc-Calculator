import { Text, TextProps } from 'react-native'

interface Props extends TextProps {
  children: string[] | string
  centerText?: boolean
  size?: 'md' | 'xl' | 'xxl' | 'sm'
}
export default function StyledText({
  children,
  centerText = true,
  size = 'xl',
  ...props
}: Props) {
  const textSize = {
    sm: 'text-md',
    md: 'text-xl',
    xl: 'text-3xl',
    xxl: 'text-5xl',
  }[size]
  const textAlign = centerText ? 'text-center' : 'text-start'
  return (
    <Text
      className={`font-bold ${textAlign} text-white ${textSize}`}
      {...props}
    >
      {children}
    </Text>
  )
}
