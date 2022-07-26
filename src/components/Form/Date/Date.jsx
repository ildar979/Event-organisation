import React from 'react'
import styles from './Date.module.css'


export default function Date({ date, handlerDelete, index }) {

  const reverse = (str) => {
    return str?.split('-').reverse().join('-').replace(/[\-\/]/g,'.') 
  }

  return (
    <div style={{height: '340px'}}>
      <form className={styles.container}>
        <div className={styles.label}>
          <label className={styles.label__startDate}>Дата начала</label>
          <label className={styles.label__startTime}>Время начала</label>
          <label className={styles.label__finishDate}>Дата окончания</label>
          <label className={styles.label__finishTime}>Время окончания</label>
        </div>
        <div className={styles.deffis}></div>
        <div className={styles.date}>
          <div className={styles.date__startDate}>
            <span className={styles.date__startDate_content}>{reverse(date.startDate)}</span>
          </div>
          <div className={styles.date__startTime}>
            <span className={styles.date__startTime_content}>{date.startTime}</span>
          </div>
          <div className={styles.date__finishDate}>
            <span className={styles.date__startDate_content}>{reverse(date.finishDate)}</span>
          </div>
          <div className={styles.date__finishTime}>
            <span className={styles.date__startTime_content}>{date.finishTime}</span>
          </div>
        </div>
        <button onClick={() => handlerDelete(index)} className={styles.deleteBtn}>x</button>
      </form>
    </div>
  )
}
