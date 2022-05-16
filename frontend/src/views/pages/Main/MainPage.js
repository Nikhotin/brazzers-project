import React, { useState, useEffect } from "react";
import styles from "./MainPage.module.scss";
import DateSelect from "../../../components/Main/DateSelect";
import Submit from "../../../components/Main/Submit";
import Select from "../../../components/Main/Select";
import Forma from "../../../components/Formik";
import { fakeApiMethod } from "../../../services/api"

function MainPage(props) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fakeApiMethod('doctors').then((d) => {
      setDoctors(d)
    });
  }, [])

  return (
    <div className={styles.card}>
      <Forma />
        <form>
          <Select array={doctors} selector={'name'} value={"врача"}/>
          <DateSelect />
          <Submit />
        </form>
    </div>
  )
}

export default MainPage;
