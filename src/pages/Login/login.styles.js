import styled from 'styled-components'
import { Color } from '../../utils/colors.app'
import eueele from '../../assets/eueele1.png'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  background-color: #fefefe;
`

export const Picture = styled.div`
  height: 100%;
  position: relative;
  background: url(${eueele}) 50% / cover no-repeat;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', 'sans serif';
  color: '#1E1E1E';
  gap: 1.625rem;
`
export const Input = styled.input`
  width: 20rem;
  height: 5rem;
  font-size: 20px;
  border-radius: 0.25rem;
  border: 2px solid #000;
  background: #fefefe;
`
export const Button = styled.button`
  width: 10.5rem;
  height: 3.75rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: ${Color.PURPLE_MAIN};
  flex-shrink: 0;
  color: #ffffff;
  cursor: pointer;
  background-color: ${Color.PURPLE_MAIN};
`
