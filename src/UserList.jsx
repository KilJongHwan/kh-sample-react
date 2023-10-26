// const User = (props) => {
//   return (
//     <>
//       <div>
//         <b>{props.user.userName}</b> <span>{props.user.email}</span>
//       </div>
//     </>
//   );
// };

const UserList = () => {
  const users = [
    {
      id: 100,
      userName: "james",
      email: "1000jm@gamail.com",
    },
    {
      id: 200,
      userName: "kaisa",
      email: "2000kaisa@gmail.com",
    },
    {
      id: 300,
      userName: "Jessy",
      email: "3000js@gmail.com",
    },
  ];
  //   const newUsers = users.map((user) => (
  //     <div key={user.email}>
  //       <b>{user.userName}</b> <span>{user.email}</span>
  //     </div>
  //   ));
  const seasons = ["New Spring", "Hot Summer", "Void Fall", "White Winter"];
  const newSeason = seasons.map((e, index) => <li key={index}>{e}</li>);
  return (
    <>
      <h1>1000 List</h1>
      {users &&
        users.map((user) => (
          <div key={user.email}>
            <b>{user.userName}</b> <span>{user.email}</span>
          </div>
        ))}
      <h1>Season</h1>
      <ul>{newSeason}</ul>
      {/* {newUsers} */}
    </>
  );
};

export default UserList;
