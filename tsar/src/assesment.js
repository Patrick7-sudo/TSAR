import { useState, useEffect } from "react";
import style from "./assesment.module.css";
import {
  RadioGroup,
  RadioButton,
  ReversedRadioButton,
} from "react-radio-buttons";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";


function Assesment() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  return (
    <section
      className={style.MainContainerSplash}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className={style.MainContainerSplashMini}>
        <div className={style.heading}>
          <h1>Choose Your Supplier</h1>
        </div>
        <div className={style.CalenderHolder}>
          <div className={style.InputHodler}>
            <RadioGroup
              onChange={() => {}}
              vertical
              className={style.radioButtonHolder}
            >
              <RadioButton
                value="builder1"
                rootColor="black"
                pointColor="olive"
              >
                Builder 1
              </RadioButton>
              <RadioButton
                value="builder2"
                rootColor="black"
                pointColor="olive"
              >
                Builder 2
              </RadioButton>
              <RadioButton
                value="builder3"
                rootColor="black"
                pointColor="olive"
              >
                Builder 3
              </RadioButton>
              <RadioButton
                value="builder4"
                rootColor="black"
                pointColor="olive"
              >
                Builder 4
              </RadioButton>
              <RadioButton
                value="builder5"
                rootColor="black"
                pointColor="olive"
              >
                Builder 5
              </RadioButton>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className={style.buttonContainer}>
        <Link to="/">
          <button className={style.SubmitBtnForm}>Return</button>
        </Link>

        <Link to="/book">
          <button className={style.SubmitBtnForm}>Continue</button>
        </Link>
      </div>
    </section>
  );
}

export default Assesment;
