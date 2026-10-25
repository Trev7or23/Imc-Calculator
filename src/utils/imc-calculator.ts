import { Health } from '@/types/health'

interface Props {
  weight: number
  height: number
}
interface Result {
  imc: number
  description: string
  health: Health
}
export function imcCalculator({ weight, height }: Props): Result {
  height = height / 100
  const imc = weight / (height * height)

  console.log(height)
  console.log(weight)
  const result: Result = {
    imc: imc,
    health: 'Normal',
    description: '',
  }
  if (imc < 18.5) {
    result.health = 'Low Imc'
    result.description = descriptions.lowImc
  } else if (imc < 24.9) {
    result.health = 'Normal'
    result.description = descriptions.normal
  } else if (imc < 29.99) {
    result.health = 'Over Weight'
    result.description = descriptions.moderated
  } else {
    result.health = 'Obesity'
    result.description = descriptions.obesity
  }

  return result
}

const descriptions = {
  lowImc:
    'tu peso es inferior al considerado saludable para tu altura. Puede deberse a desnutrición, un metabolismo muy acelerado o algún trastorno, y suele conllevar falta de energía, defensas bajas y debilidad ósea',
  normal:
    'u peso está equilibrado con tu estatura, lo que se asocia con un menor riesgo de enfermedades metabólicas y cardiovasculares. Eso sí, no garantiza estar en forma; hay que ver también la alimentación y el ejercicio',
  moderated:
    'exceso de peso moderado. Aumenta el riesgo de presión alta, colesterol y diabetes. Suele venir por malos hábitos o genética, y es la señal de alerta para cambiar antes de llegar a etapas más graves',
  obesity:
    'Exceso de grasa corporal significativo. Es una enfermedad crónica que eleva mucho el riesgo de diabetes tipo 2, hipertensión, problemas cardíacos y articulares. Requiere atención médica y cambios profundos en el estilo de vida',
} as const
