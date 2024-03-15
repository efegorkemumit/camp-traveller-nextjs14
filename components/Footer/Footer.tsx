import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from '@/constans'
import Link from 'next/link'
import React from 'react'
import FooterItem from './FooterItem'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center border-t border'>

        <div className='container flex w-full flex-col gap-16'>

            <div className='flex flex-col items-start mt-24 justify-center
            gap-20 md:flex-row'>
                
                <Link  
                    href="/" className='font-semibold font-pacifiko text-xl'>
                    <span className='text-green-600'>Camp</span> Traveller
                </Link>


                <div className='flex flex-wrap justify-between gap-16 md:flex-1'>
                    {FOOTER_LINKS.map((columns)=>(
                        <FooterItem key={columns.title} title={columns.title}>
                            {columns.links.map((link)=>(
                                <Link href="/" key={link}>
                                    {link}
                                </Link>
                            ))}



                        </FooterItem>



                    ))}



                </div>

                <div className='flex flex-wrap justify-end gap-5 md:flex-1'>
                  <FooterItem title={FOOTER_CONTACT_INFO.title}>
                    {FOOTER_CONTACT_INFO.links.map((link)=>(

                        <Link
                        href="/"
                        key={link.label}
                        className='flex gap-4 md:flex-col lg:flex-row'>

                            <p>
                                {link.label}
                            </p>
                            <p>

                                {link.value}
                            </p>
                        
                        </Link>
                    ))}




                  </FooterItem>



                </div>


            </div>

            <div className='text-center border-t border-gray-100'>

<p className='w-full text-center mt-5 mb-5 text-gray-700'>
    2024 Camp Traveller | Youtube Efe Görkem Ümit
</p>
</div>

        </div>
    



    </footer>
  )
}

export default Footer