import Navbar from '../component/navbar';
import { Link } from 'react-router-dom';
import First from '../component/firstseen';
import Education from '../component/Education';
import Mydiaryfirst from '../component/mydiaryfirst';
import Carouseldiary from '../component/Carousel';
import Firsthackation from '../component/firsthackathon';
import Projectfirst from '../component/projectfirst';
import Footer from '../component/footer';

export default function Home(){
   return(
   <div className=''>
      <Navbar/>
      <First/>
      <Education/>
      <Mydiaryfirst/>
      <Carouseldiary/>
      <Firsthackation/>
      <Projectfirst/>
      <Footer/>
   </div>
   );
}