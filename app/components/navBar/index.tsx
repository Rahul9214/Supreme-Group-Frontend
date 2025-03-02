import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white container mx-auto py-2 px-5">
        <div className="grid grid-cols-3">
            <div>
                <Image
                   src="./assets/logo.svg"
                   alt="Company Logo"
                   width={200}
                   height={80}
                   className="lg:ml-32 h-[60px] w-[180px] lg:h-[70px] lg:w-[150px]"
                />
            </div>
        </div>
    </header>
  );
}

export default Navbar;