import Auth from "../../pages/Auth/Auth.tsx";
import GetImages from "../../pages/GetImages/GetImages.tsx";
import Main from "../../pages/Main/Main.tsx";
import Irouting from "./Irouting.ts";
export const PublicRoutes: Irouting[] = [
  {
    path: '/login',
    component: Auth
  },
  {
    path: '/registration',
    component: Auth
  },
]
export const PrivateRoutes: Irouting[] = [
  {
    path: 'get_images',
    component: GetImages
  },
  {
    path: 'main',
    component: Main
  }
]