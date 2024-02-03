import Navbar from '../component/navbar';
import { Link } from 'react-router-dom';
import { Chrono } from "react-chrono";
import Timeline from '../component/timelime';

export default function Diary(){
   return(
   <div>
      <Navbar/>
      <Timeline/>
   </div>
   );
}