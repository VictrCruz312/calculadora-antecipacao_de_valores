import Description from "./components/Description";
import { ContainerApp, StyledContainerResult } from "./style";
import Form from "./components/Form";
import { useState } from "react";

export interface IResponse {
  1: number;
  15: number;
  30: number;
  90: number;
}

function App() {
  const [response, setResponse] = useState<IResponse | undefined>(undefined);

  return (
    <>
      <ContainerApp className="App">
        <Form setResponse={setResponse} />
        <StyledContainerResult>
          <h2>Você receberá:</h2>
          <Description colorText="var(--Blue)" fontSize="17px">
            Amanhã: <span>R$ {response ? response[1] + ",00" : "0, 00"}</span>
          </Description>
          <Description colorText="var(--Blue)" fontSize="17px">
            Em 15 dias:{" "}
            <span>R$ {response ? response[15] + ",00" : "0, 00"}</span>
          </Description>
          <Description colorText="var(--Blue)" fontSize="17px">
            Em 30 dias:{" "}
            <span>R$ {response ? response[30] + ",00" : "0, 00"}</span>
          </Description>
          <Description colorText="var(--Blue)" fontSize="17px">
            Em 90 dias:{" "}
            <span>R$ {response ? response[90] + ",00" : "0, 00"}</span>
          </Description>
        </StyledContainerResult>
      </ContainerApp>
    </>
  );
}

export default App;
