import React, {useContext, FC, useEffect} from 'react'
import { Context } from '../../main.tsx'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../constants/routing.ts'
import MainPanel from '../../pages/MainPanel/MainPanel.tsx'
const AppRouter: FC = () => {
  const {user} = useContext(Context)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      user.checkAuth()
    }
  })
  if (user.isLoading) {
    return <div>Загрузка</div>
  }
  return (
    <Routes>
      {user.isAuth &&
        <Route path="pages" element={<MainPanel/>}>
          {PrivateRoutes.map(({path, component}) => 
            <Route key={path} path={path} Component={component}/>
          )}
        </Route>
      }
      {PublicRoutes.map(({path, component}) => 
        <Route key={path} path={path} Component={component}/>
      )}
    </Routes>
  )
}
export default AppRouter