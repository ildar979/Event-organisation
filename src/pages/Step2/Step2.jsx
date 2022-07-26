import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Step2.module.css'
import { IoLocationOutline } from 'react-icons/io5'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi'
import { FiPhone, FiMail } from 'react-icons/fi'

export default function Step2() {
  const inputs = useSelector(store => store.inputs)

  const reverse = (str) => {
    return str?.split('-').reverse().join('-').replace(/[\-\/]/g,'.') 
  }

  return (
    <div className={ styles.page2 }>
      <div className={ styles.container }>
        <header className={ styles.container__header }>
          <div className={ styles.container__header_attention }>!</div>
          <p className={ styles.container__header_text }>Проверьте ваше мероприятие на 
          наличие ошибок, если все в порядке - отправляйте на модерацию.</p>
        </header>
        <main>
          <article className={ styles.info }>
            <header className={ styles.info__heaedr }>
              <div className={ styles.info__heaedr_rate }>{ inputs?.rate }</div>
              <div className={ styles.info__heaedr_title }>{ inputs?.infoTitle }</div>
            </header>
            <p><IoLocationOutline className={ styles.info__location }/>
              <span className={ styles.info__location_adress }>г. { inputs?.city } ул. { inputs?.adress }</span>
            </p>
            <p><FaRegCalendarAlt className={ styles.info__dateIcon }/>
              <span className={ styles.info__dateIcon_date }>{ reverse(inputs?.startDate) }, { reverse(inputs?.finishDate) }</span>
            </p>
            <p><BiTime className={ styles.info__timeIcon }/>
              <span className={ styles.info__timeIcon_time }>{ inputs?.startTime }, { inputs?.finishTime }</span>
            </p>
          </article>
          <article className={ styles.contacts }>
            <div className={ styles.contacts__title }>Контакты</div>
            <p><FiPhone className={ styles.contacts__phoneIcon }/>
              <span className={ styles.contacts__phoneIcon_phone }>{ inputs?.phoneNumber }</span>
            </p>
            <p><FiMail className={ styles.contacts__emailIcon }/>
              <span className={ styles.contacts__phoneIcon_email }>{ inputs?.email }</span>
            </p>
          </article>
          <article className={ styles.organizator }>
            <span className={ styles.organizator__name }>{ inputs?.organizator }</span>
            <div className={ styles.organizator__title }>Организатор мероприятия</div>
          </article>
          <section className={ styles.infoDiscription }>{ inputs?.infoDiscription }</section>
        </main>
        <footer className={ styles.btnGroup }>
          <button className={ styles.btnBack }>Назад</button>
          <button className={ styles.btnModeration }>Отправить на модерацию</button>
        </footer>
      </div>    
    </div>
  )
}
