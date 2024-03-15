'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Camp from "@/components/Camp/Camp";

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

  <Navbar/>
  <Hero/>
  <Camp/>
    </>
  );
}
