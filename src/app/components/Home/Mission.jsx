'use client';

export default function MissionSection() {
  return (
    <section id="mission" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-medium mb-6">
              Our Mission
            </h2>
            <p className=" text-customGray max-w-lg">
              We help organizations harness authenticity at scale, empowering professionals to build distinctive voices that AI cannot replicate. The future of brand building is less about competing with AI and more about amplifying what makes us uniquely human. This realization sparked Kreatoors.
            </p>
          </div>
          <div>
            <img 
              src="\images\mission.jpg" 
              alt="Our Mission" 
              className="rounded-2xl  object-cover w-[650px] h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
