'use client'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation';
import React from 'react'

const ViewAllBtn = ({ path }: { path: string }) => {
    const router = useRouter();

    return (
        <div className='text-[#FFBE0B] flex justify-center items-center text-2xl cursor-pointer max-[1280px]:text-lg max-[450px]:text-sm hover:scale-105 duration-300'
            onClick={() => {
                router.push(`/${path}`);

            }}
        >
            <span className='mr-4 font-semibold'>View All</span>
            <FontAwesomeIcon icon={faArrowRightLong} className='' />
        </div>
    )
}

export default ViewAllBtn