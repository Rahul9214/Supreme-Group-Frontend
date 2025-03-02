import Image from "next/image";
import React, { FC } from "react";

const Footer:FC = () => {
  return (
    <footer className="py-20 px-3 lg:px-10 bg-[url(/assets/footer-bg.jpg)] bg-no-repeat bg-cover bg-bottom">
       <div className="container mx-auto lg:px-32 px-5">
           <div className="mb-10">
              <Image
                 src="./assets/logo.svg"
                 alt="Logo"
                 width={200}
                 height={80}
               />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4">
               <div className="mb-10 lg:mb-0">
                  <h6 className="font-semibold text-lg uppercase">Applications</h6>
                  <ul className="mt-6 grid sm:gap-5 gap-3 text-black list-none">
                     <li>
                        <a className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100" href="#">
                            <span className="sg-translate">Apparel</span>
                        </a>
                      </li>
                      <li>
                         <a className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100" href="#">
                            <span className="sg-translate">Automotive</span>
                          </a>
                       </li>
                       <li>
                          <a className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100" href="#">
                                    <span className="sg-translate"> Filtration</span>
                          </a>
                          </li>
                          <li>
                             <a className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100" href="#">
                                <span className="sg-translate">Customised Nonwoven</span>
                             </a>
                          </li>
                  </ul>
               </div>
               <div className="mb-10 lg:mb-0">
                  <h6 className="font-semibold text-lg uppercase">Company</h6>
                  <ul className="mt-6 grid sm:gap-5 gap-3 text-black list-none">
                     <li>
                        <a className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100" href="#">
                            <span className="sg-translate">Who We Are</span>
                        </a>
                     </li>
                     <li>
                        <a className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100" href="#">
                                    <span className="sg-translate">Global</span>
                        </a>
                      </li>
                      <li>
                         <a className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100" href="#">
                                    <span className="sg-translate"> Innovation</span>
                         </a>
                       </li>
                       <li>
                          <a className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100" href="#">
                             <span className="sg-translate">ESG Impact</span>
                          </a>
                       </li>
                       </ul>
               </div>
               <div className="mb-10 lg:mb-0">
                  <h6 className="font-semibold text-lg uppercase">More</h6>
                  <ul className="mt-6 grid sm:gap-5 gap-3 text-black list-none">
                     <li>
                        <a className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100" href="#">
                            <span className="sg-translate">Contact Us</span>
                        </a>
                     </li>
                     <li>
                        <a className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100" href="#">
                                    <span className="sg-translate">Careers</span>
                        </a>
                      </li>
                   </ul>
               </div>
               <div>
                  <h6 className="font-semibold text-lg uppercase">Follow Us</h6>
                  <ul className="mt-6 grid sm:gap-5 gap-3 text-black list-none">
                     <li>
                        <a className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
                decoration-from-font underline-offset-4 focus:text-opacity-100" href="#">
                           <span className="sg-translate">LinkedIn</span>
                        </a>
                     </li>
                  </ul>
                </div>
                </div>
                <div className="mt-32 flex gap-3 md:flex-row flex-col  justify-between items-center blade-top-padding-xl">
                    <h6 className="md:block hidden text-md text-black whitespace-nowrap">©2025. All Rights Reserved.</h6>
                    <h6 className="md:block hidden text-md text-black whitespace-nowrap">Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.</h6>
                </div>
            </div>
    </footer>
  );
}

export default Footer;