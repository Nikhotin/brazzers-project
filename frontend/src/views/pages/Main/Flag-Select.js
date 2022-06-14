// import styles from "./MainPage.module.scss";
// import DateSelect from "../../../components/Main/DateSelect";
// import Select from "../../../components/Main/Select";
// import RadioButton from "../../../components/Radio"
// import { useEffect, useMemo, useState } from "react";
// import axios from "axios";
//
// function MainPage(props) {
//   const [doctors, setDoctors] = useState([]);
//   const [symptoms, setSymptoms] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState('');
//   const [selectedSymptom, setSelectedSymptom] = useState('');
//
//   const selectPropsDoctors = useMemo(() => {
//     if (RAK_NA_GORE_SVISTNYL) {
//       return {
//         options: doctors.reduce((acc, doc) => {
//           const curQual = acc.find(el => el.label === doc.qualification)
//           const formatDoctor = {
//             value: doc._id,
//             label: doc.name
//           }
//
//           if (curQual) {
//             curQual.options.push(formatDoctor);
//           } else {
//             acc.push({ label: doc.qualification, options: [formatDoctor] })
//           }
//
//           return acc;
//         }, []),
//         withoutGroup: true
//       }
//     } else {
//       return {
//         options: doctors.map(el => ({
//           value: el._id,
//           label: el.name
//         })),
//         withoutGroup: false
//       }
//     }
//   }, [doctors])
//
//   const symptomsOptions = useMemo(() => symptoms.reduce((acc, symp) => {
//     const curClass = acc.find(el => el.label === symp.class)
//     const formatSymptoms = {
//       value: symp._id,
//       label: symp.name
//     }
//
//     if (curClass) {
//       curClass.options.push(formatSymptoms);
//     } else {
//       acc.push({ label: symp.class, options: [formatSymptoms] })
//     }
//
//     return acc;
//   }, []), [symptoms])
//
//
//   useEffect(() => {
//     axios.get('http://localhost:5000/doctors')
//       .then((res) => {
//         setDoctors(res.data)
//       })
//
//     axios.get('http://localhost:5000/symptoms')
//       .then((res) => {
//         setSymptoms(res.data)
//       })
//   }, [])
//
//   return (
//     <div className={styles.card}>
//       <Select
//         {...selectPropsDoctors}
//         onSelect={(id) => setSelectedDoctor(id)}
//         placeholder={'Выберите врача'}
//       />
//       <DateSelect />
//       <RadioButton
//         options={symptomsOptions}
//         onSelect={(id) => setSelectedSymptom(id)}
//       />
//     </div>
//   )
// }
//
// export default MainPage;