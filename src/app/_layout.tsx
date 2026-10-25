import { Slot, Stack } from 'expo-router'

import '../global.css'
import { ImcProvider } from '@/contexts/ImcProvider'

export default function RootLayout() {
  return (
    <ImcProvider>
      <Stack
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#6200EA' },
          contentStyle: {
            backgroundColor: '#0E0B20',
            paddingTop: 30,
            paddingHorizontal: 20,
          },
        }}
      >
        <Stack.Screen
          name="home/index"
          options={{
            title: 'Home Screen',
          }}
        />
        <Stack.Screen
          name="result/index"
          options={{
            title: 'Results',
          }}
        />
      </Stack>
    </ImcProvider>
  )
}
