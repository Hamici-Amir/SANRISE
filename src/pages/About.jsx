
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Logo from "../assets/photo_2024-04-21_05-30-06.jpg"
export default function About() {
  const moblie = "0096550310352"

  return (
      <div>
      <div className='  items-center sm:justify-center lg:justify-between   lg:flex  '>
        <div className="  lg:w-1/2">   
          <img src={Logo} width="600px"  />
        </div>
            
      <div className="  lg:w-1/2">

      <h1 className='text-4xl mt-0 py-2 text-[#000]  text-center mx-auto my-7'>
      لماذا نحن أفضل شركة نقل عفش في السعودية
            </h1>
            <div className=' text-xl text-[#0f0f0f] flex flex-col gap-6' dir="rtl">
           
            <p >
            <span className="text-2xl my-4 mx-0 text-[#0F5FF9] font-bold">             الخبرة:   </span> 
            تتمتع شركات نقل العفش بخبرة واسعة في مجال نقل الأثاث من مكان إلى آخر، مما يضمن لك نقلًا آمنًا وسريعًا دون حدوث أي تلف للعفش.        
             </p>
            <p>
            <span className="text-2xl my-4 mx-0 text-[#0F5FF9] font-bold"> المعدات :  </span>
            تمتلك شركات نقل العفش جميع المعدات اللازمة لنقل الأثاث بأمان، مثل: الرافعات، والشاحنات، والسيارات المغلقة، وأدوات التغليف.

            </p>
            <p>
            <span className=" text-2xl my-4 mx-0 text-[#0F5FF9] font-bold">  العمالة المدربة : </span>

            تمتلك شركات نقل العفش عمالة مدربة على فك وتركيب الأثاث وتغليفه بشكل صحيح، مما يضمن لك نقلًا آمنًا دون حدوث أي خدوش أو كسر
            </p>

            <p>
            <span className="text-2xl my-4 mx-0 text-[#0F5FF9] font-bold">  التأمين: </span>

            توفر بعض شركات نقل العفش تأمينًا ضد الأضرار، مما يضمن لك تعويضًا في حال حدوث أي تلف للعفش أثناء عملية النقل
            </p>
            <p>
            <span className="text-2xl my-4 mx-0 text-[#0F5FF9] font-bold">  الأسعار التنافسية : </span>
            تقدم شركات نقل العفش أسعارًا تنافسية تناسب جميع الميزانيات.

            </p>
            <p>
            <span className=" text-2xl my-4 mx-0 text-[#0F5FF9] font-bold">  الوقت :  </span>
            نعمل 24 ساعة على مدار الأسبوع لنجعلك تختار الوقت الذى يناسبك للحفاظ على راحتك.

            </p>

      </div>          
      </div>
      </div>
     
     
     



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


      

          
     </div>
    );
  }


/*هى من شركات نقل الاثاث فك وتغليف ونقل وتركيب الاثاث بعمالة فنية مختصصة فى نقل الاثاث، حيث تم تأسيسها منذ 12 سنة. تقوم الشركة بكافة الخدمات الخاصة بأعمال النقل، كما توفر المعدات اللازمة للحفاظ على سلامة العفش والأنتيكات والأجهزة الكهربائية بجميع أنواعها.
فك وتركيب جميع انواع الاثاث ( الستائر – التكييف – النجف – الاجهزة الكهربائية – غرف النوم بجميع انواعها – المطابخ بجميع انواعها ) بمعنى اشمل فك وتركيب وتغليف محتويات المنزل بالكامل .

شركة نقل عفش بالدمام
شركة نقل اثاث بالدمام
سيارات نقل عفش بالدمام
افضل شركة نقل اثاث بالدمام
ارخص شركة نقل عفش بالدمام
نقل عفش بالدمام
نقل اثاث بالدمام*/ 