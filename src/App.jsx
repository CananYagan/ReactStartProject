import './App.css';
import Header from './components/Header'
import User from './components/User'

const users=[
  {id:1,name:"Canan"}
  ,{id:2,name:"Halim"}]

function App() {
  return (
    <>
      {/* jsx html yazar gibi javascipt yazma = return createElement("div",null,"hello")*/}
     <Header/>
     <User 
     name="Canan" 
     surname="Yagan" 
     age={"30"} 
     isLoggedIn={true} 
     friends={["Ayşe","Fatma","Zeynep"]}
     //users={users}
     />

    </>
  );
}

export default App;
    