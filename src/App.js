import React, { useState } from "react";
import reviews from "./data";
import Testimonials from "./Components/Testimonials";

const App = () => {

 const [emp,setEmp] = useState(reviews[0]);


  return <div className="flex flex-col h-[100vh] w-[100vw] items-center justify-center  bg-slate-300 gap-6">
    <div>
       <div className="text-center">
       <h1 className=" text-3xl font-bold">Our Testimonials</h1>
       </div>
       <div className=" bg-blue-500 h-[4px] w-[1/8]  "></div>
    </div>
    <div className=" text-center">
       <Testimonials reviews={reviews} emp={emp} setEmp={setEmp} />
    </div>
  </div>;
};

export default App;
