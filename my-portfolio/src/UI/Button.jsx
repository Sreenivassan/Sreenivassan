import React, { Fragment } from 'react'
import classes from '../StylingSheet/Button.module.css'

function Button({onClick, buttonName}) {
  return (
   <Fragment>
    <button type='button'onClick={onClick} className={classes.buttonStyle}>{buttonName}</button>
   </Fragment>
  )
}

export default Button