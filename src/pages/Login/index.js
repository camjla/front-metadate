import { Container, Picture, Input, Wrapper, Button } from './login.styles'

export const Login = () => {
  return (
    <Container>
      <Picture />
      <Wrapper>
        <Input type="text" />
        <Input type="password" />
        <Button>entrar</Button>
      </Wrapper>
    </Container>
  )
}
