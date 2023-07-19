import {
  Container,
  Picture,
  Input,
  Wrapper,
  Button,
  Content
} from './login.styles'
import logo from '../../assets/image 1.svg'

export const Login = () => {
  return (
    <Container>
      <Picture />
      <Content>
        <img width="450px" height="200px" src={logo} alt="logo" />
        <Wrapper>
          login
          <Input type="text" />
        </Wrapper>
        <Wrapper>
          senha
          <Input type="password" />
        </Wrapper>
        <Button>entrar</Button>
      </Content>
    </Container>
  )
}
