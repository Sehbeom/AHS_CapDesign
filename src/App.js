import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';
import MainPage from './components/main/page';

const Container = styled.div`
 width: 100vw;
 height: 100vh;
`

function App() {
  return (
    <Container>
      <MainPage />
    </Container>
  );
}

export default App;
