import MyImage from '../assets/myImage.jpg';
import { AiOutlineLinkedin,AiOutlineFacebook,AiOutlineInstagram,AiOutlineGithub } from "react-icons/ai";
export default function Hero(){
    const config={
        subtitle:'Im a MERN Full-stack developer',
        social:{
            facebook:'https://www.facebook.com/share/1CLSpQRQG2/',
            instagram:'https://www.instagram.com/being_genius?igsh=MTR6M3FvNnB1MnozZQ==&utm_source=ig_contact_invite',
            linkedin:'https://www.linkedin.com/in/karthick-s-02335b215',
            github:'https://github.com/KarthickSethurajan',
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
       <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/>Im Karthick 
        <p className='text-2xl'>{config.subtitle}</p></h1>
       
       <div className='flex py-10'>
        <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
        <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
        <a href={config.social.instagram} className='hover:text-white pr-5'><AiOutlineInstagram size={40}/></a>
         <a href={config.social.github} className='hover:text-white'><AiOutlineGithub size={40}/></a>
       </div>
       </div>
       <div className=' w-150 h-150 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg '>
       <img  className=' w-full h-full object-cover'src={MyImage} alt='Img'/>
       </div>
    </section>
}