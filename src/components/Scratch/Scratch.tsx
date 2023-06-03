import scratch1 from "@/assets/scratches/scratch_01.svg";
import scratch2 from "@/assets/scratches/scratch_02.svg";
import scratch3 from "@/assets/scratches/scratch_03.svg";
import scratch4 from "@/assets/scratches/scratch_04.svg";
import scratch5 from "@/assets/scratches/scratch_05.svg";
import scratch6 from "@/assets/scratches/scratch_06.svg";
import scratch7 from "@/assets/scratches/scratch_07.svg";
import scratch8 from "@/assets/scratches/scratch_08.svg";
import scratch9 from "@/assets/scratches/scratch_09.svg";
import scratch10 from "@/assets/scratches/scratch_10.svg";
import scratch11 from "@/assets/scratches/scratch_11.svg";
import scratch12 from "@/assets/scratches/scratch_12.svg";
import scratch13 from "@/assets/scratches/scratch_13.svg";
import scratch14 from "@/assets/scratches/scratch_14.svg";

import styles from "./Scratch.module.scss";

type ScratchProps = {
  scratch: {
    variation: number;
    position?: {
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
      width?: string;
      height?: string;
    };
  };
  className?: ClassName;
};

function Scratch({ scratch, className }: ScratchProps) {
  const { variation = 1, position } = scratch;

  let scratchSvg;

  switch (variation) {
    case 1:
      scratchSvg = scratch1;
      break;

    case 2:
      scratchSvg = scratch2;
      break;

    case 3:
      scratchSvg = scratch3;
      break;

    case 4:
      scratchSvg = scratch4;
      break;

    case 5:
      scratchSvg = scratch5;
      break;

    case 6:
      scratchSvg = scratch6;
      break;

    case 7:
      scratchSvg = scratch7;
      break;

    case 8:
      scratchSvg = scratch8;
      break;

    case 9:
      scratchSvg = scratch9;
      break;

    case 10:
      scratchSvg = scratch10;
      break;

    case 11:
      scratchSvg = scratch11;
      break;

    case 12:
      scratchSvg = scratch12;
      break;

    case 13:
      scratchSvg = scratch13;
      break;

    case 14:
      scratchSvg = scratch14;
      break;
  }

  const defaultPosition = {
    top: "auto",
    bottom: "auto",
    left: "auto",
    right: "auto",
    width: "100%",
    height: "100%",
  };

  const mergedPosition = { ...defaultPosition, ...position };

  return (
    <div className={`${styles.scratch} ${className}`} style={mergedPosition}>
      <img src={scratchSvg} alt="Scratch" />
    </div>
  );
}

export default Scratch;
