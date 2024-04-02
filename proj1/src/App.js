import './App.css';
import { Header,Hero,Container,MostPop,GamingLibrary,Footer,Profile } from './Components/index';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Container>
        <Routes>
          <Route
          path='/' element={
            <Fragment>
              <Hero/>
              <MostPop/>
              <GamingLibrary/>
            </Fragment>
          }
          />
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
