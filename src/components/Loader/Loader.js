import React from "react";
import s from './Loader.scss'

const Loader = () => {
  return (
    <div className={s.spinner-box}>
      <div className={s.blue-orbit leo}/>

      <div className={s.green-orbit leo}/>

      <div className={s.red-orbit leo}/>

      <div className={s.white-orbit w1 leo}/>
      <div className={s.white-orbit w2 leo}/>
      <div className={s.white-orbit w3 leo}/>
    </div>
  );
};

export default Loader;
