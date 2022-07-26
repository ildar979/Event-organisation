import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './AdditionalInfo.module.css'

export default function AdditionalInfo() {

  const [rates, setRates] = useState([])
  const inputs = useSelector(store => store.inputs)
  const dispatch = useDispatch()

  const handlerInputs = (event) => {
    dispatch({ type: 'DATA_TYPING', payload: { [event.target.name]: event.target.value } })
  }

  const url = 'http://testwork.rdbx24.ru/api/';

  useEffect(() => {
    axios.get(url) 
      .then((data) => {
        if (data.data.result.length) {
          setRates(data.data.result)
        }
      })
  }, []);

  return (
    <div className={ styles.additionalInfo }>
      <div className={ styles.rate }>
        <label htmlFor="rayting" className={ styles.rate__label }>Рейтинг мероприятия</label>
        <select className={ styles.rate__input }
          onChange={ handlerInputs }
          name='rate'
          value={ inputs?.rate ?? '' }
        >
          {
            rates?.map((rate) => 
            <option value={ rate?.title ?? '' } key={ rate.id }
             className={ styles.rate__input_data }>{ rate?.title }</option>)
          }
        </select>
      </div>
      <div className={ styles.adress }>
        <label htmlFor="adress" className={ styles.adress__label }>Адрес мероприятия</label>
        <input
          type="text" 
          className={ styles.adress__input } 
          id="adress"
          onChange={ handlerInputs }
          name='adress'
          value={ inputs?.adress ?? '' }
        />
      </div>
      <hr></hr>
    </div>
  )
}
