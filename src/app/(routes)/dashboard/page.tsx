"use client";
import styles from "../../page.module.css";
import {Button} from '../../Components/Button/Button';
export default function Dashboard() {
  return (
    <main className={styles.main}>
      <h1>Dashboard</h1>
      <Button 
        label="Click Here"
        backgroundColor="#fff000"
        borderRadius={false}
      />
    </main>
  );
}