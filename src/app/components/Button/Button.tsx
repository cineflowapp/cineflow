import styles from './styles.module.css'

import React, { ReactElement } from 'react'

interface ButtonTypes {
    content: string,
    icon?: ReactElement
}

export default function Button(props: ButtonTypes) {
  return (
    <button className={styles.button}>
        {props.icon}
        {props.content}
    </button>
  )
}