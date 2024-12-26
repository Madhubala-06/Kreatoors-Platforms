'use client';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Amelia Williams",
      role: "HR Director",
      image: "/images/team.png", 
      linkedin: "https://linkedin.com/in/amelia-williams"
    },
    {
      name: "Amelia Williams",
      role: "HR Director",
      image: "/images/team.png", 
            linkedin: "https://linkedin.com/in/amelia-williams"
    },
    {
      name: "Amelia Williams",
      role: "HR Director",
      image: "/images/team.png", 
      linkedin: "https://linkedin.com/in/amelia-williams"
    },
    {
      name: "Amelia Williams",
      role: "HR Director",
      image: "/images/team.png", 
      linkedin: "https://linkedin.com/in/amelia-williams"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Our Team
        </h2>
        <p className="text-lg  text-customGray max-w-3xl mx-auto mb-12">
          Are you interested in joining our team, becoming a partner, or joining our community, there's a place for you in our story. Let's write a chapter together
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center p-3  bg-gray-50 rounded-xl">
              <div className="relative w-full max-w-[280px] aspect-square mb-4 border rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                
              </div>

              <div className="flex justify-between items-center w-full">
              <div className=" text-start">
              <h3 className="text-base font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
              </div>

              <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
               
                >
                  <svg
                    className="w-6 h-6 text-[#0A66C2]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                </div>
            
            </div>
          ))}
        </div>

        <button className=" bg-btn-gradient text-white px-8 py-3 rounded-full hover:shadow-lg transition-shadow">
          Book a Call With Our Team
        </button>
      </div>
    </section>
  );
};

export default TeamSection;