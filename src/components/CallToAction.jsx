import { Button } from 'flowbite-react';
//import Logo from "../assets/photo1712342755 (2).jpeg"
export default function CallToAction({Logo}) {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl text-[#0F5F99]'>
            تغليف اثاث باحترافية عالية بالكويت
            </h2>
            <p className='text-gray-500 text-2xl my-2 py-2'>
            لدينا مجموعة من الفنيين المتخصصين في مجال تغليف كما يتوفر لدينا كل أنواع المغلفات التي تتناسب مع كل أنواع الأثاث 
            والتي توفر الحماية الكاملة للعفش مثل الاسترتش والكرتون والأكياس البلاستيكية 
            كما يتوفر لدينا مجموعة من الفنيين والمحترفين في مجال فك
             وتركيب الأثاث ويتوفر لدينا أيضًا صيانة الأثاث الخشبي.

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