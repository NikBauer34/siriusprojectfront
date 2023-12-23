import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./public/components/AppRouter"
import { useEffect } from 'react'
import { useMantineColorScheme } from '@mantine/core'
function App() {
  const {setColorScheme} = useMantineColorScheme()
  useEffect(() => {
    setColorScheme('light')
  }, [])
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
