import './App.css';
import Header from './components/Header'
import User from './components/User'

function App() {
  return (
    <>
      {/* jsx html yazar gibi javascipt yazma = return createElement("div",null,"hello")*/}
     <Header/>
     <User name="Canan" surname="Yagan" age={30} isLoggedIn={true}/>
     
    </>
  );
}

export default App;
    