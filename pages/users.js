import React from "react";
import Link from "next/link";
import Maincontainer from "../components/MainContainer";
const Users = ({ users }) => {
  return (
    <Maincontainer keywords={"users"}>
      <h1>Список пользователей:</h1>
      <ul>
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <li>{user.name}</li>
          </Link>
        ))}
      </ul>
    </Maincontainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await resp.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
