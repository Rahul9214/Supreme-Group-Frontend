const HeroSection = () => {
  return (
      <section className="relative w-full h-screen overflow-hidden">
          {/* Background Video */}
          <video
              src="./assets/videos1.mp4"
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
          />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
              <div className="max-w-3xl px-4">
                  {/* Subtitle */}
                  <p className="text-lg md:text-xl lg:text-2xl font-medium opacity-80">
                     Driven by performance
                  </p>

                  {/* Main Heading */}
                  <h1 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight">
                     Soft trims and <span className="text-blue-500">NVH solutions</span> 
                  </h1>

                   {/* Subtext */}
                    <p className="text-3xl md:text-5xl font-light opacity-100 mb-6 leading-tight">for seamless rides</p>
              </div>
          </div>
      </section>
  );
};

export default HeroSection;