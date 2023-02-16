import {useState,useEffect} from 'react'

function InputExample() {

  const [form,setForm]=useState({name:"",surName:""});
  const onChangeInput =(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  debugger;
  useEffect(() => {
    alert(`${form.name} kere giriş yaptınız`);

    return ()=>console.log("Component Unmount edildi.")
    },[form.name]);

  return (
    <div>
      Name
      <input name="name" value={form.name} onChange={onChangeInput}/>
      <br />
      <br />


      SurName
      <input name="surName" value={form.surName} onChange={onChangeInput}/>
      <br />
      <br />
      <br />
      {form.name} {form.surName}
    </div>
  )
}

export default InputExample