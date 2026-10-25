import Height from '@/components/Height'
import GenderSelector from '@/components/gender/GenderSelector'
import { type Genders } from '@/types/genders'
import { useImc } from '@/contexts/useImc'
import NumberSelector from '@/components/number-selector/NumberSelector'
import ResultsButton from '@/components/ResultsButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function HomeScreen() {
  const {
    weight,
    age,
    gender,
    height,
    setGender,
    setHeight,
    setAge,
    setWeight,
  } = useImc()

  const toggleGender = (gender: Genders | undefined) => setGender(gender)
  const onHeightChanged = (height: number) => setHeight(height)
  const onAgeChange = (age: number) => setAge(age)
  const onWeightChange = (weight: number) => setWeight(weight)

  return (
    <SafeAreaView
      edges={{ top: 'off', bottom: 'additive' }}
      className="gap-5 flex-1 "
    >
      <GenderSelector
        onGenderChange={toggleGender}
        gender={gender}
      ></GenderSelector>
      <Height height={height} onValueChange={onHeightChanged}></Height>
      <NumberSelector
        age={age}
        weight={weight}
        onAgeChange={onAgeChange}
        onWeightChange={onWeightChange}
      />

      <Link href={'/result'} asChild>
        <ResultsButton>Continue</ResultsButton>
      </Link>
    </SafeAreaView>
  )
}
