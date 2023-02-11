import './App.css';
import Header from './components/Header'
import User from './components/User'
import {useState} from 'react';

const users=[
  {id:1,name:"Canan"}
  ,{id:2,name:"Halim"}]



function App() {
  const [name,setName]=useState("Canan");
  const [age,setAge]=useState(31);
  const [friends,setFriends]=useState(["Adil","Seher"])
  const [addres,setAddress]=useState({title:"İstanbul",zip:343434})
  
  console.log(name,age)
  return (
    <>
    <h1>Merhaba {name} {age} </h1>
    <button onClick={()=>setName("Halim")}> Click Name</button>
    <button onClick={()=>setAge(35)}>Click Age</button>

    <hr />
    <br ></br >

    <h2>Friends</h2>
    {
      friends.map((friends,index)=>(
        <div key={index}>{friends}</div>
      ))
    }

    <br />
    <button onClick={()=>setFriends([...friends, name])}>add new friends</button>

    <hr />
    <br ></br >

    <h2>Adress</h2>
        <div>{addres.title} {addres.zip}</div>

    <br />
    <button onClick={()=>setAddress({...addres,title:"Erzurum",zip:252525})}>change the address</button>

      {/* jsx html yazar gibi javascipt yazma = return createElement("div",null,"hello")*/}
     {/* <Header/> */}
     {/* <User 
     //name="Canan" 
     surname="Yagan" 
     age={"30"} 
     isLoggedIn={true} 
     friends={["Ayşe","Fatma","Zeynep"]}
     //users={users}
     address={{title:"Ataşehir",zip:34758}}
     /> */}

    </>
  );
}

export default App;
    