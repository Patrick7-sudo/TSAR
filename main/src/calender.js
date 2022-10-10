import{ useState, useEffect} from "react"
import style from "./calender.module.css"
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
function Calenderly() {
 const [width, setWidth] = useState("");
 const [height, setHeight] = useState("");
  return (
    <section
      className={style.MainContainerSplash}
      style={{
        width: `${width}px`,
        minheight: `${height}px`,
      }}
    >
      <div className={style.MainContainerSplashMini}>
        <h1>BOOK YOUR ASSESMENT</h1>
        <div className={style.CalenderHolder}>
          <div className={style.InputHodler}>
            <Calendar />
          </div>
        </div>
      </div>
      <div className={style.buttonContainer}>
        <Link to="/">
          <button className={style.SubmitBtnForm}>Return</button>
        </Link>

        <Link to="/">
          <button className={style.SubmitBtnForm}>Continue</button>
        </Link>
      </div>
    </section>
  );
}

export default Calenderly;
