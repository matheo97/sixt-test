import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    height: 100%;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.backgrounds.primary};
  border: none;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  padding: 0;
  width: 100%;
  height: 3rem;
  margin-top: 3rem;
`;
