import {NextPage} from 'next'
import Link from 'next/link'

const Home: NextPage  = () => {
  return ( <div className="space-y-12 mx-auto max-w-2xl">
        <title>Blog</title>
      {blogs.reverse().map(item=><div className="flex-grow">
          <Link href={item.url} passHref>
            <a className="text-lg lg:text-2xl font-bold"> {item.title} </a>
          </Link>
          <div className="text-sm font-semibold text-gray-500">
          {item.date}
          </div>
          </div>)}
          
    </div>
  )
}

const blogs=[
  {
    title:"Email a Custom Sheets as PDF in Attachment",
    url:"https://adelchemi.blogspot.com/2017/11/export-and-email-custom-sheet-to-pdf.html",
    date: "November 17, 2017"
  },
  {
    title:"Coinmarketcap.com API on Google Sheets with dashboard",
    url:"https://adelchemi.blogspot.com/2017/11/coinmarketcapcom-api-on-google-sheets.html",
    date: "November 24, 2017"
  },
  {
    title:"Export and Email Specific Range in Google Sheets in PDF",
    url:"https://adelchemi.blogspot.com/2018/01/export-email-range-PDF-CSV.html",
    date: "January 18, 2018"
  },
  {
    title:"Google Sheets vs MS Excel - What to choose in 2020 ?",
    url:"https://adelchemi.blogspot.com/2020/03/google-sheets-vs-ms-excel-what-to.html",
    date: "March 23, 2020"
  },
]
export default Home
