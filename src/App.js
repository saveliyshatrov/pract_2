import {Main, Header, Footer} from './components'
import './App.css';

function App() {
  const styles = {
    backgroundColor: 'darkgreen',
    color: 'white'
  };
  return (
    <>
      <Header {...styles}>Практическая работа №2</Header>
      <Main name={'Анна'} group={'ИКБО'}/>
      <Footer {...styles}>Made by Ann</Footer>
    </>
  );
}

export default App;
