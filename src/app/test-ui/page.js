"use client"

import { DatePicker } from "antd";
import CalenderPage from "@/app/component/CalenderPage";


export default function TestUI() {

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是：" + dateString);
  };

  return (

    <div className="w-screen h-screen bg-gray-50 flex flex-wrap justify-center items-center">


      <div>
        <div>
          <DatePicker onChange={onChange} needConfirm />
        </div>

        <CalenderPage year="2025" month="五" date="01" weekday="四"></CalenderPage>



      </div>

    </div>
  );
}