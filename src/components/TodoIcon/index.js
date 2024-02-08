import React from "react";
import { TiTimes, TiTick } from "react-icons/ti";
import "./TodoIcon.css";

function TodoIcon({ type, className, onClick }) {
  const iconComponents = {
    delete: TiTimes,
    complete: TiTick,
  };

  const IconComponent = iconComponents[type];

  return (
    <IconComponent type="button" className={className} onClick={onClick} />
  );
}

export { TodoIcon };
