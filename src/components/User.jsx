import PropTypes from "prop-types";

function User({name,surname,age,isLoggedIn,friends,users}){
    return (
      <>
        <h1>
          {" "}
          {isLoggedIn ? `${name} ${surname} ${age} ` : "Giriş Yapmadınız"}
        </h1>

        {friends.map((friends) => (
          <div>{friends}</div>
        ))}

        {friends.map((friends, index) => (
          <p key={index}>
            {index}-{friends}
          </p>
        ))}

        {/*Eğer içerisinde başka işlem de yapılacaksa return kullanılır
         {users.map((users) => {
          return (
            <p key={users.id}>
              {users.id} {users.name}
            </p>
          );
        })} */}

        {users && users.map((users) => (
          <p key={users.id}>
            {users.id}-{users.name}
          </p>
        ))}
      </>
    );
}
User.propTypes={
  name:PropTypes.string.isRequired,
  surname:PropTypes.string.isRequired,
  isLoggedIn:PropTypes.bool.isRequired,
  age:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
  friends:PropTypes.array.isRequired,
  users:PropTypes.array
};

export default User;