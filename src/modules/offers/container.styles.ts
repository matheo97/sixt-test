import styled from 'styled-components';
import { MOBILE, TABLET } from '../../constants/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: fit-content;
  background-color: ${({ theme }) => theme.backgrounds.default};
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
    padding: .2rem;
    background-color: ${({ theme }) => theme.backgrounds.terciary};
    @media (max-width: ${TABLET}) {
      width: 100%;
    }
  }
  img {
    width: 7.5rem;
    height: 4.5rem;
  }
  @media (max-width: ${TABLET}) {
    height: 5.5rem;
  }
  @media (max-width: ${MOBILE}) {
    height: 5rem;
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
  @media (max-width: ${TABLET}) {
    height: 4rem;
  }
  @media (max-width: ${MOBILE}) {
    height: 3.5rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 75rem;
  height: 100%;
  background-color: ${({ theme }) => theme.backgrounds.default};
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
  height: 50.69rem;
  position: relative;
  .content {
    position: absolute;
    top: 4rem;
    padding: 1.5rem;
    height: fit-content;
    width: 100%;
  }
  @media (max-width: ${MOBILE}) {
    display: none;
  }
`;

export const CardSection = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  width: 75%;
  height: 100%;
  .offers {
    display: flex;
    width: 100%;
    height: fit-content;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: center;
    min-height: 48.75rem;
    @media (max-width: ${MOBILE}) {
    width: 100%;
    min-height: 100%;
    .pagination {
      margin-top: .5rem;
      margin-bottom: .5rem;
    }
  }
  }
  @media (max-width: ${MOBILE}) {
    width: 100%;
    .pagination {
      margin-top: .5rem;
      margin-bottom: .5rem;
    }
  }
`;
