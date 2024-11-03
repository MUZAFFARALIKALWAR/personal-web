import "../style/services.css";
import { GiSoundOn } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";

function Services(){
    return(
        <main className="main">
            <div className="ser-container">
                 {/* top div */}
                 <div className="top-div-ser">
                    <h2 className="title-ser">My Services</h2>
                    <p className="des-ser">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                 </div>
                 {/* bottom div */}
                 <div className="boxes-con">
                    <div className="box">
                        <FaLaptopCode className="ser-icon"/>
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span>
                    </div>
                    <div className="box">
                        <GiSoundOn className="ser-icon"/>
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span>
                    </div>
                    <div className="box">
                        <FaLaptopCode className="ser-icon"/>
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span>
                    </div>
                    <div className="box">
                        <FaLaptopCode className="ser-icon"/>
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span>
                    </div>
                    <div className="box">
                        <FaLaptopCode className="ser-icon"/>
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span>
                    </div>
                    <div className="box">
                        <FaLaptopCode className="ser-icon"/>
                        <h3>Web Development</h3>
                        <span>Blog, E-Commerce</span>
                    </div>
                   
                 </div>
            </div>
        </main>
    )
}
export default  Services