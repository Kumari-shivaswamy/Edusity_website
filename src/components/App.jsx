import React ,{useState}from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from './Hero/Hero'
import Programs from './Programs/Programs'
import Title from './Title/Title'
import About from './About/About';
import Campus from './Campus/Campus'
import Testimonials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import VideoPlayer from './VideoPlayer/VideoPlayer'

const App = () => {
  const [playState , setPlayState] = useState(false);
  return (
    <div>
     <Navbar/> 
     <Hero/>
     <div className='container'> 
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
     <Programs/>
     <About setPlayState={setPlayState}/>
     <Title subTitle='Gallery' title='Campus photos'/>
     <Campus/>
     <Title subTitle='Testimonials' title='What Our Student Says'/>
     <Testimonials/>
     <Title subTitle='Contact US' title='Get in Touch'/>
     <Contact/>
     <Footer/>
     <VideoPlayer playState={playState}  setPlayState={setPlayState}/>

     </div>
    </div>
  )
}

export default App; 