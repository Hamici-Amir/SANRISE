
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble ,BsWhatsapp } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border  border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-lg text-white'>
                شركة صان رايز 
              </span>
              
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='#'
                  
                  rel='noopener noreferrer'
                >
                  Contact us
                </Footer.Link>
                <Footer.Link
                  href='#'
                  
                  rel='noopener noreferrer'
                >
                  شركة صان رايز 
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.instagram.com/alkoe2020?igsh=cmJob2Nma2l5MDA='
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Instagram
                </Footer.Link>
                <Footer.Link target='_blank' href='https://wsend.co/96550310352'> WhatSapp </Footer.Link>
                
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="شركة صان رايز "
            year={new Date().getFullYear()}
          /> 
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='' icon={BsFacebook}/>
            <Footer.Icon href='https://www.instagram.com/alkoe2020?igsh=cmJob2Nma2l5MDA=' icon={BsInstagram}/>
            <Footer.Icon href='' icon={BsTwitter}/>
            <Footer.Icon href='https://wsend.co/96550310352' icon={BsWhatsapp}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
