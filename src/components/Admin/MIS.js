import React from 'react'
import classes from './MIS.module.css'
import { ClickCard } from '../UI/ClickCard'

export const MIS = () => {
  return (
    <div className={classes.mis}>
      {/* <h1>MIS</h1> */}
      <span className={classes.headingdiv}>
        <h1>MIS</h1>
      </span>
        <section>
            <ClickCard title="Control Centre"/>
            <ClickCard title="Other Reports"/>
        </section>
    </div>
  )
}
