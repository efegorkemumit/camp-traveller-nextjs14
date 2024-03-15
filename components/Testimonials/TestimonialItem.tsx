import Image from 'next/image';
import React from 'react'

interface TestimonialItemProps{
    img:string;
    name:string;
    description:string;
    aosDelay:string;
}

const TestimonialItem = ({aosDelay,description,img,name}:TestimonialItemProps) => {
  return (
    <div data-aos="fade-down"
    data-aos-delay={aosDelay}
    className='bg-green-600 rounded-2xl group relative shadow-xl w-full'>

        <div className='h-52'>
            <Image
            alt=''
            src={img}
            height={200}
            width={200}
            className='mx-auto transform p-6 rounded-full
            group-hover:scale-105'
            ></Image>



        </div>

        <div className='p-4 text-center'>

            <div className='w-full'>
                <h1 className='text-xl font-popins font-bold
                '>{name}</h1>
                <p className='font-light '>{description}</p>


            </div>



        </div>




    </div>
  )
}

export default TestimonialItem