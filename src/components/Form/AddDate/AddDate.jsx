import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './AddDate.module.css'


export default function AddDate() {

  const inputs = useSelector(store => store.inputs)
  const dispatch = useDispatch()

  const handlerInputs = (event) => {
    dispatch({ type: 'DATA_TYPING', payload: { [event.target.name]: event.target.value } })
  }
 

  return (
    <div>
    <div  className={styles.date}>
      <div className={styles.start}>
        <div className={styles.start__date}>
          <label className={styles.start__date_label}
            htmlFor="start">Дата начала</label>
          <input  
            className={styles.start__date_input}
            type="date"
            id="start" 
            min="0000-01-01" max="9999-12-31"
            name='startDate'
            onChange={ handlerInputs }
            value={ inputs.startDate ?? "" }
          />
        </div>
        <div className={styles.start__time}>
          <label className={styles.start__time_label}
            htmlFor="start">Время начала</label>
          <input 
            className={styles.start__time_input}
            type="time" id="start" 
            min="00:00" max="23:59"
            name='startTime'
            onChange={ handlerInputs }
            value={ inputs.startTime ?? "" }
          />
        </div>
      </div>
      <div className={styles.deffis}></div>
      <div className={styles.finish}>
        <div className={styles.finish__date}>
          <label className={styles.finish__date_label}
            htmlFor="finish">Дата окончания</label>
          <input  
            className={styles.finish__date_input}
            type="date" id="start" 
            min="0000-01-01" max="9999-12-31"
            name='finishDate'
            onChange={ handlerInputs }
            value={ inputs.finishDate ?? "" }
          />
        </div>
        <div className={styles.finish__time}>
          <label className={styles.finish__time_label}
            htmlFor="finish">Время окончания</label>
          <input  
            className={styles.finish__time_input}
            type="time" id="start" 
            min="00:00" max="23:59"
            name='finishTime'
            onChange={ handlerInputs }
            value={ inputs.finishTime ?? "" }
          />
        </div>
      </div>
      <button type='submit' className={styles.addDateBtn}>+Добавить дату</button>
    </div>
    </div>
  )
}



