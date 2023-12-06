import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import {iotmonitor,iotmonitoring2,iotmonitoring3,iotmonitoring4, schoolmonitor5 } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 duration-300 rounded-md text-2xl text-blue-600 flex justify-center items-center absolute top-0 right-0 bg-violet-200 cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 duration-300 rounded-md text-2xl text-blue-600 flex justify-center items-center absolute top-0 right-20 bg-violet-200 cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "blue",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full text-blue-500">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-48 lgl:h-[100%] rounded-lg object-cover lgl:mt-20"
                  src={iotmonitoring2}
                  alt="testimonialOne"
                />
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-10 rounded-lg p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Comprehensive Range Of Services
                      </h3>
                      {/* <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2023 - July 30, 2023 test
                      </p> */}
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base text-justify text-black font-titleFont font-medium tracking-wide leading-6">
                  We stand out from the competition by offering a comprehensive range of monitoring services that cover all aspects of your business needs. Whether it's security monitoring, environmental monitoring, infrastructure monitoring, industrial process monitoring, IT infrastructure monitoring, healthcare monitoring, energy management monitoring, or vehicle and fleet monitoring, we have the expertise and technology to deliver tailored solutions. By providing a one-stop-shop for all your monitoring requirements, we save you the hassle of dealing with multiple vendors and ensure a seamless integration of monitoring systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full text-blue-500">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-48 lgl:h-72 rounded-lg object-cover lgl:mt-16"
                  src={iotmonitoring3}
                  alt="testimonialTwo"
                />               
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-10 rounded-lg p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Cost Effective Solutions
                      </h3>
                      {/* <p className="text-base mt-3">
                        via Upwork - Oct 4, 2022 - March 3, 2023 test
                      </p> */}
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base text-justify text-black font-titleFont font-medium tracking-wide leading-6">
                  We understand the importance of cost efficiency for businesses, which is why we pride ourselves on offering our services at a low cost compared to other companies in the market. We believe that top-quality monitoring services should be accessible and affordable for all organizations, regardless of their size or budget. By optimizing our operations, leveraging technology, and streamlining processes, we can deliver cost-effective solutions without compromising on the quality and reliability of our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full text-blue-500">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-48 lgl:h-72 rounded-lg object-cover lgl:mt-16"
                  src={schoolmonitor5}
                  alt="testimonialOne"
                />
             
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-10 p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Swift Issue Resolution:
                      </h3>
                      {/* <p className="text-base text-gray-400 mt-3">
                        via Upwork - Aug 4, 2023 - Present test
                      </p> */}
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base text-black text-justify font-titleFont font-medium tracking-wide leading-6">
                  We prioritize customer satisfaction and strive to provide exceptional service at all times. We have a dedicated team of skilled professionals who are committed to resolving any issues that may arise as quickly as possible. With our proactive monitoring and rapid response capabilities, we can identify and address potential issues before they escalate, minimizing downtime and ensuring the smooth operation of your systems. Our focus on prompt issue resolution means you can rely on us to keep your business running smoothly without unnecessary delays or disruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial