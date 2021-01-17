import styled from 'styled-components';

export const Modal = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgrounds.modal};
  display: flex;
  justify-content: center;
  left: 0;
  overflow: auto;
  position: absolute;
  top: 0;
  z-index: 111;
  height: 100vh;
  width: 100vw;
  .modal-child {
    background-color: white;
    height: fit-content;
    position: relative;
    width: fit-content;
    padding: 5.5rem 3.5rem;
    height: 70vh;
    width: 70vw;
    @media (max-width: 48rem) {
      height: 100vh;
      width: 100vw;
    }
    .close-button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.icon.colors.primary};
      font-size: 1.6rem;
      position: absolute;
      right: 5%;
      top: 5%;
    }
  }
`;