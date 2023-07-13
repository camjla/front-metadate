import styled from 'styled-components'
//import { Color } from '../../utils/colors.app'

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
  background-image: url('../../assets/eueele1.png');
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', 'sans serif';
  gap: 5rem;
`
export const Input = styled.input`
  width: 50rem;
  height: 50rem;

  border-radius: 0.25rem;
  border: 1px solid #000;
  background: #fefefe;
`
export const Button = styled.button`
  width: 12.5rem;
  height: 4.75rem;
  border-radius: 0.25rem;
`
