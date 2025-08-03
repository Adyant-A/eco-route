import styles from "./page.module.css";
import {Button} from '@heroui/button'; 


export default function Home() {
  return (
    <div className={styles.page}>
      <p>Testing</p>
       <Button>Click me</Button>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}
