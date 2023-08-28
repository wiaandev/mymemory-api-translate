import React, { useState } from "react";
import styles from "./Translate.module.scss";

const defaultValues = {
  text: "",
};

export default function Translate() {
  const [defValues, setDefValues] = useState(defaultValues);
  const { text } = defValues;

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setDefValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onGetResults = () => {
    console.log("Hell yeah brother");
    console.log(defValues);
  };

  return (
    <div className={styles.container}>

    <div >
      <textarea
        name="text"
        type="text"
        placeholder="Enter your sentence"
        className={styles.input}
        onChange={onChangeValue}
        value={text}
      />
    </div>

    <button className={styles.button} onClick={onGetResults}>
        Start Now
      </button>
    </div>
  );
}
