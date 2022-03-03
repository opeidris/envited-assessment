import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {
  const buttonStyle = {
    background: "linear-gradient(107.04deg, #C346D5 52.6%, #501FC1 118.32%)"
  }
  const backgroundStyle = {
    background: "linear-gradient(163.63deg, #501FC1 12.2%, #C346D5 96.78%)"
  }
  const productsBackground = {
    backgroundImage: 'url("/images/product/background_socials.png")',
  }
  return (
    <div style={backgroundStyle} className="flex items-center min-h-screen flex-col py-2 text-white antialiased relative">
      <Head>
        <title>You're Envited</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <nav className='flex w-full md:w-4/5 lg:w-1/2 items-center justify-between px-4 '>
        <div className='flex items-center'>
          <img src="/images/logos/e_logo_transparent.png" className=' w-8 bg-white rounded-full' alt="src" />
          <h4 className='ml-2 inline font-bold text-2xl text-white '>envited</h4>
        </div>
        <Link href="/">
        <button style={buttonStyle} className='  rounded-full py-1 px-5 '>Log In</button>
        </Link>
      </nav>

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center mt-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold ">
          Facebook events <span className='block lg:inline-block'>without Facebook.</span>
        </h1>

        <p className="mt-8 text-base max-w-xs">
          Easily host and share events with your friends across any social media.
        </p>

      <Link href="/create">
       <button className=' bg-gradient-to-r from-buttonGreen to-buttonBlue rounded-full py-3 px-5 font-bold mt-8'><span className='mr-2'>🎉</span> Create my next event</button>
       </Link>

       <div style={productsBackground} className='relative w-full  bg-contain bg-no-repeat mt-4'>
         <div className='w-full flex items-center justify-center'>
          <div className='relative'>
          <img className=' absolute inset-y-0 left-0 w-1/3' src="/images/product/Left.png" alt="" />
          <img className=' absolute w-1/2 inset-x-0 top-0 ' src="/images/product/Middle.png" alt="" />
          <img className=' mx-auto w-1/3' src="/images/product/Right.png" alt="" />
         </div>
         </div>
         
       </div>
      </main>

    </div>
  )
}

export default Home
