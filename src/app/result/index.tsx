import ResultsCard from '@/components/results/ResultsCard'
import ResultsButton from '@/components/ResultsButton'
import StyledText from '@/components/StyledText'
import { useImc } from '@/contexts/useImc'
import { imcCalculator } from '@/utils/imc-calculator'
import { Link, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ResultsScreen() {
  const { height, weight } = useImc()

  const router = useRouter()

  const { description, health, imc } = imcCalculator({ height, weight })
  return (
    <SafeAreaView
      edges={{ top: 'off', bottom: 'additive' }}
      className="flex-1 gap-10"
    >
      <StyledText size="xxl" centerText={false}>
        Tu Resultado
      </StyledText>

      <ResultsCard health={health} imc={imc} description={description} />

      <ResultsButton onPress={() => router.back()}>Back</ResultsButton>
    </SafeAreaView>
  )
}
