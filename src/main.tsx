import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import UserStore from './public/store/UserStore/UserStore.ts'
import {MantineProvider} from '@mantine/core'
import {Notifications} from '@mantine/notifications'
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css'

interface IContext {
  user: UserStore
}
export const user = new UserStore();

export const Context = createContext<IContext>({
  user,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{
    user
  }}>
    <MantineProvider defaultColorScheme="light">
      <Notifications/>
      <App />
    </MantineProvider>
  </Context.Provider>
)
