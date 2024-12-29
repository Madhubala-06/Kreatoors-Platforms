export default function CTASection() {
    return (
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto p-5">
          <div className="py-12 rounded-3xl bg-pink-gradient flex flex-col items-center gap-8">
            <h2 className="font-medium text-3xl text-center text-white max-w-4xl px-4">
              Join 500+ HR professionals who are eager to elevate their brands with cutting-edge AI tools.
            </h2>
            
            <button className="bg-white text-pink500 px-5 py-2 sm:px-6 md:px-8 md:py-3 rounded-full hover:bg-pink-50 transition-colors">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    );
  }