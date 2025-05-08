import React from "react";
import Image from "next/image";
import { serviceData } from "@/Data/data";


const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
     { serviceData.map((service)=>{
        return(
           <div className="" key={service.id}>
             <div className="flex gap-5  border border-gray-200 ">
            <Image
              className="w-full h-full"
              src={service.image} 
              width={200}
              height={300}
              alt="service"
            />
            <div className="flex flex-col justify-between p-3">
              <div>
              <h1 className="text-2xl font-bold">{service.title}</h1>
              <p className="text-gray-500">
                {service.text}
              </p>
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
