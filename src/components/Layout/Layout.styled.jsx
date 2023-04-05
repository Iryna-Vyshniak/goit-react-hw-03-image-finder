import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[4]}px;
  height: 100vh;
`;
