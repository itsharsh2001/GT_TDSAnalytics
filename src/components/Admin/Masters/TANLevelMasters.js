import React,{useState} from 'react'
import classes from './TANLevelMasters.module.css'
import { ClickCard } from '../../UI/ClickCard'

export const TANLevelMasters = (props) => {
  return (
    <div className={classes.tanlevelmasters}>
        <h3>
        <p onClick={props.masterbreadcrumb}>Masters{">"}</p>
        <p onClick={props.breadcrumb}>Client Level Masters{">"}</p>
        <p onClick={props.subbreadcrumb}>Add Master{">"}</p>TAN Level Masters
        {">"}
      </h3>

        <section>
        <ClickCard title="TDS Configuration" />
        <ClickCard title="GL Master" />
        <ClickCard title="MSN/SAC Master" />
        </section>
    </div>
  )
}
