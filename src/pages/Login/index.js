import {
  Container,
  Picture,
  Input,
  Wrapper,
  Button,
  Content
} from './login.styles'

export const Login = () => {
  return (
    <Container>
      <Picture />
      <Content>
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
