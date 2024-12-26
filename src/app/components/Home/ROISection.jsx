'use client';

export default function ROISection() {
  return (
    <section className="py-16 px-4 relative   bg-pink-gradient to-white">
    <div className="max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className=" text-2xl md:text-4xl  max-w-2xl mx-auto  font-medium text-center mb-12 text-white">

        ROI Tracking Made Simple: Custom Metrics & Clear Comparisons
      </h2>

      {/* ROI Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
        <img
          src="\images\Onbording.png"
          alt="ROI Metric 1"
          className="w-full max-w-[300px] mx-auto object-contain"
        />
        <img
          src="\images\Onbording (1).png"
          alt="ROI Metric 2"
          className="w-full max-w-[300px] mx-auto object-contain"
        />
        <img
          src="\images\Onbording (2).png"
          alt="ROI Metric 3"
          className="w-full max-w-[300px] mx-auto object-contain"
        />
      </div>
    </div>
  </section>

  )
}
