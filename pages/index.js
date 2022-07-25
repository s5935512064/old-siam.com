import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ดิโอลด์ สยาม ช้อปปิ้ง พลาซ่า ศูนย์การค้าใจกลางกรุง  ย่านเยาวราช  แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/assets/logo-TREE.svg" />
      </Head>

      <div className="min-h-screen w-full flex justify-center">

        <div className="px-4 md:px-10 max-w-7xl w-full relative h-full my-8  flex flex-col gap-10">

          <div className="w-full h-[75vh] bg-[url('/assets/residence/reception1.jpg')] bg-no-repeat bg-cover bg-center shadow-md">

          </div>

          <div className="w-full grid grid-cols-2 ">
            <div className="shadow-md w-[450px] h-[450px] bg-[url('/assets/oldsiam.jpg')] bg-no-repeat bg-cover bg-center rounded-t-full ml-20">
            </div>
            <div className="flex gap-5 flex-col justify-center -mt-10">
              <div className="inline-flex text-[#0A3255]">
                <p className="font-extrabold text-5xl uppercase font-sans">The Old Siam </p>
                <p className="font-Allison text-4xl -translate-x-10 translate-y-4 -rotate-6 text-slate-500">Shopping Plaza</p>
              </div>
              <p className="text-sm uppercase text-[#0A3255]">The classic shopping mall on Rattanakosin Island delights shoppers and foodies with extensive selection of silk and authentic Thai sweets.</p>
              <p className="text-sm ">The Old Siam Plaza is a large shopping center built in the architectural style popular during King Rama V’s reign. The design succeeded beautifully in combining Thai style with the Western conventions of the era.  Within the plaza, the atmosphere of the Ming Muang Market of the past has been replicated with its myriad of stalls and shops.</p>
              <button className="hover:scale-105 duration-300  w-fit px-6 py-3 bg-[#0A3255] text-white text-xs items-center rounded-3xl inline-flex">

                EXPLORE MORE

                <i className="ml-2 ">
                  <svg width="20" height="20" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72C22.36 72 8 57.64 8 40ZM-1.74846e-06 40C-7.83308e-07 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 -2.7136e-06 40 -1.74846e-06C17.92 -7.83308e-07 -2.7136e-06 17.92 -1.74846e-06 40ZM40 36L24 36L24 44L40 44L40 56L56 40L40 24L40 36Z" fill="currentColor" />
                  </svg>

                </i></button>
            </div>

          </div>

          <div className="grid grid-cols-3 gap-3 -mt-28">

            <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto bg-[url('/assets/BangkokRattanakosinIsland.png')] bg-no-repeat bg-center bg-cover">
              <div>
                <div className="w-full image-cover rounded-t-md opacity-0" >
                  <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                    <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                    <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                  </div>
                </div>
                <div className="py-8 px-4 bg-white  rounded-b-md ">
                  <span className="block text-lg text-[#0A3255] font-bold tracking-wide">Rattanakosin Island</span>
                  <span className="block text-gray-600 text-sm">The center of goverment administration,traditional bussiness development and an historical attraction.
                  </span>
                </div>
              </div>

            </div>

            <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto bg-[url('/assets/grand_palace.jpg')] bg-no-repeat bg-center bg-cover">
              <div>
                <div className="w-full image-cover rounded-t-md opacity-0" >
                  <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                    <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                    <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                  </div>
                </div>
                <div className="py-8 px-4 bg-white  rounded-b-md ">
                  <span className="block text-lg text-[#0A3255] font-bold tracking-wide">Tourist Destination</span>
                  <span className="block text-gray-600 text-sm">It&apos;s covers four districts: Phra Nakhon, Pom Prap Sattruphai, Samphanthawong and Dusit.</span>
                </div>
              </div>

            </div>

            <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto bg-[url('/assets/samyot.jpg')] bg-no-repeat bg-center bg-cover">
              <div className="">
                <div className="w-full image-cover rounded-t-md opacity-0" >
                  <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                    <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                    <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                  </div>
                </div>
                <div className="py-8 px-4 bg-white  rounded-b-md ">
                  <span className="block text-lg text-[#0A3255] font-bold tracking-wide ">Reaching by MRT</span>
                  <span className="block text-gray-600 text-sm">Reachable with a few steps from SamYot Stationdddd.
                  </span>
                </div>
              </div>

            </div>
          </div>

          <div className="w-full h-[500px]  relative flex items-center justify-center">
            <div className="absolute  w-full h-full">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.9358776159597!2d100.4982374635565!3d13.745688663945556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991a1564e2fb%3A0x1804332db6dbcd22!2z4LiU4Li04LmC4Lit4Lil4LiU4LmM4Liq4Lii4Liy4Lih4Lie4Lil4Liy4LiL4LmI4Liy!5e0!3m2!1sth!2sth!4v1658738543444!5m2!1sth!2sth" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>

          <div className="w-full grid grid-cols-3 gap-3 h-[200px] justify-items-center  ">
            <div className="w-full flex justify-center items-center shadow flex-col ">
              {/* <svg className="scale-75" width="56" height="80" viewBox="0 0 56 80" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 0C12.52 0 0 12.52 0 28C0 34.96 2 41.48 5.64 47.36C9.44 53.52 14.44 58.8 18.28 64.96C20.16 67.96 21.52 70.76 22.96 74C24 76.2 24.84 80 28 80C31.16 80 32 76.2 33 74C34.48 70.76 35.8 67.96 37.68 64.96C41.52 58.84 46.52 53.56 50.32 47.36C54 41.48 56 34.96 56 28C56 12.52 43.48 0 28 0ZM28 39C22.48 39 18 34.52 18 29C18 23.48 22.48 19 28 19C33.52 19 38 23.48 38 29C38 34.52 33.52 39 28 39Z" fill="transparent" />
              </svg> */}

              <svg className="scale-75" width="56" height="80" viewBox="0 0 56 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 0C12.52 0 0 12.52 0 28C0 34.96 2 41.48 5.64 47.36C9.44 53.52 14.44 58.8 18.28 64.96C20.16 67.96 21.52 70.76 22.96 74C24 76.2 24.84 80 28 80C31.16 80 32 76.2 33 74C34.48 70.76 35.8 67.96 37.68 64.96C41.52 58.84 46.52 53.56 50.32 47.36C54 41.48 56 34.96 56 28C56 12.52 43.48 0 28 0ZM28 39C22.48 39 18 34.52 18 29C18 23.48 22.48 19 28 19C33.52 19 38 23.48 38 29C38 34.52 33.52 39 28 39Z" fill="url(#paint0_linear_22_173)" />
                <defs>
                  <linearGradient id="paint0_linear_22_173" x1="28" y1="0" x2="28" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2A2A72" />
                    <stop offset="1" stopColor="#009FFD" />
                  </linearGradient>
                </defs>
              </svg>


              <p className="text-2xl font-bold text-[#0A3255]  uppercase">

                Catchment Area
              </p>
            </div>

            <div className="w-full flex flex-col justify-center items-center shadow text-center">
              {/* <svg width="96" height="80" viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 27C54.52 27 60.28 28.56 64.96 30.6C69.28 32.52 72 36.84 72 41.52V48H24V41.56C24 36.84 26.72 32.52 31.04 30.64C35.72 28.56 41.48 27 48 27ZM16 28C20.4 28 24 24.4 24 20C24 15.6 20.4 12 16 12C11.6 12 8 15.6 8 20C8 24.4 11.6 28 16 28ZM20.52 32.4C19.04 32.16 17.56 32 16 32C12.04 32 8.28 32.84 4.88 34.32C1.92 35.6 0 38.48 0 41.72V48H18V41.56C18 38.24 18.92 35.12 20.52 32.4ZM80 28C84.4 28 88 24.4 88 20C88 15.6 84.4 12 80 12C75.6 12 72 15.6 72 20C72 24.4 75.6 28 80 28ZM96 41.72C96 38.48 94.08 35.6 91.12 34.32C87.72 32.84 83.96 32 80 32C78.44 32 76.96 32.16 75.48 32.4C77.08 35.12 78 38.24 78 41.56V48H96V41.72ZM48 0C54.64 0 60 5.36 60 12C60 18.64 54.64 24 48 24C41.36 24 36 18.64 36 12C36 5.36 41.36 0 48 0Z" fill="black" />
              </svg> */}

              <svg width="96" height="80" viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 27C54.52 27 60.28 28.56 64.96 30.6C69.28 32.52 72 36.84 72 41.52V48H24V41.56C24 36.84 26.72 32.52 31.04 30.64C35.72 28.56 41.48 27 48 27ZM16 28C20.4 28 24 24.4 24 20C24 15.6 20.4 12 16 12C11.6 12 8 15.6 8 20C8 24.4 11.6 28 16 28ZM20.52 32.4C19.04 32.16 17.56 32 16 32C12.04 32 8.28 32.84 4.88 34.32C1.92 35.6 0 38.48 0 41.72V48H18V41.56C18 38.24 18.92 35.12 20.52 32.4ZM80 28C84.4 28 88 24.4 88 20C88 15.6 84.4 12 80 12C75.6 12 72 15.6 72 20C72 24.4 75.6 28 80 28ZM96 41.72C96 38.48 94.08 35.6 91.12 34.32C87.72 32.84 83.96 32 80 32C78.44 32 76.96 32.16 75.48 32.4C77.08 35.12 78 38.24 78 41.56V48H96V41.72ZM48 0C54.64 0 60 5.36 60 12C60 18.64 54.64 24 48 24C41.36 24 36 18.64 36 12C36 5.36 41.36 0 48 0Z" fill="url(#paint0_linear_22_184)" />
                <defs>
                  <linearGradient id="paint0_linear_22_184" x1="48" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#292D76" />
                    <stop offset="1" stopColor="#0495F1" />
                  </linearGradient>
                </defs>
              </svg>


              <p className="text-2xl font-bold text-[#0A3255]  uppercase">
                35K TRAFFIC PER DAY
              </p>
            </div>

            <div className="w-full flex justify-center items-center shadow">
              <p className="text-3xl font-bold text-[#0A3255]  uppercase">

                lorem
              </p>
            </div>


          </div>

          <div className="w-full h-[500px] bg-[url('/assets/residence/masterbedroom2.jpg')] bg-no-repeat bg-cover bg-bottom flex justify-center items-center">
            <div className="backdrop-blur-sm p-10 px-20 min-h-[250px]  bg-white/30 text-center flex flex-col justify-center items-center gap-4">

              <div className="inline-flex text-[#0A3255]">
                <p className="font-extrabold text-5xl uppercase font-sans">The Old Siam </p>
                <p className="font-Allison text-4xl -ml-10 translate-y-4 -rotate-6 text-slate-500">Residence</p>
              </div>
              <p className="text-sm ">CHRAMING OF LIVING</p>
              <button className="hover:scale-105 duration-300  w-fit px-6 py-3 bg-[#0A3255]  text-white text-xs items-center rounded-3xl inline-flex">

                EXPLORE MORE

                <i className="ml-2 ">
                  <svg width="20" height="20" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72C22.36 72 8 57.64 8 40ZM-1.74846e-06 40C-7.83308e-07 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 -2.7136e-06 40 -1.74846e-06C17.92 -7.83308e-07 -2.7136e-06 17.92 -1.74846e-06 40ZM40 36L24 36L24 44L40 44L40 56L56 40L40 24L40 36Z" fill="currentColor" />
                  </svg>

                </i></button>

            </div>

          </div>

          <div className="w-full grid grid-cols-2 gap-4">

            <div className="flex gap-4 flex-col ">
              <div className="inline-flex text-[#0A3255]">
                <p className="font-extrabold text-5xl uppercase font-sans">SHOPPING CENTER</p>

              </div>
              <button className="hover:scale-105 duration-300  w-fit px-6 py-3 bg-[#0A3255] text-white text-xs items-center rounded-3xl inline-flex">

                EXPLORE MORE

                <i className="ml-2 ">
                  <svg width="20" height="20" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72C22.36 72 8 57.64 8 40ZM-1.74846e-06 40C-7.83308e-07 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 -2.7136e-06 40 -1.74846e-06C17.92 -7.83308e-07 -2.7136e-06 17.92 -1.74846e-06 40ZM40 36L24 36L24 44L40 44L40 56L56 40L40 24L40 36Z" fill="currentColor" />
                  </svg>

                </i></button>
            </div>

            <div className="flex">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem placeat qui cum maiores commodi id? Dolore repellat non officiis cum.</p>
            </div>

            <div className="col-span-2 mt-4">
              <div className="grid grid-cols-3 gap-3 ">
                <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto bg-[url('/assets/Untitled-1-01-01-01.png')] bg-no-repeat bg-center bg-cover">
                  <div>
                    <div className="w-full image-cover rounded-t-md opacity-0" >
                      <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                      </div>
                    </div>
                    <div className="py-8 px-4 bg-white  rounded-b-md ">
                      <span className="block text-lg text-[#0A3255] font-bold tracking-wide">Diamond jewelry & Gold </span>
                      <span className="block text-gray-600 text-sm">65 units of the well-know center of jewelers selling precious gemstones, intricately crafted gold ornaments and other jewelry items.
                      </span>
                    </div>
                  </div>

                </div>
                <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto bg-[url('/assets/Untitled-1-01.png')] bg-no-repeat bg-center bg-cover">
                  <div>
                    <div className="w-full image-cover rounded-t-md opacity-0" >
                      <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                      </div>
                    </div>
                    <div className="py-8 px-4 bg-white  rounded-b-md ">
                      <span className="block text-lg text-[#0A3255] font-bold tracking-wide">Thai Taste</span>
                      <span className="block text-gray-600 text-sm">Over 150 units This is also where visitors can find shops selling quality silk that carries the Royal Peacock seal of quality for Thai silk...
                      </span>
                    </div>
                  </div>

                </div>
                <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto bg-[url('/assets/Untitled-1-01-01.png')] bg-no-repeat bg-center bg-cover">
                  <div>
                    <div className="w-full image-cover rounded-t-md opacity-0" >
                      <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                        <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                        <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                      </div>
                    </div>
                    <div className="py-8 px-4 bg-white  rounded-b-md ">
                      <span className="block text-lg text-[#0A3255] font-bold tracking-wide">Silk & Lace</span>
                      <span className="block text-gray-600 text-sm">Over 150 units This is also where visitors can find shops selling quality silk that carries the Royal Peacock seal of quality for Thai silk...
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="w-full h-[200px] flex justify-center items-center flex-col gap-4">
            <div className="inline-flex text-[#0A3255]">
              <p className="font-extrabold text-5xl uppercase font-sans">GET IN TOUCH</p>
            </div>
            <p className="font-Allison text-5xl -mt-9 text-slate-500">with us</p>
            <button className="hover:scale-105 duration-300  w-fit px-6 py-3 bg-[#0A3255] text-white text-xs items-center rounded-3xl inline-flex">

              EXPLORE MORE

              <i className="ml-2 ">
                <svg width="20" height="20" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72C22.36 72 8 57.64 8 40ZM-1.74846e-06 40C-7.83308e-07 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 -2.7136e-06 40 -1.74846e-06C17.92 -7.83308e-07 -2.7136e-06 17.92 -1.74846e-06 40ZM40 36L24 36L24 44L40 44L40 56L56 40L40 24L40 36Z" fill="currentColor" />
                </svg>

              </i></button>
          </div>



        </div>

      </div>
    </Layout>
  )
}
