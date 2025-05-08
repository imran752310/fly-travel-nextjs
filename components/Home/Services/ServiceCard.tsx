import React from "react";
import Image from "next/image";
import { serviceData } from "@/Data/data";


const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4  gap-8">
     { serviceData.map((service)=>{
        return(
           <div className="" key={service.id}>
             <div className="  border border-gray-200 rounded-md ">
            <Image
              className="w-full h-full rounded-md p-4"
              src={service.image} 
              width={200}
              height={200}
              alt="service"
            />
            <div className="flex  justify-between px-4 pb-5">
              <div >
              <h1 className="text-xl font-bold">{service.title}</h1>
              {/* <p className="text-gray-500 py-4">
                {service.text}
              </p> */}
              </div>
              <div className="">
                <button className="hidden lg:block xl:block   py-3 px-6 cursor-pointer text-white text-base bg-[#5484dd] hover:bg-gray-500 transition-all  duration-200 ">
                  See All
                </button>
              </div>
            </div>
          </div>
           </div>
        )})
     }
    </div>
  );
};

export default ServiceCard;
