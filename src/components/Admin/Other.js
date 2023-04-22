import React from 'react'
import classes from './Other.module.css'
import { ClickCard } from '../UI/ClickCard'

export const Other = () => {
  return (
    <div className={classes.other}>
      {/* <h1>Other</h1> */}
      <span className={classes.headingdiv}>
        <h1>Other</h1>
      </span>
        <section>
            <ClickCard title='Form 16A/27D'/>
            <ClickCard title='Form 15CA/CB'/>
            <ClickCard title='NR Services'/>
        </section>
    </div>
  )
}
