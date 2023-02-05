
const name="Canan";
const isLoggedIn=true;
function Header(){
    
    return (
        <>
         <p>Merhaba Ben Header bileşeniyim</p> 
         <label htmlFor="myinput">Name
            <input type="text" name="" id="myinput" />
         </label>

        {/* <h1>{isLoggedIn ? `Benim adım ${name}` :"Giriş Yapmadınız"}</h1> */}
        </>
      );
}
 export default Header;