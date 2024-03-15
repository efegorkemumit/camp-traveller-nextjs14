import React from 'react'
import CampItem from './CampItem'
import { ImQuotesLeft } from 'react-icons/im'

const Camp = () => {
  return (
    <section className='container relative flex flex-col py-10'>

        <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start 
        gap-8 overflow-x-auto lg:h-[440px] xl:h-[540px]'>

            <CampItem title='Bartın In Turkey'
            backgroundImage='bg-bgimage'
            people='25 Joined'
            subtitle='Amasra is Loading'
            />

        <CampItem title='Bartın In Turkey'
            backgroundImage='bg-bgimagetwo'
            people='25 Joined'
            subtitle='Amasra is Loading'
            />



        </div>

        <div   data-aos="fade-down"
         data-aos-delay="800" className='flex items-center justify-end mt-10 px-6 
        lg:-mt-24'>

            <div className='bg-green-600 p-8  lg:max-w-[550px]
            xl:max-w-[720px] rounded-3xl relative w-full overflow-hidden'>
                <h2 className=' text-5xl text-white'>
                    <span className='font-semibold'>Lost Feel</span> And Not Know
                </h2>

                <p className='mt-5 text-white'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eius unde excepturi neque cupiditate ipsa?
                </p>
                <ImQuotesLeft  className='h-16 w-16 ml-auto'/>



            </div>


        </div>



    </section>
  )
}

export default Camp