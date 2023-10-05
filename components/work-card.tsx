interface IProps {
  title: string;
  link: string;
  description: string;
  technologies: string[];
  screenshot: string;
}

export function PortfolioCard(props: IProps) {
  return (
    <section className="text-gray-600 body-font border rounded-md">
      <div className="container px-5 mx-auto">
        <div className="p-5 bg-white flex items-center mx-auto  rounded-lg sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h1 className="text-black text-2xl title-font font-bold mb-2">
              {props.title}
            </h1>
            <a href={props.link} className="leading-relaxed text-base">
              {props.link}
            </a>
            <div className="py-4">
              {props.technologies.map((item) => (
                <div key={item} className=" inline-block mr-2">
                  <div className="flex  pr-2 h-full items-center">
                    <svg
                      className="text-yellow-500 w-6 h-6 mr-1"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <path d="M9 12l2 2l4 -4" />
                    </svg>
                    <p className="title-font font-medium">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:flex font-bold text-gray-800">
              <div className="w-full flex space-x-3">
                <div className="w-full">
                  <h2 className="text-gray-500">Description</h2>
                  <p className="text-xs py-2">{props.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
