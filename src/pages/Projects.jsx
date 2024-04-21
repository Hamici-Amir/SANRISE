
import Logo from "../assets/photo_2024-04-20_17-03-52.jpg"
import CallToAction2 from '../components/CallToAction2';
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";


export default function Projects() {
  const moblie = "0096550310352"
  return (
    <div className='min-h-screen max-w-2xl mx-auto w-100 flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Contact us  </h1>
      <p className='text-md text-gray-500'>              اختر شركة صان رايز  لنقل العفش والأثاث واستمتع براحة البال خلال عملية النقل
 </p>

    <div className='w-50 h-8    items-center flex justify-between m-0  mx-auto  ' >     
    <a href={`tel:${moblie}`} target="_blank">
     <p className=" text-2xl lg:hidden  text-white right-0 bottom-28 font-semibold justify-between flex  fixed bg-red-600  py-3 px-4 rounded-3xl float-right  " > 
     <IoMdCall size={30} />
                                  اتصل الان        
          </p> 
     </a>
     <a href="https://wsend.co/96550310352" target="_blank">
     <p className=" text-2xl text-white right-0 bottom-12 font-semibold justify-between flex  fixed bg-[#25D366]  py-3 px-4 rounded-3xl float-right  " > 
     <FaWhatsapp size={30} />
                                   الواتساب   
     
     </p>
     </a>
      </div>
      <CallToAction2  Logo={Logo} />

    </div>
  )
}