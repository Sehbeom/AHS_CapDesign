import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';
import MainPage from './components/main/page';
import MainRoutes from './components/routes';
import Header from './components/layout/Header';

const Container = styled.div`
 width: 100vw;
 height: 100vh;
`

function App() {
  return (
    // <Container>
    //   <MainPage />
    // </Container>
    <Container>
      <Header />
      {/* <MainPage /> */}
      <MainRoutes />
    </Container>
  );
}

export default App;
