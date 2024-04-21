import {Sidebar} from "flowbite-react"
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from 'react-icons/hi';
import { MdDashboard } from "react-icons/md";

import { IoIosCreate } from "react-icons/io";
import { useEffect, useState } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';

export const DashSidebar = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const [tab ,setTab] =useState("profile") 
  useEffect(()=> {
      const urlParams =new URLSearchParams(location.search)
      const tabFromUrl = urlParams.get('tab')
      if(tabFromUrl){
        setTab(tabFromUrl) ;
      }
     

  },[location.search])
  const handleSignout = async () => {
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        localStorage.removeItem("user")
       navigate("/")
       window.location.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
      <Sidebar className="w-full md:w-56">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col gap-1">
          <Link to="/dashboard?tab=dash">
              <Sidebar.Item active={tab === "dash"} icon={MdDashboard}  
              labelColor ='dark'
              as='div' 
              >
              
                Dashborad
                
                
              </Sidebar.Item>
              </Link>

          <Link to="/dashboard?tab=profile">
              <Sidebar.Item active={tab === "profile"} icon={HiUser} label = {'Admin'} 
              labelColor ='dark'
              as='div' 
              >
              
                Profile
                
                
              </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=posts">
              <Sidebar.Item active={tab === "posts"} icon={HiDocumentText}  
              labelColor ='dark'
              as='div' 
              >
              
                Posts
                
                
              </Sidebar.Item>
              </Link>
              <Link to="/create-post">
              <Sidebar.Item active={tab === "posts"} icon={IoIosCreate}  
              labelColor ='dark'
              as='div' 
              >
              
                Create  Post
                
                
              </Sidebar.Item>
              </Link>

              <div onClick={handleSignout}>
              <Sidebar.Item  icon={HiArrowSmRight}  className="cursor-pointer"   >
                Log out
              </Sidebar.Item>
              </div>


          </Sidebar.ItemGroup>
        </Sidebar.Items>
     </Sidebar> 
  )
}
