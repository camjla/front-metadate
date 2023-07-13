import styled from 'styled-components'
import { Color } from '../../utils/colors.app'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fefefe;
`

export const Picture = styled.div`
  width: calc(100% - 800px);
  height: 100%;
  background-image: url(eueele1.png);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', 'sans serif';
  gap: 2rem;
`
export const Input = styled.input`
  width: 20rem;
  height: 5rem;

  border-radius: 0.25rem;
  border: 2px solid #000;
  background: #fefefe;
`
export const Button = styled.button`
  width: 10.5rem;
  height: 4.75rem;
  border-radius: 0.25rem;
  color: #ffffff;
  cursor: pointer;
  background-color: ${Color.PURPLE_MAIN};
`
