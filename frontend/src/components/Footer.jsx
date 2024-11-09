import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
        <p class="text-xl font-medium mb-5">
  <span class="logo-n">N</span>  <span class="logo-thre3">THRE3</span>
</p>


            <p className='w-full md:w-2/3 text-gray-600'>
            We are launch new brand online shop N THRE3.Stay with us and make your online shoping experience better.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>phone:01785-283465</li>
                <li>Email: nthre3official@gmail.com </li>
            </ul>
            <div className='flex justify-left my-3'>
              <a href="https://www.facebook.com/profile.php?id=61565463577005" target="_blank" rel="noopener noreferrer" className='mx-2'>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='mx-2'>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/nthre3official?igsh=d2UxcDRscTloaGlz" target="_blank" rel="noopener noreferrer" className='mx-2'>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/01785-283465" target="_blank" rel="noopener noreferrer" className='mx-2'>
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='mx-2'>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
        </div>

      </div>

        <div>
            <hr />
        </div>

    </div>
  )
}

export default Footer
