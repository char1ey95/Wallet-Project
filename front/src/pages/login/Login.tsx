import { MainForm } from '../../common/form'
import { LoginBox, LoginHeader } from './styled'

export const Login = () => {
    return(
        <MainForm>
            <LoginHeader />
            <LoginBox></LoginBox>
        </MainForm>
    )
}