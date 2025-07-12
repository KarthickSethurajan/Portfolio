import IplImg from '../assets/ipl.png';
import JobbyImg from '../assets/jobby.png';
import NxtEcomerceImg from '../assets/nxttrendz.png';
export default function Projects(){
  const config={
    projects:[
      {
        image:IplImg,
        description:'This IPL Analysis Dashboard built with React.js and it provides an in-depth view of team performances, player statistics, and season-wise trends. It is designed for cricket analysts, sports enthusiasts, and decision-makers to explore match outcomes, batting and bowling insights, and venue-wise winnings.',
        link:'https://iplboarddetails.ccbp.tech/',
      },
      {
        image:JobbyImg,
        description:'Jobby App is a job search web application developed using React.js. The primary purpose of this app is to help users easily search and explore job listings based on their interests, skills, or location. It serves as a platform where users can view detailed job information such as company name, job title, type of employment, location, and job description.',
        link:'https://techItjobs.ccbp.tech',
      },
      {
        image:NxtEcomerceImg,
        description:'NxtTrendz is a dynamic and responsive e-commerce website built with MERN stack. This website provides a robust, scalable, and high-performance foundation for a modern online retail platform. The project aims to deliver a comprehensive shopping experience for users and an efficient management system for administrators.',
        link:'https://shopecomnxt.ccbp.tech',
      },

    ]
  }


    return <section id='projects' className="flex  flex-col py-10 px-5 justify-center bg-secondary text-white" >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
           <h1 className="text-4xl text-white border-b-4 mb-5 w-[150px] font-bold">Projects</h1>
           <p className='text-lg md:text-xl leading-relaxed mb-4 text-white'>These are some of the projects I have built using React.js, MERN stack, and CSS. Each project helped me strengthen my frontend and backend development skills and taught me how to solve real-world problems through code.</p>
        </div>
      </div>
       <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[350px] w-[700px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btnproject' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
        
    </section>
}