import styled from "styled-components";

export const ContainerApp = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5vw;
  align-items: center;
  flex-wrap: wrap;

  width: 100vw;
  margin: 0 auto;
  border-radius: 4px;
  padding: 10vh 6vw;

  background: rgb(255, 255, 255);
  border: 1px solid #838383;
  border-top: 2px solid #838383;

  @media screen and (min-width: 780px) {
    flex-wrap: nowrap;
    width: 70vw;
  }
`;

export const StyledContainerResult = styled.div`
  h2 {
    width: 220px;
    padding-bottom: 4px;
    border-bottom: 1px solid #6d6d6d;

    color: #0030b4;
    font-size: 21px;
    font-weight: 800;
    text-transform: uppercase;
  }

  span {
    font-weight: 700;
  }
`;
