import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Organizer.module.css'

export default function Organizer() { 

  const inputs = useSelector(store => store.inputs)
  const dispatch = useDispatch()

  const handlerInputs = (event) => {
    dispatch({ type: 'DATA_TYPING', payload: { [event.target.name]: event.target.value } })
  }

  
  return (
    <div className={ styles.organizator }>
      <h1 className={ styles.organizator__title }>Информация об организаторе</h1>
      <div className={ styles.organizatorData }>
        <label className={ styles.organizator__label }>Организатор</label>
        <input 
          type="text"
          required
          className={ styles.organizator__input }
          onChange={ handlerInputs }
          name='organizator'
          value={ inputs?.organizator ?? '' }
        />
      </div>
    </div>
  )
}
