import Link from "next/link";
import { useRouter } from "next/router";
export default function LandingLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { pathname } = useRouter();

  console.log({ pathname });
  return (
    <>
      <div className="md:w-2/3 mx-auto">
        {/*---HEADER---*/}
        <header className="sticky px-6 h-24 sm:h-32 flex items-center">
          <nav className="flex flex-row items-center text-black text-lg lg:flex font-bold space-x-2">
            <Link href={`/`}>
              <a
                className={`py-2 px-6 flex rounded-lg hover:bg-gray-100 ${
                  pathname === "/" ? "bg-gray-200" : ""
                }`}
              >
                About
              </a>
            </Link>
            <Link href={`/blog`}>
              <a
                className={`py-2 px-6 flex rounded-lg hover:bg-gray-100 ${
                  pathname === "/blog" ? "bg-gray-200" : ""
                }`}
              >
                Blog
              </a>
            </Link>
            <Link href={`/work`}>
              <a
                className={`py-2 px-6 flex rounded-lg hover:bg-gray-100 ${
                  pathname === "/work" ? "bg-gray-200" : ""
                }`}
              >
                Experience
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
        <main className="p-6 ">{children}</main>
      </div>
    </>
  );
}
