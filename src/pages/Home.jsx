import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import CallToAction1 from '../components/CallToAction1';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Logo from "../assets/photo_2024-04-21_05-30-21.jpg"
import Logo1 from "../assets/photo_2024-04-21_05-30-17.jpg"
import Logo2 from "../assets/photo_2024-04-21_05-30-10.jpg"
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";


export default function Home() {
  const [posts, setPosts] = useState([]);
  const moblie = "0096550310352"

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/user/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto  '>
         
        <h1 className='text-3xl  font-extrabold lg:text-6xl flex justify-between  '  dir='rtl' >   
        
         <span >   مرحبا بكم في موقعنا 
         <p className='text-gray-500 text-sm  sm:text-sm  mt-10  ' dir='rtl'>
                                   مرحبًا بكم
                                في  
                            شركة صان رايز   

         
         وجهتكم الأولى لخدمات توصيل عفش المنزل 
                بأمان ومهنية بالسعودية 
        </p> 
        <p className='text-gray-500 text-sm sm:text-sm   ' dir='rtl'>
        نعدكم بتجربة فريدة تجمع بين السرعة والجودة والراحة      

          </p> 
         <p className='text-gray-500 text-sm sm:text-sm   ' dir='rtl'>
         . اعتمادًا على سنوات من الخبرة في هذا المجال،
          </p> 
          <p className='text-gray-500 text-sm sm:text-sm   ' dir='rtl'>
          نحن نضمن أن عفشك وأثاثك سيصلون إلى 
          وجهتهم بأمان وفي الوقت المحدد.

          </p> 
         
          <p className='text-gray-500 text-sm sm:text-sm   ' dir='rtl'>
          اختر شركة صان رايز  لنقل العفش والأثاث و
          استمتع براحة البال 

          </p> 
          <p className='text-gray-500 text-sm sm:text-sm   ' dir='rtl'>
          خلال عملية النقل          

          </p> 

        </span>   
        <img src={Logo}    className='hidden lg:flex lg:w-[450px]' />  
        
         </h1>
         <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline items-center mx-auto py-0 '
          onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' });}}
        >
          <button class="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4   rounded " >
              شاهد كل المنشورات
          </button>
         
        </Link>

      
    <div className='w-50 h-8    items-center flex justify-between m-0  mx-auto  ' >     
    <a href={`tel:${moblie}`} target="_blank">
     <p className=" text-2xl text-white right-0 bottom-28 font-semibold justify-between   fixed bg-red-600  py-3 px-4 rounded-3xl float-right flex lg:hidden " > 
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
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction Logo={Logo1} />
        <CallToAction1 Logo={Logo2 } />

      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 '>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
              onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' });}}

            >
              شاهد كل المنشورات
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}