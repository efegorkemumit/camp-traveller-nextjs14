import Image from 'next/image'
import React from 'react'
import { FaAngleDoubleRight, FaNetworkWired, FaStar } from 'react-icons/fa'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='min-h-[550px] md:min-h-[600px] justify-center items-center
    flex'>

    <div className='container'>

    <div className='grid grid-cols-1 lg:grid-cols-2'>

        {/**col-span 1 */}
        <div className='flex bg-pattern flex-col justify-center pt-10 relative'>

            <Image src="/pattern/camp.png" data-aos="fade-down"
        data-aos-once="true" data-aos-delay="100"
            width={50} height={50}
            alt=''/>

            <h1 data-aos="fade-down"
        data-aos-once="true" data-aos-delay="300" className='text-6xl font-bold lg:text-8xl 
            font-popins'>Traveller Love This</h1>

            <p className='font-light mt-5 ' data-aos="fade-down"
        data-aos-once="true" data-aos-delay="300">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, totam, expedita beatae eveniet quas earum aliquam exercitationem porro, maiores dolores rerum possimus? Omnis, necessitatibus veritatis!
            </p>

            <div data-aos="fade-down"
        data-aos-once="true" data-aos-delay="500" className='flex items-center gap-2 mt-5 font-semibold text-xl'>
                
               {Array(5).fill(1).map((_,index)=>(
                <FaStar  key={index} className='w-8 h-8 text-yellow-400' />
               ))}


                <span>256K</span>
                <span className='text-green-600'> Views</span>


            </div>

            <div data-aos="fade-down"
        data-aos-once="true" data-aos-delay="500" className='flex flex-row gap-3 mt-5'>

                <Button variant="mybutton">
                <FaAngleDoubleRight  className='mr-2'/> Contunie
                </Button>
                <Button>

                    <FaNetworkWired className='mr-2'/> Work
                </Button>



            </div>


        </div>



        {/**col-span 1 */}

        <div className='lg:min-h-[650px] md:min-h-[500px]  min-h-[350px] flex justify-center relative'>
            <Image src="/pattern/7.png" alt='' fill className='mx-auto'></Image>



        </div>





    </div>

        
    </div>

    </div>
  )
}

export default Hero