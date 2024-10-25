// LoadingSpinner.js
import React from "react";
import s from "./styles.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={s.loadingSpinner}>
      <img src="path/to/your/loading.gif" alt="Loading..." />
      <p>Загрузка данных...</p>
    </div>
  );
};

export default LoadingSpinner;
