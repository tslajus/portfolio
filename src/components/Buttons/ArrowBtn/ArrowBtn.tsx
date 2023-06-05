import React, { ButtonHTMLAttributes } from "react";
import { IoArrowBackSharp as Arrow } from "react-icons/io5";

import styles from "./ArrowBtn.module.scss";

type NavButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  direction?: "up" | "down" | "current";
  data?: number;
  isActive?: boolean;
  isReversed?: boolean;
};

const ArrowButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(
  (props, ref) => {
    const {
      direction,
      isActive = false,
      isReversed = false,
      onClick,
      onMouseEnter,
      onMouseLeave,
      data,
      className,
    } = props;

    return (
      <button
        ref={ref}
        className={`${styles.btn} ${styles[`btn--${direction}`]} 
        
        ${isReversed && styles["btn--reversed"]}
        ${isActive && styles["btn--current"]}
        ${className}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data-index={data}
      >
        <Arrow />
      </button>
    );
  }
);

export default ArrowButton;
