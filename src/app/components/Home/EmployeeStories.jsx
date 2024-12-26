// components/EmployeeStories.js
import Image from 'next/image';

const EmployeeStories = () => {
  const sections = [
    {
      title: 'Personal Growth & Corporate Influencing Hub',
      subheading :"AI-guided personal branding and skill development",
      description: [
        
        'Grow your influence & professional brand with AI guidance',
        'Track professional influence across teams',
        'Build powerful employee networks',
      ],
      buttonText: 'Empower Your Teams Now',
      image: '/images/one_employee.png',  
    },
    {
      title: 'Content Studio',
      subheading : 'Generate, customize, and manage on-brand content at scale with AI assistance',
      description: [
       
        'Scale content creation with AI',
        'Ensure brand compliance',
        'Streamline content approval',
      ],
      buttonText: 'Start Your EGC Journey',
      image: '/images/two_employee.png',  
    },
    {
      title: 'Brand Amplification Hub',
      subheading:        'Streamline campaign management and amplify reach with intelligent content distribution',

      description: [
        'Launch and manage advocacy campaigns',
        'Track real-time brand impact',
        'Optimize content distribution',
      ],
      buttonText: 'Amplify Your Brand',
      image: '/images/three_employee.png',  
    },


    {
        title: 'Team Community Hub & Safe Space',
        subheading:        'Foster collaboration and celebrate success across your organization',
  
        description: [
          'Enable knowledge sharing',
          'Drive team collaboration',
          'Celebrate advocacy success',
        ],
        buttonText: 'Build Your Community',
        image: '/images/four_employee.png',  
      },




      {
        title: 'Analytics & Gamification',
        subheading:        'Track ROI and optimize strategy with comprehensive engagement metrics',
  
        description: [
          'Measure program ROI',
          'Track engagement metrics',
          'Monitor Performance with Leaderboards',
        ],
        buttonText: 'Unlock Your Insights',
        image: '/images/five_employee.png',  
      },
  ];

  return (
    <div className="py-16 flex flex-col space-y-10 md:space-y-20 px-4 md:px-20">
      <h2 className="text-2xl md:text-4xl max-w-2xl mx-auto font-medium text-center mb-12 text-black">
        AI-Powered Employee Stories
      </h2>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } items-center space-y-6 md:space-y-0 md:space-x-10`}
        >
          <div className="w-full md:w-1/2">
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-black max-w-md">{section.title}</h2>
            <p className=' text-customGray max-w-lg'>{section.subheading}</p>

            <ul className="space-y-2">
              {section.description.map((desc, idx) => (
                <li key={idx} className=" flex gap-4  text-customGray">

                    <img src='\images\check.png' className=' h-5 w-5 '></img>
                   {desc}
                </li>
              ))}
            </ul>
            {section.buttonText && (
              <button className="mt-4 px-4 py-2  bg-btn-gradient text-white rounded-full shadow-md hover:bg-pink-600">
                {section.buttonText}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeStories;
