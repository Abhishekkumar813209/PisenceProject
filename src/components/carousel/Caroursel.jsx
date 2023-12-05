import React,{useState} from 'react';
import CarouselItem from './CarouselItem';
import { GoDotFill } from "react-icons/go";

function Caroursel() {
  const [activeIndex,setActiveIndex] = useState(0);

    const items = [
      {
        title:"Baseball",
        description:"Baseball is a bat-and-ball sport played between two teams or",
        icon:require("./../../assets/images/iot/iotmointoring3.gif")
      },
      {
       title:"Walking",
       description:"Walking(also known as ambulation) is one of main gaits of excercise",
       icon:require("./../../assets/images/analytics/analyticsmonitoring7.gif") 
      },
      {
        title:"Weights",
        description:"WeightLifting generally refers to activities in whih people ",
        icon:require("./../../assets/images/school/schoolMonitoring5.gif")
      },    
    ]

    const updateIndex = (newIndex) =>{
      if(newIndex<0){
        newIndex = 0;
      }else if(newIndex => items.length){
        newIndex = items.length-1;
      }
    }

  return (
    <div className='carousel'>
      <div className="inner" style={{transform:`translate(-${activeIndex*100}%)`}}> 
        {items.map((item)=>{
          return <CarouselItem item={item} />
        })}
      </div>
      <div className="carousel-buttons">
        <button onClick = {()=>{
          updateIndex(activeIndex - 1);
        }}
        className='button-arrow'
        >
        </button>
        <div className="indicators">
          {items.map((item,index)=>{
            return(
              <button className='indicator-buttons'>
                <GoDotFill />
              </button>
            )
          })}
        </div>
      
      </div>
    </div>
  );
}

export default Caroursel;
