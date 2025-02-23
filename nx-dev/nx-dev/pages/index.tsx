import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import {
  Footer,
  Header,
  InlineCommand,
  NxUsersShowcase,
} from '@nrwl/nx-dev/ui/common';
import { sendCustomEvent } from '@nrwl/nx-dev/feature-analytics';

export function Index() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Nx: Smart, Extensible Build Framework</title>
        <meta
          name="description"
          content="Nx is a smart and extensible build framework to help you architect, test,
        and build at any scale — integrating seamlessly with modern technologies and libraries while providing a
        distributed graph-based task execution, a robust CLI, computation caching, dependency management, and more."
        />
        <meta
          name="twitter:title"
          content="Nx: Smart, Extensible Build Framework"
        />
        <meta
          name="twitter:description"
          content="Nx is a smart and extensible build framework to help you architect, test,
        and build at any scale — integrating seamlessly with modern technologies and libraries while providing a
        distributed graph-based task execution, a robust CLI, computation caching, dependency management, and more."
        />
        <meta
          name="twitter:image"
          content="https://nx.dev/images/nx-media.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Nx: Smart, Extensible Build Framework"
        />
        <meta property="og:url" content="https://nx.dev" />
        <meta
          property="og:description"
          content="Nx is a smart and extensible build framework to help you architect, test,
        and build at any scale — integrating seamlessly with modern technologies and libraries while providing a
        distributed graph-based task execution, a robust CLI, computation caching, dependency management, and more."
        />
        <meta
          property="og:title"
          content="Nx: Smart, Extensible Build Framework"
        />
        <meta
          property="og:image"
          content="https://nx.dev/images/nx-media.jpg"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
      </Head>
      <Header showSearch={false} useDarkBackground={false} />
      <main>
        <div className="w-full">
          {/*INTRO COMPONENT*/}
          <div className="bg-blue-nx-base text-white">
            <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-5 py-5">
              <div className="sm:mt-8 mb-20 flex lg:flex-row flex-col items-center justify-center">
                <div className="w-full lg:w-1/2 flex flex-col">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl leading none font-extrabold tracking-tight sm:mt-10 mb-8 sm:mt-14 sm:mb-10">
                    Smart, Extensible Build Framework
                  </h1>
                  <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
                    Build full-stack applications with modern tools and
                    reinforce best practices for your entire development team.
                  </p>

                  <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
                    <Link href="/getting-started/intro">
                      <a className="w-full sm:w-auto flex-none bg-purple-nx-base text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-nx-base focus:outline-none transition-colors duration-180">
                        Get Started
                      </a>
                    </Link>

                    <InlineCommand
                      language={'bash'}
                      command={'npx create-nx-workspace'}
                      callback={() =>
                        sendCustomEvent(
                          'code-snippets',
                          'click',
                          router.pathname
                        )
                      }
                    />
                  </div>
                </div>
                <div className="hidden sm:flex w-full md:w-1/2 flex-col justify-between items-center lg:pl-16 lg:pb-0 pb-10 mt-8 lg:mt-0">
                  <svg
                    width="300"
                    height="300"
                    viewBox="0 0 262 163"
                    className="mr-2"
                  >
                    <polygon
                      id="Path"
                      fill="#ffffff"
                      points="130.68 104.59 97.49 52.71 97.44 96.3 40.24 0 0 0 0 162.57 39.79 162.57 39.92 66.39 96.53 158.26"
                    />
                    <polygon
                      id="Path"
                      fill="#ffffff"
                      points="97.5 41.79 137.24 41.79 137.33 41.33 137.33 0 97.54 0 97.49 41.33"
                    />
                    <path
                      d="M198.66,86.86 C189.139872,86.6795216 180.538723,92.516445 177.19,101.43 C182.764789,93.0931021 193.379673,89.7432211 202.73,93.37 C207.05,95.13 212.73,97.97 217.23,96.45 C212.950306,90.4438814 206.034895,86.8725952 198.66,86.86 L198.66,86.86 Z"
                      id="Path"
                      fill="#96D8E9"
                    />
                    <path
                      d="M243.75,106.42 C243.75,101.55 241.1,100.42 235.6,98.42 C231.52,97 226.89,95.4 223.52,91 C222.86,90.13 222.25,89.15 221.6,88.11 C220.14382,85.4164099 218.169266,83.037429 215.79,81.11 C212.58,78.75 208.37,77.6 202.91,77.6 C191.954261,77.6076705 182.084192,84.2206169 177.91,94.35 C183.186964,87.0278244 191.956716,83.0605026 200.940147,83.9314609 C209.923578,84.8024193 217.767888,90.3805017 221.54,98.58 C223.424615,101.689762 227.141337,103.174819 230.65,102.22 C236.02,101.07 235.65,106.15 243.76,107.87 L243.75,106.42 Z"
                      id="Path"
                      fill="#48C4E5"
                    />
                    <path
                      d="M261.46,105.38 L261.46,105.27 C261.34,73.03 235.17,45.45 202.91,45.45 C183.207085,45.4363165 164.821777,55.3450614 154,71.81 L153.79,71.45 L137.23,45.45 L97.5,45.4499858 L135.25,104.57 L98.41,162.57 L137,162.57 L153.79,136.78 L170.88,162.57 L209.48,162.57 L174.48,107.49 C173.899005,106.416838 173.583536,105.220114 173.56,104 C173.557346,96.2203871 176.64661,88.7586448 182.147627,83.2576275 C187.648645,77.7566101 195.110387,74.6673462 202.89,74.67 C219.11,74.67 221.82,84.37 225.32,88.93 C232.23,97.93 246.03,93.99 246.03,105.73 L246.03,105.73 C246.071086,108.480945 247.576662,111.001004 249.979593,112.340896 C252.382524,113.680787 255.317747,113.636949 257.679593,112.225896 C260.041438,110.814842 261.471086,108.250945 261.43,105.5 L261.43,105.5 L261.43,105.38 L261.46,105.38 Z"
                      id="Path"
                      fill="#ffffff"
                    />
                    <path
                      d="M261.5,113.68 C261.892278,116.421801 261.504116,119.218653 260.38,121.75 C258.18,126.84 254.51,125.14 254.51,125.14 C254.51,125.14 251.35,123.6 253.27,120.65 C255.4,117.36 259.61,117.74 261.5,113.68 Z"
                      id="Path"
                      fill="#022f56"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* BANNER */}
          <div className="bg-green-nx-base">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="flex items-center flex-col sm:flex-row justify-between flex-wrap">
                <div className="flex-1 flex flex-row items-center">
                  <span className="flex p-2 rounded-lg bg-white">
                    <svg
                      className="h-6 w-6 text-green-nx-base"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </span>
                  <p className="ml-3 font-medium text-white">
                    Big news! We're excited to announce the first ever Nx Conf -
                    September 16th-17th
                  </p>
                </div>
                <div className="mt-2 w-full sm:w-auto">
                  <Link href="/conf">
                    <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-nx-base bg-white">
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/*SELECTION COMPONENT*/}
          <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-5 py-5">
            <div className="mt-32 mb-20 flex sm:flex-row flex-col justify-center">
              <div className="w-full sm:w-1/2 grid grid-cols-3 gap-4 sm:gap-10 items-center">
                <Link href="/react">
                  <a className="w-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all ease-out duration-180 rounded py-4 px-3 space-x-1 text-base tracking-tight font-bold leading-tight text-center flex flex-col justify-center items-center px-2 py-4 space-y-4">
                    <svg viewBox="0 0 24 24" className="w-1/2" fill="#52C1DE">
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                    </svg>
                    <div className="sm:text-base md:text-sm lg:text-base">
                      React
                    </div>
                  </a>
                </Link>
                <Link href="/angular">
                  <a className="w-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all ease-out duration-180 rounded py-4 px-3 space-x-1 text-base tracking-tight font-bold leading-tight text-center flex flex-col justify-center items-center px-2 py-4 space-y-4">
                    <svg viewBox="0 0 24 24" className="w-1/2" fill="#E23236">
                      <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z" />
                    </svg>
                    <div className="sm:text-base md:text-sm lg:text-base">
                      Angular
                    </div>
                  </a>
                </Link>
                <Link href="/node">
                  <a className="w-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all ease-out duration-180 rounded py-4 px-3 space-x-1 text-base tracking-tight font-bold leading-tight text-center flex flex-col justify-center items-center px-2 py-4 space-y-4">
                    <svg viewBox="0 0 24 24" className="w-1/2" fill="#77AE64">
                      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                    </svg>
                    <div className="sm:text-base md:text-sm lg:text-base">
                      Node
                    </div>
                  </a>
                </Link>
              </div>
              <div className="w-full sm:w-1/2 flex flex-col justify-between items-start sm:pl-16 sm:pb-0 pb-10 mt-8 sm:mt-0">
                <h2 className="text-xl sm:text-2xl lg:text-3xl leading-none font-extrabold tracking-tight mb-4 relative">
                  <svg
                    width={42}
                    height={42}
                    viewBox="0 0 64 64"
                    style={{
                      transform: 'scaleX(-1) rotate(50deg)',
                      left: '-4.3rem',
                      position: 'absolute',
                      top: 'calc(50% - (32px / 2))',
                    }}
                    className="hidden md:block"
                  >
                    <path
                      shapeRendering="geometricPrecision"
                      d="m63.386,16.193l.002-.002c0.002-0.003 0.004-0.006 0.006-0.01 0.172-0.195 0.298-0.43 0.399-0.678 0.032-0.076 0.053-0.148 0.076-0.225 0.058-0.191 0.094-0.389 0.106-0.596 0.006-0.076 0.018-0.148 0.016-0.226 0-0.04 0.01-0.076 0.008-0.115-0.014-0.239-0.062-0.47-0.136-0.687-0.006-0.023-0.022-0.041-0.03-0.064-0.088-0.239-0.214-0.451-0.363-0.645-0.021-0.027-0.028-0.063-0.05-0.09l-10.311-12.146c-0.789-0.93-2.084-0.948-2.894-0.037-0.808,0.91-0.823,2.402-0.032,3.334l5.558,6.549c-8.121-1.076-16.104,0.633-16.481,0.717-24.646,4.467-42.087,27.227-38.88,50.736 0.159,1.164 1.028,1.992 2.019,1.992 0.106,0 0.212-0.009 0.32-0.027 1.116-0.203 1.878-1.409 1.704-2.696-2.857-20.94 13.056-41.282 35.537-45.358 0.103-0.024 8.351-1.794 16.117-0.574l-8.577,5.093c-1.005,0.598-1.398,2.02-0.881,3.177 0.516,1.159 1.748,1.608 2.756,1.017l13.52-8.028c0.183-0.111 0.347-0.25 0.491-0.411z"
                    />
                  </svg>
                  First-class support for your favorite stack
                </h2>
                <p className="sm:text-lg mb-6">
                  Nx is a smart and extensible build framework to help you
                  architect, test, and build at any scale — integrating
                  seamlessly with modern technologies and libraries while
                  providing a robust CLI, caching, dependency management, and
                  more.
                </p>
                <p className="sm:text-lg mb-6">
                  It has first-class support for many frontend and backend
                  technologies, so its documentation comes in multiple flavours.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-nx-base text-white">
            <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-5 py-5">
              {/*GRAPH AND COMPUTATION CACHING*/}
              <div className="mt-32 flex sm:flex-row flex-col">
                <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:pr-16 sm:pb-0 pb-10 mt-8 sm:mt-0">
                  <Image
                    src="/images/distributed-tasks.png"
                    alt="Distributed Graph-Based Task Execution and Computation Caching illustration"
                    width={388}
                    height={300}
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-center sm:pl-16 sm:pb-0 pb-10 mt-8 sm:mt-0">
                  <h2 className="text-xl sm:text-2xl lg:text-2xl leading-none font-extrabold tracking-tight mb-4">
                    Distributed Graph-Based Task Execution and Computation
                    Caching
                  </h2>
                  <p className="sm:text-lg mb-6">
                    <span className="font-bold">Nx</span> is smart. It analyzes
                    your workspace and figures out what can be affected by every
                    code change. That's why Nx doesn't rebuild and retest
                    everything on every commit -{' '}
                    <span className="font-bold">
                      it only rebuilds what is necessary
                    </span>
                    .
                  </p>
                  <p className="sm:text-lg mb-6">
                    <span className="font-bold">Nx</span> partitions commands
                    into a graph of smaller tasks. Nx then runs those tasks in
                    parallel, and it can{' '}
                    <span className="font-bold">
                      even distribute them across many machines without any
                      configuration
                    </span>
                    .
                  </p>
                  <p className="sm:text-lg mb-6">
                    <span className="font-bold">
                      Nx also uses a distributed computation cache
                    </span>
                    . If someone has already built or tested similar code, Nx
                    will use their results to speed up the command for everyone
                    else.
                  </p>
                </div>
              </div>
              {/*DEV EXPERIENCE*/}
              <div className="my-32 flex sm:flex-row flex-col">
                <div className="w-full sm:w-1/2 flex flex-col justify-center sm:pr-16 sm:pb-0 pb-10 mt-8 sm:mt-0">
                  <h2 className="text-xl sm:text-2xl lg:text-2xl leading-none font-extrabold tracking-tight mb-4">
                    Holistic Dev Experience Powered by an Advanced CLI and
                    Editor Plugins
                  </h2>
                  <p className="sm:text-lg mb-6">
                    <span className="font-bold">Nx</span> helps scale your
                    development from one team building one application to many
                    teams building multiple frontend and backend applications
                    all in the same workspace.{' '}
                    <span className="font-bold">
                      When using Nx, developers have a holistic dev experience
                      powered by an advanced CLI
                    </span>{' '}
                    (with editor plugins), capabilities for controlled code
                    sharing and consistent code generation.
                  </p>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:pl-16 sm:pb-0 pb-10 mt-8 sm:mt-0">
                  <Image
                    src="/images/dev-experience.svg"
                    alt="Holistic Dev Experience Powered by an Advanced CLI and Editor Plugins illustration"
                    width={388}
                    height={300}
                  />
                </div>
              </div>
              {/* NXCLOUD AD */}
              <div
                style={{ background: '#122B4D', border: '1px solid #0f2440' }}
                className="text-white"
              >
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-10 lg:px-8 lg:flex lg:items-center lg:justify-between relative">
                  <span className="absolute text-xs top-3">Sponsor</span>
                  <h2 className="text-2xl tracking-tight sm:text-4xl">
                    <span className="block">See how much more time</span>
                    <span className="block">you can save with Nx Cloud.</span>
                  </h2>
                  <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href="https://nx.app/?utm_source=nx.dev"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-nx-base"
                      >
                        Learn About Nx Cloud
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*RICH PLUGIN ECOSYSTEM*/}
              <div className="my-32 flex sm:flex-row flex-col">
                <div className="w-full sm:w-1/2 flex flex-col justify-center sm:pb-0 sm:pr-16 pb-10 mt-8 sm:mt-0">
                  <h2 className="text-xl sm:text-2xl lg:text-2xl leading-none font-extrabold tracking-tight mb-4">
                    Rich Plugin Ecosystem
                  </h2>
                  <p className="sm:text-lg mb-6">
                    <span className="font-bold">Nx</span> is an open platform
                    with plugins for many modern tools and frameworks. It has
                    support for TypeScript, React, Angular, Cypress, Jest,
                    Prettier, Nest.js, Next.js, Storybook, Ionic among others.
                    With Nx, you get a consistent dev experience regardless of
                    the tools used.
                  </p>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:pl-16 sm:pb-0 pb-10 mt-8 sm:mt-0">
                  <Image
                    src="/images/modern-tools.svg"
                    alt="Rich Plugin Ecosystem illustration"
                    width={388}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-5 py-5">
            {/*LEARNING MATERIALS*/}
            <div className="my-32 flex sm:flex-row flex-col">
              <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:pb-0 sm:pr-16 pb-10 mt-8 sm:mt-0">
                <Image
                  src="/images/youtube-videos.svg"
                  alt="Get access to key learning materials illustration"
                  width={388}
                  height={300}
                />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col justify-center sm:pb-0 pb-10 sm:pl-16 mt-8 sm:mt-0">
                <h2 className="text-xl sm:text-2xl lg:text-2xl leading-none font-extrabold tracking-tight mb-4">
                  Get access to key learning materials
                </h2>
                <p className="sm:text-lg mb-6">
                  With accessible and free online content about Nx, you can
                  quickly get up and running with all of Nx's features. Nx
                  tutorials and resources are continuously updated with the
                  latest version. Plus, when you're looking for advanced courses
                  visit{' '}
                  <a
                    className="cursor-pointer underline"
                    href="https://nxplaybook.com/?utm_source=nx.dev"
                    target="_blank"
                  >
                    NxPlaybook.com
                  </a>
                  .
                </p>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      target="_blank"
                      href="https://www.youtube.com/watch?v=2mYLe9Kp9VM&list=PLakNactNC1dH38AfqmwabvOszDmKriGco?utm_source=nx.dev"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-nx-base"
                    >
                      Watch Nx Workspaces Course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-nx-base text-white">
            <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-5 py-5">
              {/*MORE*/}
              <div className="my-32 flex sm:flex-row flex-col">
                <div className="w-full sm:w-1/2 flex flex-col justify-center sm:pr-16 sm:pb-0 pb-10 mt-8 sm:mt-0">
                  <h3 className="text-xl leading-none tracking-tight mb-4">
                    Nx and Nx Console
                  </h3>
                  <p className="sm:text-lg mb-6">
                    For developers, Nx extends Nx Console to give you more
                    visibility into your workspace. With Nx Console and Nx in
                    your workflow you can reduce the time it takes to build
                    high-quality software at scale, and improve best-practices
                    across your organization.{' '}
                    <a
                      href="https://nx.dev/node/cli/console"
                      target="_blank"
                      className="cursor-pointer underline"
                    >
                      Try out Nx Console
                    </a>
                    .
                  </p>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-center sm:pl-16 sm:pb-0 pb-10 mt-8 sm:mt-0">
                  <h3 className="text-xl leading-none tracking-tight mb-4">
                    Brought to you by the community
                  </h3>
                  <p className="sm:text-lg mb-6">
                    Nx is built and maintained as an open-source toolkit for
                    developers by community contributors alongside the experts
                    at Nrwl, a software consulting firm with renowned JavaScript
                    experts and core contributors. To learn more, visit{' '}
                    <a
                      href="https://nrwl.io/?utm_source=nx.dev"
                      target="_blank"
                      className="cursor-pointer underline"
                    >
                      nrwl.io
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*Who is using Nx*/}
          <NxUsersShowcase />
        </div>
      </main>
      <Footer useDarkBackground={false} />
    </>
  );
}

export default Index;
