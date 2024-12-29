'use client';

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FFE5EA] z-0"></div>

      {/* Background Images */}
      <img
        src="/images/hero/topright.png"
        alt="Top Right"
        className="absolute top-[8%] left-0 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[120px] md:h-[120px] lg:w-[270px] lg:h-[250px] object-contain z-10"
      />
      <img
        src="/images/hero/topleft.png"
        alt="Top Left"
        className="absolute top-[8%] right-0 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[120px] md:h-[120px]] lg:w-[250px] lg:h-[250px] object-contain z-10"
      />
      <img
        src="/images/hero/botright.png"
        alt="Bottom Right"
        className="absolute bottom-[5%] left-0 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[120px] md:h-[120px] lg:w-[300px] lg:h-[250px] object-contain z-10"
      />
      <img
        src="/images/hero/bot-left.png"
        alt="Bottom Left"
        className="absolute bottom-[5%] right-0 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[120px] md:h-[120px] lg:w-[300px] lg:h-[250px] object-contain z-10"
      />

      {/* Overlay Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 mt-20 md:mt-0">
        <div className="max-w-3xl mx-auto text-center ">
          <h1 className="text-base sm:text-base md:text-3xl lg:text-4xl font-medium text-black max-w-lg mb-6 mx-auto">
            Grow Your Brand Equity{' '}
            <span className="block my-3">Through AI-Powered</span>{' '}
            <span className="block my-3">Employee Content</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-customGray mb-8 max-w-2xl">
            Our AI-powered platform seamlessly connects personal and professional branding, content creation, and analytics to turn every employee story into measurable brand impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-btn-gradient text-white px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full hover:bg-pink500 transition-colors">
              Find Out More Today
            </button>
            <button className="border border-pink500 text-pink500 px-5 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full hover:bg-pink-50 transition-colors">
              Join The Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
