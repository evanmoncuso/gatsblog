import * as React from 'react';

import styles from "./button.module.css"

const Button = ({ buttonText }) => {
  const handleClick = () => {
    console.log('toots');
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      {buttonText}
    </button>
  )
}

export default Button;