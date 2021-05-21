import "./App.css";
import styled from "styled-components";

import Header from "./components/Header";


import MusicUploader from "./components/MusicUploader";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


function App() {
  return (
 <>
 <Header/>
 <AppContainer>
  
<MusicUploader/>
     
    </AppContainer>
 
</>
     
    
  );
}

export default App;
