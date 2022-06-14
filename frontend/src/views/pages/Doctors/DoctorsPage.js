import React, {useEffect, useMemo, useState} from "react";
import axios from 'axios';
import styles from './DoctorsPage.module.scss';

function DoctorsPage(props) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get('http://localhost:5000/doctors')
      .then((res) => {
        setDoctors(res.data)
      })
      .finally(() => setLoading(false))
  }, [])

  const DoctorsLayout = useMemo(() => {
    if (loading) {
      return (
        <div className={styles.cardContainer}>
          <b>Загрузка</b>
        </div>
      )
    }
    if (doctors.length) {
      return doctors.map(el => (
        <div className={styles.card}>
          <div>
            { el.name }
          </div>
          <div>
            { el.qualification }
          </div>
        </div>
      ))
    }
    return (
      <div className={styles.card}>
        <div>
          No doctors
        </div>
      </div>
    )
  }, [loading, doctors])

  return (
    <>
      { DoctorsLayout }
    </>
  );
}

export default DoctorsPage;