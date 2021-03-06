import Link from 'next/link'
import { useRouter } from 'next/router'
export default function LandingLayout({
    children
} : {
    children?: React.ReactNode
}){
    
    const {pathname}=useRouter()
    
    console.log({pathname})
    return  <>
    <div className="md:w-2/3 mx-auto">
      {/*---HEADER---*/}
        <header className="sticky px-6 h-24 sm:h-32 flex items-center">
            <nav className="flex flex-row items-center text-black text-lg lg:flex font-bold space-x-2">
                <Link href={`/`}>
                <a className={`py-2 px-6 flex rounded-lg hover:bg-gray-100 ${pathname==='/'?'bg-gray-200':''}`}>
                    About
                </a>
                </Link>
                <Link href={`/blog`}>
                <a className={`py-2 px-6 flex rounded-lg hover:bg-gray-100 ${pathname==='/blog'?'bg-gray-200':''}`}>
                    Blog
                </a>
                </Link>
                <Link href={`/work`}>
                <a className={`py-2 px-6 flex rounded-lg hover:bg-gray-100 ${pathname==='/work'?'bg-gray-200':''}`}>
                    Work
                </a>
                </Link>
                
                {/* <Link href={`/testimonial`}>
                <a className={`py-2 px-6 flex rounded-lg hover:bg-gray-100 ${pathname==='/testimonial'?'bg-gray-200':''}`}>
                    Testimonial
                </a>
                </Link> */}


            </nav>
            <div className="ml-auto">
                <a href="mailto:adelchemi6@gmail.com" className="py-2 px-6 flex">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  className="icon icon-tabler icon-tabler-mail"
  width={24}
  height={24}
  viewBox="0 0 24 24"
  strokeWidth={2}
  stroke="currentColor"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <rect x={3} y={5} width={18} height={14} rx={2} />
  <polyline points="3 7 12 13 21 7" />
</svg>
                </a>
                </div>
        </header>
        {/*---MAIN---*/}
        <main className="p-6 ">
        {children}
        </main>
        {/*---FOOTER---*/}        
        {/* <div className="container py-10 mx-auto px-6 sm:px-12 bg-yellow-100  flex flex-row ">
            <div className="mx-auto mt-8 sm:mt-0 w-8/12 ">
                <h1 className="text-xl lg:text-2xl leading-none mb-4 "><
                  strong className="font-black">
                  Here's what our customers are saying
                  </strong>
                </h1>
                <p className="text-2xl text-bold text-gray mb-4 sm:mb-12 ">
                  We make scheduling and earning easy!
                </p>
                <div className="flex flex-row space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <line x1="8" y1="11" x2="8" y2="16"></line>
                  <line x1="8" y1="8" x2="8" y2="8.01"></line>
                  <line x1="12" y1="16" x2="12" y2="11"></line>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
                </div>
            </div>
            <div className="ml-auto mt-8 sm:mt-0 w-3/12 flex flex-col text-lg text-bold space-y-2">
                <h3 className="font-bold text-lg text-black lg:text-2xl underline leading-none mb-4 ">
                  Products
                </h3>
                <a className="text-lg text-bold text-gray">
                  item1
                </a>
                <a className="text-lg text-bold text-gray sm:mb-12 ">
                  item1
                </a>
                <a className="text-lg text-bold text-gray sm:mb-12 ">
                  item1
                </a>
            </div>
            <div className="mx-auto mt-8 sm:mt-0 w-3/12 flex flex-col text-lg text-bold space-y-2">
                <h3 className="font-bold text-lg text-black lg:text-2xl underline leading-none mb-4 ">
                  Resources
                </h3>
                <a className="text-lg text-bold text-gray">
                  item1
                </a>
                <a className="text-lg text-bold text-gray sm:mb-12 ">
                  item1
                </a>
                <a className="text-lg text-bold text-gray sm:mb-12 ">
                  item1
                </a>
            </div>
        </div> */}
    </div>
    </>
}