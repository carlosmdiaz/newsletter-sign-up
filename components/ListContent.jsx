import React from 'react'
import Image from 'next/image'

function ListContent() {
  return (
    <div className='h-[60%] flex flex-col justify-between text-xl text-letter-dark'>
      <div className='w-[100%]'>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
      </div>
      <div className='h-[65%] flex flex-col justify-around'>
        <div className="flex">
          <div className='h-[5%] w-[5%] mr-4'>
            <Image 
                src="/images/icon-list.svg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
          </div>
          <p>Product discovery and building what matters</p>
        </div>
        <div className="flex">
          <div className='h-[5%] w-[5%] mr-4'>
            <Image 
                src="/images/icon-list.svg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
          </div>
          <p>Measuring to ensure updates are a success</p>
        </div>
        <div className="flex">
          <div className='h-[5%] w-[5%] mr-4'>
            <Image 
                src="/images/icon-list.svg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
          </div>
          <p>And much more!</p>
        </div>
      </div>
    </div>
  )
}

export default ListContent