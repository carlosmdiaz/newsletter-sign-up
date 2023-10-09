import Image from 'next/image'
import { Inter } from 'next/font/google'
import ListContent from '@/components/ListContent'
import EmailInput from '@/components/EmailInput';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-letter-charcoal">
      <div className="w-[1100px] h-[690px] flex justify-around items-center rounded-[2rem] bg-white p-1">
        <div className="w-[55%] h-[95%] flex flex-col justify-around items-center ">
          <div className='w-[80%] h-[55%] flex flex-col justify-around'>
            <div className='font-roboto text-[4.3rem] font-bold text-letter-dark'>
              <h1>Stay updated!</h1>
            </div>
            <ListContent />
          </div>
          <div>
            <EmailInput />
          </div>
        </div>
        <div className="w-[40%] h-[95%]">
          <Image
            src="/images/illustration-sign-up-desktop.svg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  )
}
