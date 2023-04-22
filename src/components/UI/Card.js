import React from 'react'
import classes from './Card.module.css'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const Card = (props) => {
  return (
    <span className={classes.card}>
        <h2>{props.heading}</h2>

        <div>
            <button onClick={props.buttonAction}>{props.button}</button>
            <section onClick={props.sectionAction}>
                <AddCircleIcon className={classes.icon}/>
                {props.section}
            </section>
        </div>
    </span>
  )
}
