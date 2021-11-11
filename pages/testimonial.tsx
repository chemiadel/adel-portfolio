import Head from 'next/head'
import {NextPage} from 'next'

const Home: NextPage = () => {
  return ( <>
    {/* component */}
    {/* component */}
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="/tailwind.css" rel="stylesheet" />
    <title>Testimonial</title>
    <div className="w-full h-screen">
      <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-2 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6">
        {/* Beginning of the component about Daniel Clifford */}
        <div className="bg-indigo-600 lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
          <div className="mx-6 my-8 2xl:mx-10">
            <img
              className="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 ml-1 lg:ml-3 2xl:ml-0 md:-mt-1 2xl:-mt-4"
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2d6653525a843f82327c67f78130107e-1558977821371/8a6b3888-9e6f-411f-8f3d-088cb7f8514c.png"
            />
            <h1 className="text-white text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-20 2xl:mx-8">
            Andrew Forge
            </h1>
            <h2 className="text-white text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 2xl:my-2 2xl:mx-8">
              Verified Graduate
            </h2>
          </div>
          <div className="-mt-6 relative">
            <p className="text-white text-opacity-50 font-medium md:text-lg 2xl:text-3xl px-7 lg:px-9 mb-3 2xl:pb-8 2xl:mx-2">
            “ Not only was everything done perfectly, but they also helped me out with some bonus coding right at the goal line! Very friendly, very communicative, very nice! 10/10 would recommend. ”

            </p>
          </div>
        </div>
        {/* Ending of the component about Daniel Clifford */}
        {/* Beginning of the component about Jonathan Walters */}
        <div className="bg-gray-900 lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
          <div className="mx-8 2xl:mx-10 my-10">
            <img
              className="w-8 md:w-9 2xl:w-20 h-8 md:h-9 2xl:h-20 rounded-full border-2 -ml-1 -mt-2 lg:-mt-4"
              src="https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/profile/photos/36618929/original/13138834_10156906885505008_9063282862520745770_n.jpg"
            />
            <h1 className="text-white text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 2xl:pl-24 -mt-8 md:-mt-10 2xl:-mt-16">
              Jonathan Walters
            </h1>
            <h2 className="text-white text-xs md:text-base 2xl:text-2xl text-opacity-50 pl-11 md:pl-12 2xl:pl-24">
              Verified Graduate
            </h2>
          </div>
          <div className="-mt-8 mx-1 lg:mx-2">
            <p className="text-white text-opacity-50 font-medium md:text-lg 2xl:text-3xl pl-6 lg:pl-5 pr-4 -mt-1 lg:mt-6 2xl:mt-2 2xl:px-8">
              “ Excellent Communication, the seller worked with me to deliver results.”
            </p>
          </div>
        </div>
        {/* Ending of the component about Jonathan Walters */}
        {/* Beginning of the component about Jeanette Harmon */}
        <div className="bg-primary-color-white lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8">
          <div className="mx-8 my-10 lg:my-8">
            <img
              className="w-8 md:w-9 lg:w-11 2xl:w-20 h-8 md:h-9 lg:h-11 2xl:h-20 rounded-full border-2 -mt-3 -ml-1 lg:-ml-0"
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8558a3cd366cc01a4f0b5aad1658ff32-1626536176681/bf7c7026-0201-42fc-a5ee-f5c5844d0368.JPG"
            />
            <h1 className="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 lg:pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">
                
                Tiana Alexander
            </h1>
            <h2 className="primary-color-blackish-blue-opacity text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 lg:pl-14 2xl:pl-24">
              -
            </h2>
          </div>
          <div className="-mt-4 ml-5 mr-11">
            <p className="primary-color-blackish-blue-opacity font-medium md:text-lg 2xl:text-3xl pl-2 lg:pl-3 lg:pr-4 mb-6 2xl:pt-2 -mt-3">
              “ He was very kind to take on my job at the last minute, and worked tirelessly to get it done. He is a pro. I was stuck in a tight situation and he delivered. He knows his stuff! He did a nice job for me and I'm really really appreciated. ”
            
            </p>
          </div>
        </div>
        {/* Ending of the component about Jeanette Harmon */}
        {/* Beginning of the component about Patrick Abrams */}
        <div className="bg-purple-800 lg:order-4 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8 lg:pb-14 2xl:pb-20">
          <div className="mx-8 my-8">
            <img
              className="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 lg:-mt-3"
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e0393c492e5bc3dae70cc9f24bfc126e-743257581573494110.0616698/DB4347F7-A3A2-427C-B468-3427BF1CD625"
            />
            <h1 className="text-white text-xs md:text-base 2xl:text-2xl pl-12 md:pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">
              Allen
            </h1>
            <h2 className="text-white text-xs md:text-base 2xl:text-2xl text-opacity-50 pl-12 md:pl-14 2xl:pl-24">
              -
            </h2>
          </div>
          <div className="px-3 -mt-3 mb-5 lg:mb-0">
            <p className="text-white text-opacity-50 font-medium md:text-lg 2xl:text-3xl px-4 mt-1 lg:-mt-3 2xl:mt-6">
              “ He was very kind to take on my job at the last minute, and worked tirelessly to get it done. He is a pro. I was stuck in a tight situation and he delivered. He knows his stuff! He did a nice job for me and I'm really really appreciated. ”
            </p>
          </div>
        </div>
        {/* Ending of the component about Patrick Abrams */}
        {/* Beginning of the component about Kira Whittle */}
        <div className="bg-primary-color-white lg:order-2 lg:row-span-4 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:pb-4 2xl:h-screen">
          <div className="mx-8 my-8 lg:pl-1">
            <img
              className="w-8 md:w-9 lg:w-12 2xl:w-20 h-8 md:h-9 lg:h-12 2xl:h-20 rounded-full border-2 lg:-mt-4 -ml-1 lg:-ml-4"
              src="              https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/4314827d8018791dc476999454906701-1606323498306/b3884463-9f81-431f-93d9-5c8de1def5d4.jpg"
            
            />
            <h1 className="primary-color-blackish-blue text-xs md:text-base 2xl:text-2xl pl-10 md:pl-12 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-12 2xl:-mt-16">
             Doer biplob
            </h1>
            <h2 className="primary-color-blackish-blue-opacity text-xs md:text-base 2xl:text-2xl pl-10 md:pl-12 2xl:pl-24">
              -
            </h2>
          </div>
          <div className="px-3 lg:px-5 lg:-mt-4 mb-5 lg:mb-0">
            <p className="primary-color-blackish-blue-opacity font-medium md:text-lg 2xl:text-3xl px-4 lg:px-0 2xl:px-4 lg:pr-3 mt-2 lg:-mt-1 2xl:mt-2 2xl:pb-64">
            “ He was very kind to take on my job at the last minute, and worked tirelessly to get it done. He is a pro. I was stuck in a tight situation and he delivered. He knows his stuff! He did a nice job for me and I'm really really appreciated. ”
            </p>
          </div>
        </div>
        {/* Ending of the component about Kira Whittle */}
      </div>
    </div>
  </>
  
  )
}

const feedback=[
  {
    url:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2d6653525a843f82327c67f78130107e-1558977821371/8a6b3888-9e6f-411f-8f3d-088cb7f8514c.png    ",
    name:"Andrew Forge",
    review: "“ Not only was everything done perfectly, but they also helped me out with some bonus coding right at the goal line! Very friendly, very communicative, very nice! 10/10 would recommend. ”"
  },
  {
    url:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/36618929/original/13138834_10156906885505008_9063282862520745770_n.jpg",
    name:"Rashi Daryan",
    review: "Excellent Communication, Adel worked with me to deliver results.    "
  },
  {
    url:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/4314827d8018791dc476999454906701-1606323498306/b3884463-9f81-431f-93d9-5c8de1def5d4.jpg",
    name:"Doer biplob",
    review: "He was very kind to take on my job at the last minute, and worked tirelessly to get it done. He is a pro. I was stuck in a tight situation and he delivered. He knows his stuff! He did a nice job for me and I'm really really appreciated   "
  },
  {
    url:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e0393c492e5bc3dae70cc9f24bfc126e-743257581573494110.0616698/DB4347F7-A3A2-427C-B468-3427BF1CD625",
    name:"Allen",
    review: "Easy to work with, helped me to understand and made adjustments quickly! Will work with again and again!  "
  },
  {
    url:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8558a3cd366cc01a4f0b5aad1658ff32-1626536176681/bf7c7026-0201-42fc-a5ee-f5c5844d0368.JPG",
    name:"Tiana Alexander",
    review: "It was great working with Adel, thank you for clear communication and delivered work!   "
  },
  {
    url:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/db00560d5afec0b0ff30a67eaa9530f0-735817401612563126154/JPEG_20210205_171205_4149554030946087531.jpg",
    name:"Mangotree",
    review: "so amazing thank you. you worked super quick and were able to do everything I wanted that others couldn't."
  },
  {
    url:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/dcaa6f5d76d501507a78288acc95dd3f-1595769498273/be3a946e-4c05-407b-bf86-d949102074d7.png",
    name:"Sean Liu",
    review: "Awesome job. Really great seller. Smart and easy to work with.    "
  },
  {
    url:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/21477362/original/2015-06-26_09.24.02.jpg",
    name:"Benoit Cormier",
    review: "Awesome job. Really great seller. Smart and easy to work with.    "
  },
  {
    url:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/dcaa6f5d76d501507a78288acc95dd3f-1595769498273/be3a946e-4c05-407b-bf86-d949102074d7.png",
    name:"Sean Liu",
    review: "Awesome job. Really great seller. Smart and easy to work with.    "
  },
  {
    url:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/dcaa6f5d76d501507a78288acc95dd3f-1595769498273/be3a946e-4c05-407b-bf86-d949102074d7.png",
    name:"Sean Liu",
    review: "Awesome job. Really great seller. Smart and easy to work with.    "
  },
  {
    url:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/dcaa6f5d76d501507a78288acc95dd3f-1595769498273/be3a946e-4c05-407b-bf86-d949102074d7.png",
    name:"Sean Liu",
    review: "Awesome job. Really great seller. Smart and easy to work with.    "
  },
]
export default Home
