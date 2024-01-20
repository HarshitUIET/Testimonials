import { AiOutlineLeft } from "react-icons/ai";
import {AiOutlineRight } from "react-icons/ai";
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
import reviews from "../data";


function Testimonials(props) {
 
     let emp = props.emp;
     let setEmp = props.setEmp;
     let reviews = props.reviews;

     function SurpriseHandler() {
         setEmp(reviews[Math.floor(Math.random()*reviews.length)]);
     }

     function LeftHandler() {
         if(reviews.indexOf(emp) === 0) {
          setEmp(reviews[reviews.length-1]);
         }
         else{
            setEmp(reviews[reviews.indexOf(emp)-1]);
         }
     }

     function RightHandler() {
      if(reviews.indexOf(emp) === reviews.length-1) {
        setEmp(reviews[0]);
      }
      else{
         setEmp(reviews[reviews.indexOf(emp)+1]);
      }
  }

    return (
        <div className=" bg-white shadow-slate-100 md:relative">
           <div className="">
             <img className=" rounded-full absolute -top-14 z-10" height={100} width={100} src={emp.image} />
             <div className="h-[100px] w-[100px] bg-purple-600 rounded-full absolute -top-16 left-2 z--20"></div>
           </div>
           <div>
             <h1 className="font-bold text-2xl">{emp.name}</h1>
             <p className=" text-slate-500 uppercase">{emp.job}</p>
           </div>
           <div> 
            <div className=" text-violet-500 mx-auto mt-5" >
              < RiDoubleQuotesL/>
            </div>
            
              <p className="text-center">
                {emp.text}
              </p>
              <div className=" text-violet-500 mx-auto">< RiDoubleQuotesR/></div>
           </div>
           <div>
            <button onClick={LeftHandler} className=" text-blue-500 mx-2"><AiOutlineLeft /></button>
            <button onClick={RightHandler} className=" text-blue-500"><AiOutlineRight /></button>
           </div>
           <button onClick={SurpriseHandler} className=" bg-purple-300 rounded-1xl h-[40px] w-[120px] gap-3  my-2 font-bold text-white">Suprise Me</button>
        </div>
    )
}

export default Testimonials;