import React, { ButtonHTMLAttributes } from "react";

import styles from "./TxtBtn.module.scss";

type NavButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  data?: number;
  isSelected?: boolean;
};

const TxtBtn = React.forwardRef<HTMLButtonElement, NavButtonProps>(
  (props, ref) => {
    const {
      isSelected = false,
      onClick,
      onMouseEnter,
      onMouseLeave,
      data,
      className,
      children,
    } = props;

    return (
      <button
        ref={ref}
        className={`${styles.btn} ${
          isSelected && styles["btn--selected"]
        } ${className}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data-index={data}
      >
        {children}
      </button>
    );
  }
);

export default TxtBtn;
