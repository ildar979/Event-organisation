import React from 'react'
import AdditionalInfo from './AdditionalInfo/AdditionalInfo'
import Contacts from './Contacts/Contacts'
import Info from './Info/Info'
import Organizer from './Organizer/Organizer'
import styles from './Form.module.css'
import AddDate from './AddDate/AddDate'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Form() {

  const inputs = useSelector(store => store.inputs)
  console.log('Inputs from Store', inputs)
  const dispatch = useDispatch()

  const handlerClear = (event) => {
    // event.preventDefault()
    dispatch({ type: 'INPUTS_CLEAR', payload: {} })
  }

  return (
    <div style={{width: '1200px', height: '1934px', backgroundColor: 'white', position: 'relative'}}>
      <form >
        <Organizer/>
        <Contacts/>
        <Info/>
        <AddDate/>  
        <AdditionalInfo/>
        <div className='buttonGroup'>
          <button onClick={() => { handlerClear() }} className={ styles.abortBtn }>Отменить</button>
          <Link  to='/step2' className={ styles.nextBtn }>Далее</Link>
        </div>
      </form> 
    </div>
  )
}

