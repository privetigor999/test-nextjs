import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import A from "../components/A";
import Maincontainer from "../components/MainContainer";

export default function Home() {
  return (
    <Maincontainer keywords={"main page"}>
      <h1>Hello, NextJS!</h1>
    </Maincontainer>
  );
}
