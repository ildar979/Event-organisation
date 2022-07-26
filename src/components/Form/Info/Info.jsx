import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddFoto from '../AddFoto/AddFoto'
import styles from './Info.module.css'

export default function Info() {

  const inputs = useSelector(store => store.inputs)
  const dispatch = useDispatch()

  const handlerInputs = (event) => {
    dispatch({ type: 'DATA_TYPING', payload: { [event.target.name]: event.target.value } })
  }

  return (
    <div className={ styles.info }>
      <h1 className={ styles.info__label }>Общая информация</h1>
      <div className={ styles.infoTitle }>
        <label htmlFor="inputTitle" className={ styles.infoTitle__label }>Название</label>
        <input
          type="text" 
          className={ styles.infoTitle__input } 
          id="inputTitle"
          onChange={ handlerInputs }
          name='infoTitle'
          value={ inputs?.infoTitle ?? '' }
        />
      </div>
      <div className={ styles.infoPhoto }>
        <label htmlFor="infoPhoto" className={ styles.infoPhoto__label }>Фотография</label>
        <AddFoto/>
      </div>
      <div className={ styles.infoDiscription }>
        <label htmlFor="infoDiscription" className={ styles.infoDiscription__label }>Подробное описание</label>
        <input
          type="text" 
          className={ styles.infoDiscription__input } 
          id="infoDiscription"
          onChange={ handlerInputs }
          name='infoDiscription'
          value={ inputs?.infoDiscription ?? '' }
         />
      </div>
    </div>
  )
}
