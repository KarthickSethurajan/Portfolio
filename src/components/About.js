import AboutImg from '../assets/about.png'
export default function About(){
    const config={
        line1:'👋 Hi, I am Karthick, Highly motivated and detail-oriented Quality Control Engineer with 4+ years of experience in implementing quality systems, process improvement, and team leadership in mechanical engineering environments. Recently transitioned MERN-Full Stack Developer with a strong passion for web development and continuous learning.',
        line2:'I recently completed my training in MERN stack development, focusing on technologies like MongoDB, Express.js, React.js, and Node.js. I am proficient in HTML, CSS, and JavaScript for frontend development, and I have hands-on experience with React.js. On the backend, I work with Node.js, Express.js, Python, and SQL databases.',
        line3:'I enjoy building responsive and user-friendly web applications and I am always eager to take on new challenges, collaborate with teams, and grow as a developer.',
        line4:' I am looking forward to starting my professional journey in the tech industry and contributing to real-world projects.'
    }



    return <section className='flex flex-col md:flex-row bg-secondary px-5 py-5' id='about'>
        <div className='md:w-1/2'>
            <img src={AboutImg} alt="img"/>

        </div>
        <div className='md:w-1/2 bg-secondary flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-white border-b-4 mb-5 w-[170px] font-bold'>
                About Me
            </h1>
            <p className='text-lg md:text-xl leading-relaxed mb-4 pb-5'>{config.line1}</p>
            <p className='text-lg md:text-xl leading-relaxed mb-4 pb-5'>{config.line2}</p>
            <p className='text-lg md:text-xl leading-relaxed mb-4 pb-5'>{config.line3}</p>
            <p className='text-lg md:text-xl leading-relaxed mb-4 pb-5'>{config.line4}</p>
            </div>
        </div>
    </section>
}