import React from 'react'
import styles from './AddFoto.module.css'
import { MdOutlineCameraEnhance } from 'react-icons/md'


export default function AddFoto() {

  return (
    <div>
      <button className={ styles.btnAddFoto }> 
        <MdOutlineCameraEnhance className={ styles.btnAddFoto__logo }/>
      </button>
      <div className={ styles.btnAddFoto__discription }>
        Главная фотография (обложка мероприятия)
      </div>
    </div>
  )
}
