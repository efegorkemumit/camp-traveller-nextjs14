'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
       })
 }, [])


  return (
    <>

    <div className="h-96">

    </div>
  
    <div  data-aos="fade-up"
    data-aos-once="true" data-aos-delay="500">

      adasd

    

    </div>

    </>
  );
}
