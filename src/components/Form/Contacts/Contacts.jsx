import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Contacts.module.css'

export default function Contacts() {

  const inputs = useSelector(store => store.inputs)
  const dispatch = useDispatch()

  const handlerInputs = (event) => {
    dispatch({ type: 'DATA_TYPING', payload: { [event.target.name]: event.target.value } })
  }

  return (
    <div className={ styles.contacts }>
      <h1 className={ styles.contacts__label }>Контактные данные</h1>
      <div className={ styles.inputsContactDetails }>
        <div className={ styles.phoneNumber }>
          <label htmlFor="inputPhoneNumber" className={ styles.phoneNumber__label }>Телефон</label>
          <input
            type="tel" 
            required
            className={ styles.phoneNumber__input } 
            id="inputPhoneNumber"
            onChange={ handlerInputs }
            name='phoneNumber'
            value={ inputs?.phoneNumber ?? '' } 
            pattern="^\(\d{3}\)\d{3}-\d{2}-\d{2}$"
          />
        </div>
        <div className={ styles.mail }>
          <label htmlFor="inputMail" className={ styles.mail__label }>E-mail</label>
          <input
            type="email"
            required
            className={ styles.mail__input }
            id="inputMail"
            onChange={ handlerInputs }
            name='email' 
            value={ inputs?.email ?? '' } 
          />
        </div>
        <div className={ styles.city }>
          <label htmlFor="inputCity" className={ styles.city__label }>Город организатора</label>
          <input
            type="text" 
            required
            className={ styles.city__input } 
            id="inputCity"
            onChange={ handlerInputs }
            name='city'
            value={ inputs?.city ?? ''}
          />
        </div>
      </div>
    </div>
  )
}
