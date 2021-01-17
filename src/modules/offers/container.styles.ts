import styled from 'styled-components';
import { MOBILE, TABLET } from '../../constants/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.backgrounds.terciary};
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 6rem;
    width: 75rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.backgrounds.terciary};
    @media (max-width: ${TABLET}) {
      width: 100%;
    }
  }
  img {
    width: 5.5rem;
    height: 2.5rem;
  }
`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 4.5rem;
    width: 75rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.backgrounds.secondary};
    .filters {
      display: none;
    }
    @media (max-width: ${TABLET}) {
      width: 100%;
    }
    @media (max-width: ${MOBILE}) {
      .filters {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 75rem;
  height: 100%;
  background-color: white;
  @media (max-width: ${TABLET}) {
    width: 100%;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 25%;
  height: 100%;
  background-color: red;

  @media (max-width: ${MOBILE}) {
    display: none;
  }
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 75%;
  height: 100%;
  background-color: green;

  @media (max-width: ${MOBILE}) {
    width: 100%;
  }
`;
