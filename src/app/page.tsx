import Button from "@/components/ui/button";
import Image from "next/image";
import call from "../../public/call.svg";
import LandingPage from "@/components/pages/LandingPage";
import Navbar from "@/components/pages/Navbar";
import Footer from "@/components/pages/Footer";
import Savings from "@/components/pages/Savings";
import CallReq from "@/components/pages/CallReq";
import Questions from "@/components/pages/Questions";
import Toggle from "@/components/pages/Toggle";



export default function Home() {
  
  return (
    <>
      <div className='w-full h-screen flex flex-col gap-16  items-center' >
        <Navbar/>
        <LandingPage/>
         <Toggle/>
         

        <Savings/>

        <CallReq/>

        <Questions/>
       
        <Footer/>
    
        
    </div>
    </>
  );
}
