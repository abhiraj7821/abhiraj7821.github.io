import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import {Route, Routes} from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {  
    const locoScroll= new LocomotiveScroll();

    var tl = gsap.timeline({
       scrollTrigger:{
        trigger:".page1 h1",
        start:"top 27%",
        end:"top 0",
        scrub:3,
      }
    })

    tl.to(".page1 h1",{
      x:-80,
    },"anim")

    tl.to(".page1 h2",{
      x:80,
    },"anim")

    tl.to(".page1 video",{
      width:"90%"
    },"anim")

    var tl2= gsap.timeline({
       scrollTrigger:{
        trigger:".page1 h1",
        start:"top -115%",
        end:"top -120%",
        scrub:3,
      }
    })

    tl2.to(".main",{
      backgroundColor:"#fff",
    }).to('.cursor',{
      backgroundColor:"black"
    })

    var tl3= gsap.timeline({
       scrollTrigger:{
        trigger:".page1 h1",
        start:"top -380%",
        end:"top -400%",
        scrub:3,
      }
    })

    tl3.to(".main",{
      backgroundColor:"#0f0d0d"
    }).to('.cursor',{
      backgroundColor:"white"
    })

    const page3Video = document.querySelectorAll('.page3 video');

    page3Video.forEach((ele)=>{
      ele.addEventListener('mouseenter',(e)=>{
        const cursor=document.querySelector('.cursor');
        cursor.style.width='5vw';
        cursor.style.height='5vw';
        cursor.textContent="click";
      })

      ele.addEventListener('mouseleave',(e)=>{
        console.log(e.target.getAttribute("projectlink"));
        const cursor=document.querySelector('.cursor');
        cursor.style.width='1.2vw';
        cursor.style.height='1.2vw';
        cursor.textContent="";
      })
    })

    


  }, []);

  useGSAP(()=>{
    gsap.from('.page1 h1, .page1 h2',{
      transform:"translateY(30%) rotate(2deg)",
      duration:0.6,
      ease:"power2.in"
    })

  },[])
  

  const handleMouseCursor = (e)=>{
    gsap.to('.cursor',{
      x:e.pageX+20,
      y:(e.pageY+20),
      duration:0.4,
      ease:"linear"
    })
    
  }

  const handleCursorImageEnt = (e)=>{
    const imageUrl=e.target.getAttribute('data');
    const cursor=document.querySelector('.cursor');
    cursor.style.width='20vw';
    cursor.style.height='20vw';
    cursor.style.backgroundImage=`url(${imageUrl})`;
    cursor.style.borderRadius='0';
  }

  const handleCursorImageLeave = ()=>{
    const cursor=document.querySelector('.cursor');
    cursor.style.width='1.2vw';
    cursor.style.height='1.2vw';
    cursor.style.backgroundImage=``;
    cursor.style.borderRadius='100%';
  }

  const handelVideoClick = (e) => {
    console.log(e.target.getAttribute("projectlink"));
    
    const projectlink = e.target.getAttribute("projectlink");
    window.location.href = `${projectlink}`;
  }

  const getInHandler = () => {
    window.location.href = 'mailto:abhiraj7821@gmail.com'
  }

  const handleProjDirect = (e) =>{
    dirctLink = e.target.getAttribute("gitlink")

    var boxs = document.querySelectorAll('.box')

    boxs.forEach((e)=>{
      e.addEventListener('click',()=>{
         window.location.href = `${dirctLink}`
      })
    })
  }

  return (

    <Routes>
      <Route path='/' element={
    <div className="body">

      <div className="cursor  h-[1.2vw] w-[1.2vw] absolute z-10 rounded-full bg-[#EDBFFF] object-center object-cover text-white text-[1.2vw] flex justify-center items-center"></div>

      <div className='main bg-[#0f0d0d] text-white relative' onMouseMove={handleMouseCursor}>
        
        <div className="page1 min-h-[100vh] max-sm:min-h-[50vh] relative ">

          <div className='nav flex items-center justify-between pr-[5vw]'>
            <div className="nav1 h-[8vw] w-[8vw] "><img src="/logo.png" alt="" /></div>
            <div className="nav2 flex gap-5 text-[0.7vw] max-sm:text-[1.5vw]">

              <a className='border-b-1 border-white ' href="#">Home</a>
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>

            </div>
            <div className="nav3 h-[1rem] w-[1rem] bg-white rounded-full"></div>
          </div>

          <h1 className='text-[7vw] mt-[8vw] ml-[12vw]'>Abhishek Rajput</h1>
          <h2 className='text-[7vw] ml-[23vw] -mt-[4vw]'>Designer & Developer</h2>

          <video className='w-[60%] mt-[10vw] relative left-[50%] -translate-x-[50%]' autoPlay muted={true} loop src="/abhishek.mp4"></video>
        </div>
        <div id='about' className="page2 min-h-[90vh] max-sm:mt-[15vh] max-sm:min-h-[70vh] w-[100%] p-[5vw] text-black max-sm:text-white border-b-[1px] border-[#6c6c6c] relative">
          <h1 className='text-[7vw] font-extralight '>Hi👋🏻,I'm Just a Dev Who Can’t Stop Designing</h1>

          <div className="container flex max-sm:flex-col  mt-[10vw] justify-between items-end">
            <div className="page2-left text-[3.6vw] w-[35vw] max-sm:w-[90vw] max-sm:mb-[10vw]">
              <h2 className='leading-15 max-sm:leading-5'>Crafting scalable solutions with an eye for detail and a mind for elegance.</h2>
            </div>
          <div className="page2-right w-[25%] text-[15px] max-sm:w-[100%]">
            <p>I’m a software developer driven by a passion for clean architecture, efficient systems, and thoughtful design. With experience across the full stack, I enjoy turning complex problems into elegant, user-focused solutions.When I’m not debugging life or designing the impossible, I’m probably thinking about the next side project that’ll keep me up till 3am. Coffee? Yes. Sleep? We'll see.</p>
            <button className='w-[100%] max-sm:mt-[10vw] bg-[#EDBFFF] px-[4px] mt-[10px] text-black rounded-[50px]'>About</button>
          </div>
          </div>
        </div>

        <div id='work' className="page3 min-h-[100vh] text-black  mt-[3vw] relative">
          <h1 className='ml-[5vw] text-[7vw]'>Selected work</h1>

          <div className='flex justify-between mt-[10vw]'>
            <div className=''>
              <img className='h-[30vw] mt-[10vw]' src="/img1.jpg" alt="" />
              <h4 className='text-end mt-[10px]'>Strategy<span className='text-[0.8rem]'>, Website, Illustreation</span></h4>
            </div>
            <div className=''>
              <video onClick={handelVideoClick} className='h-[30vw]' autoPlay muted loop src="/proj1.mp4" projectlink="https://abhishekrajput.in/thirtysixstudio/"></video>
              <h4 className=' mt-[10px]'>ThirtySixStudio <span className='text-[0.8rem]'>Strategy, Website</span></h4>
            </div>
          </div>

          <div className='flex justify-between mt-[10vw]'>
            <div className=''>
              <video onClick={handelVideoClick} projectlink="https://abhishekrajput.in/SundownStudio/" className='h-[30vw]' autoPlay muted loop src="/proj2.mp4"></video>
              <h4 className=' mt-[10px]'>Sundown Studio <span className='text-[0.8rem]'>Strategy, Website</span></h4>
            </div>
            <div className=''>
              <img className='h-[30vw] mt-[10vw]' src="/img2.jpg" alt="" />
              <h4 className='text-end mt-[10px]'>About <span className='text-[0.8rem]'>ReactJS | NodeJS </span></h4>
            </div>
          </div>

          <div className='flex justify-between mt-[10vw] text-white'>
            <div className=''>
              <img className='h-[30vw] mt-[10vw]' src="/img3.jpg" alt="" />
              <h4 className='text-end mt-[10px]'>Crafting code <span className='text-[0.8rem]'> Illustreation</span></h4>
            </div>
            <div className=''>
              <video onClick={handelVideoClick} projectlink="https://abhishekrajput.in/GTAVI/" className='h-[30vw]' autoPlay muted loop src="/proj3.mp4"></video>
              <h4 className=' mt-[10px]'>GTAVI <span className='text-[0.8rem]'>Strategy, Website</span></h4>
            </div>
          </div>

        </div>

        <div className="page4 h-[100vh] mt-[10vw] pt-[10vw] relative z-11 border-b-[1px] border-white max-sm:bg-black max-sm:h-[70vh]">

          <div className="elem flex items-center justify-center ">
            <img className='h-[30vw] absolute left-30 -top-20 max-sm:left-10 max-sm:top-10 opacity-0' src="https://images.unsplash.com/photo-1748306295424-de2d800de85d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTV8fHxlbnwwfHx8fHw%3D" alt="" />
            <div className='text-flow h-[22vh] leading-44  overflow-hidden'>
              <h1 className='text-[7vw]'>Clean Code</h1>
              <h1 className='text-[7vw]'>Clean Code</h1>
            </div>
            <img className='h-[20vw] absolute bottom-70 right-45 max-sm:top-30 max-sm:right-15 opacity-0' src="https://plus.unsplash.com/premium_photo-1664272436437-bf16376aeefe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>

          <div className="elem flex items-center justify-center -mt-[4vw] ">
              <img className='h-[30vw] absolute left-30 bottom-20 opacity-0 max-sm:left-10 max-sm:top-40' src="https://images.unsplash.com/photo-1748418361786-c0329309ddd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" alt="" />
              <div className='text-flow h-[22vh] leading-44  overflow-hidden'>
                <h1 className='text-[7vw]'>Design</h1>
                <h1 className='text-[7vw]'>Design</h1>
              </div>
              <img className='h-[20vw] absolute top-20 right-50 opacity-0  max-sm:top-70 max-sm:right-15' src="https://images.unsplash.com/photo-1747573284015-80d26930c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzR8fHxlbnwwfHx8fHw%3D" alt="" />
          </div>

          <div className="elem flex items-center justify-center -mt-[4vw]">
            <img className='h-[30vw] absolute left-30 -top-20 opacity-0 max-sm:left-10 max-sm:top-90 ' src="https://plus.unsplash.com/premium_photo-1674599005003-0117de455e95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" alt="" />
            <div className='text-flow h-[22vh] leading-44  overflow-hidden'>
              <h1 className='text-[7vw]'>Experience</h1>
              <h1 className='text-[7vw]'>Experience</h1>
            </div>
            <img className='h-[20vw] absolute bottom-70 right-45 opacity-0 max-sm:bottom-90 max-sm:right-15' src="https://images.unsplash.com/photo-1739897020176-a3123626d791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" alt="" />
          </div>

        </div>


        <div className="page5 h-[100vh] p-[3vw] mt-[5vw] relative  max-sm:bg-black max-sm:h-[45vh]">
          <h1 className='text-[5vw] font-[100]'><span className='text-[#EDBFFF]'>MENTIONS</span> CLIENTS</h1>

          <div onClick={handleProjDirect} gitlink="https://github.com/abhiraj7821/thirtysixstudio" className="box flex justify-between border-t-[1px] border-white py-[2vw]" onMouseEnter={handleCursorImageEnt} onMouseLeave={handleCursorImageLeave} data={'https://images.unsplash.com/photo-1745172366995-a55968e94797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOXw2c01WalRMU2tlUXx8ZW58MHx8fHx8'}>
            <a href="https://github.com/abhiraj7821/thirtysixstudio" className='text-[1vw] max-sm:text-[4vw]' >ThirtySixStudio</a>
            <h2 className=''>2025</h2>
          </div>

          <div onClick={handleProjDirect} gitlink="" className="box flex justify-between border-t-[1px] border-white py-[2vw] " onMouseEnter={handleCursorImageEnt} onMouseLeave={handleCursorImageLeave}  data={'https://images.unsplash.com/photo-1742387436246-b432a6bfc623?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5Nnw2c01WalRMU2tlUXx8ZW58MHx8fHx8'}>
            <a href="https://github.com/abhiraj7821/SundownStudio" className='text-[1] max-sm:text-[4vw]' >Sundownstudio</a>
            <h2 className=''>2024</h2>
          </div>

          <div onClick={handleProjDirect} gitlink="" className="box flex justify-between border-t-[1px] border-white py-[2vw] " onMouseEnter={handleCursorImageEnt} onMouseLeave={handleCursorImageLeave}  data={'https://plus.unsplash.com/premium_photo-1712685912274-2483dade540f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxNHw2c01WalRMU2tlUXx8ZW58MHx8fHx8'}>
            <a href="https://github.com/abhiraj7821/GTAVI" className='text-[1] max-sm:text-[4vw]' >GTAVI</a>
            <h2 className=''>2025</h2>
          </div>

          <div onClick={handleProjDirect} gitlink="" className="box flex justify-between border-t-[1px] border-white py-[2vw] " onMouseEnter={handleCursorImageEnt} onMouseLeave={handleCursorImageLeave}  data={'https://images.unsplash.com/photo-1739045193736-8d0f198e292a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1OXw2c01WalRMU2tlUXx8ZW58MHx8fHx8'}>
            <a href="https://github.com/abhiraj7821/Juspay-Chat-App-With-Google-Workspace" className='text-[1] max-sm:text-[4vw]' >AI FOR GOOGLE WORKSPACE</a>
            <h2 className=''>RAG CHATBOT</h2>
          </div>

          <div onClick={handleProjDirect} gitlink="" className="box flex justify-between border-t-[1px] border-white py-[2vw] " onMouseEnter={handleCursorImageEnt} onMouseLeave={handleCursorImageLeave}  data={'https://images.unsplash.com/photo-1738165170747-ecc6e3a4d97c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1NXw2c01WalRMU2tlUXx8ZW58MHx8fHx8'}>
            <a href="https://github.com/abhiraj7821/Software-Development/tree/main/Code_review_MERN_Proj" className='text-[1] max-sm:text-[4vw]' >CODE REVIWER</a>
            <h2 className=''>AI REVIWER</h2>
          </div>


        </div>

        <div id='contact' className="footer min-h-[100vh] max-sm:min-h-[40vh] bg-[#EDBFFF] pt-[20%] text-black p-[5vw]">
          <div className='flex justify-between items-center'>
            <h1 className=' text-[8vw]'>Start A Project</h1>
            <div className='h-[10vw] w-[10vw] mr-[5vw] bg-white hover:bg-black hover:text-white transition-all ease-in duration-75 rounded-full flex justify-center items-center-safe text-[0.8vw] cursor-pointer' onClick={getInHandler}>GET IN TOUCH</div>
          </div>
          <p className='text-[1vw] mt-[20vw] max-sm:mt-[15vh]'>Create an experience that's as remarkable as your business.</p>

          <div className='flex gap-[3vw] text-[0.8vw] mt-[2vw] '>
            <div><p>MAIN HUBS</p><p className=' opacity-75'>BANGALORE,KARNATAKA,IND</p></div>
            <div><p>GENERAL INQUIRIES</p>
              <a className=' opacity-75' href="mailto:abhiraj7821@gmail.com">ABHIRAJ7821@GMAIL.COM</a>
            </div>
            <div>
              <p>FOLLOW ME</p>
              <div className='flex gap-2 opacity-75'>
                <a href="https://www.linkedin.com/in/abhiraj7821/">Linkedin</a>
                <a href="https://github.com/abhiraj7821">Github</a>
                <a href="https://www.instagram.com/abhiraj.in_/">Insta</a>
                <a href="https://x.com/Abhiraj7821i">X</a>
              </div>
            </div>
            <div><p>Privacy</p>
              <a className='opacity-75' href='/privacy-policy'>Privacy Policy</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  }/>

      <Route path='/privacy-policy' element={
        <div>
          <div className='nav flex items-center justify-between pr-[5vw]'>
            <div className="nav1 h-[7rem] w-[7rem]"><img src="/logo.png" alt="" /></div>
            <div className="nav2 flex gap-5 text-[0.7vw]">

              <a className='border-b-1 border-white ' href="/">Home</a>
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>

            </div>
            <div className="nav3 h-[1rem] w-[1rem] bg-white rounded-full"></div>
          </div>

          <h1 className='text-center text-[3vw] mt-[5vw]'>Privacy Policy</h1>
          <div className='p-[10vw]'>
            <h2  classname="">Welcome to my website!</h2>
            <br />
            <p >This website showcases my personal portfolio and the software development projects I’ve built as a student for educational and learning purposes only. I am passionate about web development, AI, and software engineering, and this platform is meant to demonstrate my skills and progress to future employers, mentors, and collaborators.</p>
            <br />
            <h2 classname="">1. Educational Purpose</h2>
            <p>All the projects featured on this website are created as part of my learning journey. These projects are:

              Built for non-commercial, academic, or personal skill-building use only.

              Developed under the guidance and mentorship of educators from platforms such as Web Prodigies, Code Help, Sheryians Coding School, and others.

              Intended solely to demonstrate technical capabilities and portfolio development.
            </p>
            <br />
            <h2 classname="">2. Information Collection</h2>
            <p>This website does not collect any personal information from visitors automatically. However, basic non-personally identifiable information (such as IP address, browser type, and access time) may be collected through standard tools like Google Analytics to improve site performance and user experience.

                You will never be asked to submit any sensitive personal data such as:

                Credit card or financial details

                Government-issued identification

                Medical or health information
            </p>
            <br />
            <h2 classname="text-2xl font-bold">3. Use of Cookies</h2>
            <p>This site may use cookies or similar tracking technologies to analyze trends, administer the website, and gather aggregated demographic information. You can control the use of cookies at the individual browser level.</p>
            
            <br />

            <h2 classname="text-2xl font-bold">4. Third-Party Links</h2>
            <p>Some projects may include links to third-party services, APIs, or tools (such as OpenAI, Firebase, or GitHub). Please note that I do not control these external services and am not responsible for their privacy practices. Always review their privacy policies separately.</p>

            <br />

            <h2 classname="text-2xl font-bold">5. No Commercial Intent</h2>
            <p>This site and all included projects are not intended for commercial use. I do not sell, trade, or rent any user data or access. These works are solely for academic display and job-seeking portfolio purposes.</p>
            <br />
            <h2 classname="text-2xl font-bold">6. Updates to This Policy</h2>
            <p>This Privacy Policy may be updated occasionally to reflect feedback or changes in site practices. You are encouraged to review this policy periodically.</p>
            <br />
            <h2 classname="text-2xl font-bold">7. Contact</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy or the projects on this site, please feel free to contact me via the form provided on the Contact page.</p>
          </div>
        </div>
      } />

    </Routes>

    
  )
}

export default App
