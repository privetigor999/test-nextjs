import { useRouter } from "next/router";
import Maincontainer from "../../components/MainContainer";
import styles from "./../../styles/user.module.scss";
export default function User({ user }) {
  const { query } = useRouter();
  return (
    <Maincontainer keywords={user.name}>
      <div className={styles.user}>
        {" "}
        <h1> Пользователь с id: {query.id}</h1>
        <div>Имя пользователя - {user.name}</div>
        <div>Email - {user.email}</div>
      </div>
    </Maincontainer>
  );
}

export async function getServerSideProps({ params }) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await resp.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
