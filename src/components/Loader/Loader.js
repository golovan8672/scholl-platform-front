import React from "react";
import s from './Loader.scss'
import clsx from 'clsx'

const Loader = () => {
  return (
    <div className={clsx(s.spinnerBox)}>
      <div className={clsx(s.blueOrbit, s.leo)}/>

      <div className={clsx(s.greenOrbit, s.leo)}/>

      <div className={clsx(s.redOrbit, s.leo)}/>

      <div className={clsx(s.whiteOrbit, s.w1, s.leo)}/>
      <div className={clsx(s.whiteOrbit, s.w2, s.leo)}/>
      <div className={clsx(s.whiteOrbit, s.w3, s.leo)}/>
    </div>
  );
};

export default Loader;
