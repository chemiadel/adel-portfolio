import Head from 'next/head'
import {NextPage} from 'next'

const Home: NextPage = () => {
  return ( <div className="flex flex-col lg:flex-row">
        <title>About</title>
          <div className="flex-grow">
            <div className="text-5xl font-bold"> Adel Chemi </div>
            <div className="text-md font-semibold max-w-xl space-y-4 py-4 tracking-wide leading-relaxed"> 
              <p>
                Hi, I'm full-stack JavaScript/TypeScript web developer. <br/>
              </p>
              <p>
              Started programming first time in highschool where I was playing with Excel formula, 
              and I tried to create to create my custom function where I discorved VBA and it was my starting.
              </p>
              <p>
              Spend my daily time on building, learning anything relates with JavaScript/TypeScript and ReactJS, and all about JAMSTACK frameworks.
              </p>
              <p>
              About my hobbies, I'm big fan of fitness lifestyle, and old school bodybuilding era <br />
              I play video games too, My favorite games are Zelda Majora's mask and DOTA2.
              </p>
            </div>
          </div>
          <div className="space-y-2 mx-auto">
          <img className="w-72" src="https://github-readme-stackoverflow.vercel.app/?userID=9493369&layout=compact"/>
          <img className="w-72" src="https://github-readme-stats.vercel.app/api?username=chemiadel&hide_rank=true&theme=graywhite&show_icons=true"/>
          </div>
    </div>
  )
}


export default Home
