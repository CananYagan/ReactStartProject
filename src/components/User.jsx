

function User({name,surname,age,isLoggedIn}){
    console.log()
    return(
        <>
            <h1> {isLoggedIn ? `${name} ${surname} ${age} `: "Giriş Yapmadınız"}</h1>
          
        </>
    )
}

export default User;