import React, { useEffect, useState } from "react";
import styles from "./Translate.module.scss";
import axios from 'axios';
import languageJSON from '../languages.json'

const defaultValues = {
  text: "",
};

export default function Translate() {
  const [defValues, setDefValues] = useState(defaultValues);
  const { text } = defValues;
  const [languageSelected, setLanguageSelected] = useState(languageJSON);
  const [languageSelected2, setLanguageSelected2] = useState(languageJSON);
  const [translatedText, setTranslatedText] = useState();

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setDefValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };


    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.mymemory.translated.net/get?q=${text}&langpair=${defValues.languageSelected}|${defValues.languageSelected2}`
        );
        console.log(response.data);
        setTranslatedText(response.data.responseData.translatedText);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // Call the fetchData function when defValues change


  const onGetResults = () => {
    console.log("Hell yeah brother");
    console.log(defValues);
    console.log(languageSelected);
    console.log(languageSelected2);
    if(setLanguageSelected && setLanguageSelected2){
      fetchData()
    } else {
      setTranslatedText("Make sure to select both languages!!");
    }

  };






  return (
    <div className={styles.container}>

      <h1>Start Translating Now</h1>

      <div>
        <textarea
          name="text"
          type="text"
          placeholder="Enter your sentence"
          className={styles.input}
          onChange={onChangeValue}
          value={text}
        />
      </div>

      <h3>Translate from</h3>
      <select
        name="languageSelected" // Add the 'name' attribute to the <select> element
        value={languageSelected["ISO639-1Code"]}
        onChange={onChangeValue}
        className={styles.dropdown}
      >
        {languageSelected.map((l, key) => (
          <option key={key} value={l["ISO639-1Code"]}>
            {l.EnglishnameofLanguage}  {l["ISO639-1Code"]}
          </option>
        ))}
      </select>

      <h3>To</h3>
      <select
        name="languageSelected2" // Add the 'name' attribute to the <select> element
        value={languageSelected2["ISO639-1Code"]}
        onChange={onChangeValue}
        className={styles.dropdown}
      >
        {languageSelected2.map((l, key) => (
          <option key={key} value={l["ISO639-1Code"]}>
            {l.EnglishnameofLanguage}  {l["ISO639-1Code"]}
          </option>
        ))}
      </select>

      <button className={styles.button} onClick={onGetResults}>
        Translate
      </button>

      <p className={styles.translatedText}>{translatedText}</p>
    </div>
  );
}
