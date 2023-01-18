import styled from "styled-components";

export const ContainerApp = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5vw;
  align-items: center;
  flex-wrap: wrap;

  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  border-radius: 4px;
  padding: 10vh 6vw;

  background: var(--White);
  border: 1px solid var(--GreyText);
  border-top: 2px solid var(--GreyText);

  @media screen and (min-width: 780px) {
    flex-wrap: nowrap;
    width: 70vw;
    height: 60vh;
  }
`;

export const StyledContainerResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;

  h2 {
    width: 220px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--GreyTextLight);

    color: var(--Blue);
    font-size: 21px;
    font-weight: 800;
    text-transform: uppercase;
  }

  span {
    font-weight: 700;
  }
`;
