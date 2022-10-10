import style from "./splash.module.css"
import{ useState, useEffect} from "react"
import { AddressFinder } from "@knocode/address-finder";
import { Link } from "react-router-dom";

function Splash(){
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [streetAddress, setStreetAddress] =useState("")
    console.log(streetAddress)

    function SubmitAddress(event){
        event.preventDefault();
        console.log(event.target.elements.username.value) // from elements property
        console.log(event.target.username.value)      
    }
    // dynamic Width
    useEffect(() => {
      function width() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", width);
      width();
    }, [width]);
     useEffect(() => {
       function height() {
         setHeight(window.innerHeight);
       }
       window.addEventListener("resize", height);
       height();
      
     }, [height]);

      useEffect(() => {
        AddressFinder.setup({
          inputField: "#line_1",
          outputFields: {
            line_1: "#line_1",
            line_2: "#line_2",
            line_3: "#line_3",
            post_town: "#post_town",
            postcode: "#postcode",
          },
        });
      }, []);

    return (
      <section
        className={style.MainContainerSplash}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <h1>RETROFIT YOUR HOME</h1>
        <div className={style.ApiStreetHolder}>
          <div className={style.InputHodler}>
            <form className={style.FormAddress}>
              <label htmlFor="line_1">Address Line 1</label>
              <input
                className={style.FullInputForm}
                type="text"
                id="line_1"
                placeholder="Start typing your address..."
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <label htmlFor="line_2">Address Line 2</label>
              <input
                type="text"
                id="line_2"
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <label htmlFor="line_3">Address Line 3</label>
              <input
                type="text"
                id="line_3"
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <label htmlFor="post_town">Town or City</label>
              <input
                type="text"
                id="post_town"
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <label htmlFor="postcode">Postcode</label>
              <input
                type="text"
                id="postcode"
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <div className={style.SubmitBtnFormContainer}>
                <Link to="/Assesment">
                  <input type="submit" className={style.SubmitBtnForm}></input>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
    }

export default Splash;