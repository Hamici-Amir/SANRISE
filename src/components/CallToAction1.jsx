import { Button } from 'flowbite-react';
//import Logo from "../assets/photo1712342755 (2).jpeg"
export default function CallToAction1({Logo}) {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl text-[#0F5F99]'>
            سيارات نقل معدة ومجهزة 24 ساعة
            </h2>
            <p className='text-gray-500 text-2xl my-2 py-2'>
            يوجد عدد كبير من الشركات التي تعمل في مجال الأثاث المنزلي وشركة نقل اثاث بالكويت من الشركات التي لم يختلف عليها اثنان فمن ناحية الخدمة فهي تقدم خدمة بمستوى عالي ومن ناحية الأسعار فالشركة توفر جميع الخدمات بأسعار في متناول الجميع كما أن سيارات النقل معدة للعمل على مدار ال24 ساعة.

            </p> <a href="https://www.instagram.com/alkoe2020?igsh=cmJob2Nma2l5MDA=" target='_blank' rel='noopener noreferrer'>
            <Button  gradientMonochrome="info" outline className='rounded-tl-xl rounded-bl-none w-5/6 mx-auto '>
               
                    انقر هنا 
                
            </Button></a>
        </div>
        <div className="p-7 flex-1">
            <img src={Logo} />
        </div>
    </div>
  )
}