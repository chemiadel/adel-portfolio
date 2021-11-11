import Head from 'next/head'
import {NextPage} from 'next'

const Home: NextPage = () => {
  return ( <div className="flex flex-row ">
        <title>Work</title>
          <div className="relative  md:p-8">
  <div
    className="border-r-2 border-gray-200 border-dotted absolute h-full top-0 z-0 left"
    style={{ left: 7 }}
  />
  <ul className="list-none m-0 p-0 space-y-8">
    
    <li className="mb-2">
      <div className="flex items-center mb-1">
        <div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
        <div className="flex-1 ml-4 font-medium">
          Sep 2021 -  <span className="text-green-500">Currently</span> / <strong>FreshApps.nl</strong>
        </div>
      </div>
      <p className="ml-12">
      <strong className="text-gray-600">Frontend developer</strong><br /> 
      ReactJS/NextJS/Graphql developer at FreshApps.nl Agency 
      </p>
    </li>
    <li className="mb-2">
      <div className="flex items-center mb-1">
        <div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
        <div className="flex-1 ml-4 font-medium">Feb 2021 -  <span className="text-green-500">Currently</span> / <strong>Gamefib.com </strong></div>
      </div>
      <div className="ml-12">
        <strong className="text-gray-600">Fullstack  developer</strong><br /> Blogging and sharing platform for games. Made with NextJS both front and backend. API with Graphql. Design with ChakraUI.
      </div>
    </li>
    <li className="mb-2">
      <div className="flex items-center mb-1">
        <div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
        <div className="flex-1 ml-4 font-medium">
          Jan 2021 - Jul 2021 / <strong>Borpays.com</strong>
        </div>
      </div>
      <div className="ml-12">
      <strong className="text-gray-600">Wix Velo developer</strong><br /> 
        Backend developer, Adding and managing affiliate solutions using Velo code (Wix store).

      </div>
    </li>

    <li className="mb-2">
      <div className="flex items-center mb-1">
        <div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
        <div className="flex-1 ml-4 font-medium">Jun 2021 - Jul 2021 / <strong>Secomind.ai</strong></div>
      </div>
      <div className="ml-12">
      <strong className="text-gray-600">Fullstack  developer</strong><br /> 
          NodeJS, ReactJS NextJS developer Adding some features: rich text editor, Crons and database.

      </div>
    </li>
    <li className="mb-2">
      <div className="flex items-center mb-1">
        <div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
        <div className="flex-1 ml-4 font-medium">
          Jan 2017 - <span className="text-green-500">Currently</span> / <strong>Fiverr.com/chemiadel </strong></div>
      </div>
      <div className="ml-12">
        <strong className="text-gray-600">Web developer & data analytics</strong><br /> 
        Freelancer on fiverr with more than 200 order done, Most work is about Excel & Access VBA, Wix code, Google Apps script, G Sheets and APIs      </div>
    </li>
  </ul>
</div>

    </div>
  )
}


export default Home
