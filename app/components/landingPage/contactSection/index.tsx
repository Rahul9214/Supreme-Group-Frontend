"use client";

import { FC, FormEvent, useState } from "react";

interface FormData {
    fullName: string;
    email: string;
    company: string;
    message: string;
}

const ContactSection: FC = () => {
   const [formData, setFormData] = useState<FormData>({
      fullName: "",
      email: "",
      company: "",
      message: "",
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Form Submitted:", formData);
      alert("Form Submitted");
   };

   return (
      <section className="relative w-full bg-[#0066b2] text-white py-20 px-6 md:px-16">
         <div className="relative z-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
               {/* Left Side - Contact Info */}
               <div>
                  <h2 className="text-4xl md:text-5xl font-semibold">Get in Touch</h2>
                  <div className="h-[2px] bg-white w-16 my-6"></div>
                  <p className="text-2xl font-semibold">For general enquiries</p>

                  <div className="mt-6 space-y-6 text-lg">
                     <div>
                        <h3 className="text-lg font-semibold">Address :</h3>
                        <p>110, 16th Road, Chembur, Mumbai - 400071</p>
                     </div>
                     <div>
                        <h3 className="text-lg font-semibold">Phone :</h3>
                        <p>+91 22 25208822</p>
                     </div>
                     <div>
                        <h3 className="text-lg font-semibold">Email :</h3>
                        <p>info@supremegroup.co.in</p>
                     </div>
                  </div>
               </div>

               {/* Right Side - Contact Form */}
               <div className="max-w-lg mx-auto w-full">
                 <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {["full name", "email", "company", "message"].map((field, index) => (
                        <div key={index} className="relative">
                            {field !== "message" ? (
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    name={field}
                                    value={formData[field as keyof FormData] || ""}    // Ensure default value
                                    onChange={handleChange}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    className="w-full text-lg bg-transparent text-white border-b border-white py-2 px-1 focus:outline-none placeholder-white"
                                    required
                                />
                            ) : (
                                <textarea
                                    name="message"
                                    value={formData.message || ""}  // Ensure default value
                                    onChange={handleChange}
                                    placeholder="Message"
                                    className="w-full text-lg bg-transparent text-white border-b border-white py-2 px-1 focus:outline-none placeholder-white"
                                    required
                                ></textarea>
                            )}
                        </div>
                    ))}
                    <button 
                       type="submit"
                       className="mt-4 w-1/3 px-6 py-3 text-lg font-light border-2 border-white text-white bg-transparent rounded-full transition-all hover:bg-white hover:text-[#0066b2]"
                    >
                       Send
                    </button>
                 </form>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactSection;
