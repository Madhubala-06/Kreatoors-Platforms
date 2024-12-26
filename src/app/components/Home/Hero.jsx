'use client';

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FFE5EA] z-0"></div>

    {/* Background Images */}
    <img
      src="/images/hero/topright.png"
      alt="Top Left"
      className="absolute top-40 left-0 w-[270px] h-[250px] object-contain z-10"
    />
    <img
      src="/images/hero/topleft.png"
      alt="Top Right"
      className="absolute top-40 right-0 w-[250px] h-[250px] object-contain z-10"
    />
    <img
      src="/images/hero/botright.png"
      alt="Bottom Left"
      className="absolute bottom-0 left-0 w-[300px] h-[250px] object-contain z-10"
    />
    <img
      src="/images/hero/bot-left.png"
      alt="Bottom Right"
      className="absolute bottom-0 right-0 w-[300px] h-[250px] object-contain z-10"
    />

    {/* Overlay Content */}
    <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl  font-medium text-black max-w-lg mb-6 mx-auto">
          Grow Your Brand Equity <span className=" block my-3">Through AI-Powered </span> <span className="block my-3">Employee Content </span>  
        </h1>
        <p className="text-lg text-customGray mb-8 max-w-2xl">
        Our AI-powered platform seamlessly connects personal and professional branding, content creation, and analytics to turn every employee story into measurable brand impact. 
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-btn-gradient text-white px-8 py-3 rounded-full hover:bg-pink500 transition-colors">
            Find Out More Today
          </button>
          <button className="border border-pink500 text-pink500 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors">
            Join The Waitlist
          </button>
        </div>
      </div>
    </div>
  </section>
  );
}
