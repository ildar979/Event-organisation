import React from 'react'
import Date from '../Date/Date'

export default function Dates({ dates, handlerDelete }) {
  console.log(dates)
  return (
    <div>
      {
        dates?.map((date, index) => <Date date={date} key={index} handlerDelete={ handlerDelete }/>)
      }
      
    </div>
  )
}
