import styles from "./MainPage.module.scss";
import DateSelect from "../../../components/Main/DateSelect";
import Select from "../../../components/Main/Select";
import RadioButton from "../../../components/Radio"
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

// const getDataFromLocalStorage = (field = '') => {
//   localStorage.getItem(field)
// }
//
// const setDataToLocalStorage = (field = '', data = []) => {
//   localStorage.setItem(field, data);
// }

function MainPage(props) {

  // const [doctors, setDoctors] = useState([]);
  const doctors = JSON.parse(localStorage.getItem('doctors'))
  console.log(doctors)

  // const [symptoms, setSymptoms] = useState([]);
  const symptoms = JSON.parse(localStorage.getItem('symptoms'))
  console.log(symptoms);


  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState('');


  const doctorsOptions = useMemo(() => doctors.reduce((acc, doc) => {
      const curQual = acc.find(el => el.label === doc.qualification)
      const formatDoctor = {
        value: doc._id,
        label: doc.name
      }

      if (curQual) {
        curQual.options.push(formatDoctor);
      } else {
        acc.push({ label: doc.qualification, options: [formatDoctor] })
      }

      return acc;
  }, []), [doctors])

  const symptomsOptions = useMemo(() =>
    symptoms.map(symp => ({
      value: symp._id,
      label: symp.name,
      class: symp.class
    }))
  , [symptoms])

  const selectedDoctorTip = useMemo(() =>
    doctors?.find(el => el._id === selectedDoctor)?.qualification,
    [doctors, selectedDoctor]
  );

  const selectedSymptomTip = useMemo(() =>
    symptoms?.find(el => el._id === selectedSymptom)?.class,
    [symptoms, selectedSymptom]
  );

  useEffect(() => {
    axios.get('http://localhost:5000/doctors')
      .then((res) => {
        localStorage.setItem('doctors', JSON.stringify(res.data))
        console.log(res.data)
      })

    axios.get('http://localhost:5000/symptoms')
      .then((res) => {
        localStorage.setItem('symptoms', JSON.stringify(res.data))
        console.log(res.data)
      })
  }, [])

  // console.log(doctors)

  return (
    <div className={styles.card}>
      <Select
        options={doctorsOptions}
        onSelect={(id) => setSelectedDoctor(id)}
        placeholder={'Выберите врача'}
        withGroup
        groupTip={selectedSymptomTip}
      />
      <DateSelect />
      <RadioButton
        options={symptomsOptions}
        onSelect={(id) => setSelectedSymptom(id)}
        withGroup={selectedDoctorTip}
        groupTip={selectedDoctorTip}
      />
    </div>
  )
}

export default MainPage;