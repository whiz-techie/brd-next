"use client"
import Image from "next/image";
import BrdHeader from "./common/BrdHeader"
// import './../assets/scss/'

export default function Home() {
  return (
    <main className="page-wrapper">
    <BrdHeader btnStyle="round" HeaderSTyle="header-not-transparent" />
    <div className="slider-area slider-style-1 bg-transparent height-850">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <span className="subtitle">Button For Change</span>
                  <h1 className="title theme-gradient display-two">
                    Button R Digitech <br />{" "}
                    {/* <Typed
                      strings={["Consulting.", "Finance.", "Agency."]}
                      typeSpeed={80}
                      backSpeed={5}
                      backDelay={1000}
                      loop
                    /> */}
                  </h1>
                  <p className="description">
                    We are young and dynamic company; we build innovative
                    solutions using emerging technologies
                  </p>
                  <div className="button-group">
                    {/* <Link
                      className="btn-default btn-medium btn-border round btn-icon "
                      to="/contact"
                    >
                      Contact Us{" "}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


 </main>
  );
}
