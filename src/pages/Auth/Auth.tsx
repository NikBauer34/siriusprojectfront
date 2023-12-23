import React, {FC} from "react";
import AuthFormComp from "../../components/AuthFormComp/AuthFormComp";
import { observer } from "mobx-react-lite";
const Auth: FC = () => {
  return (
    <AuthFormComp/>
  )
}
export default observer(Auth)