import React from 'react'
import classes from './ClickCard.module.css'

export const ClickCard = (props) => {
  return (
    <div style={{backgroundColor: props.backgroundColor}} onClick={props.onClick} className={classes.clickcard}>
        {props.title}
    </div>
  )
}
