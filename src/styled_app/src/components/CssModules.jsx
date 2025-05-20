import React from 'react';
import styles from './App.module.css';


function CssModules() {
  return (
    <div>
      <div>
      <h1 className={styles.titulo}>Meu App com CSS Modules</h1>
      <button className={styles.botao}>Clique aqui</button>
    </div>
    </div>
  );
}

export default CssModules;