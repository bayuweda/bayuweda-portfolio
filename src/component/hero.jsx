export default function HeroSection() {
  return (
    <>
      <section id="beranda" className="">
        <div className="container mx-auto ">
          <div className="flex mx-6 pt-16 flex-wrap">
            <div className=" w-full lg:w-1/2 md:w-1/2 mt-10 md:mt-28 lg:mt-28 flex flex-wrap justify-center lg:justify-start md:justify-start lg:inline md:inline ">
              <h1 className="text-white lg:text-5xl md:text-3xl text-2xl ">
                Hii Saya Bayu Weda 👋
              </h1>
              <h2 className="text-primary sm:text-sm lg:text-2xl md:text-base mt-1 bg-gradient-to-r from-blue-600 via-blue-300 to-white bg-clip-text text-transparent">
                Frontend Developer & UI Desainer
              </h2>
              <p className="text-white/60 pr-20 mt-2 font-light hidden lg:block  md:hidden lg:text-base">
                Selamat datang di portofolio web saya! Saya Bayu Weda, seorang
                front-end website developer dengan hasrat untuk menciptakan
                pengalaman web yang menarik dan responsif. Dengan keahlian dalam
                HTML, CSS, dan JavaScript, selamat menjelajahi yaa teman-teman{" "}
                <span className="font-bold text-white">✨</span>
              </p>
              <p className="text-white/60 pr-20 mt-2 font-light hidden  md:text-sm md:block lg:hidden">
                Selamat datang di portofolio web saya! Saya Bayu Weda, seorang
                front-end website developer
              </p>

              <p className="text-white/60  mt-2 font-light text-center flex item-center lg:hidden md:hidden  justify-center ">
                Selamat datang di portofolio web saya! Saya Bayu Weda, seorang
                front-end website developer
              </p>

              <div className="flex gap-9 items-center mt-8 mb-5 lg:mb-0 md:mb-0 ">
                <a href="https://wa.me/083894499241">
                  <button className="bg-primary text-white px-4 py-2 text-sm rounded-sm">
                    Hubungi saya
                  </button>
                </a>

                <div className="flex h-7 gap-6">
                  <a href="https://www.instagram.com/bayuweda24">
                    <img src="./src/assets/instagram 1.png" alt="" />
                  </a>

                  <a href="https://www.linkedin.com/in/bayu-weda-b030b1279">
                    <img src="./src/assets/linkedin 1.png" alt="" />
                  </a>

                  <a href="">
                    <img src="./src/assets/facebook.svg" alt="" />
                  </a>
                </div>
              </div>

              <div className="hover:ring-2 ring-primary min-w-min inline-flex p-1 items-baseline gap-2 mt-2">
                <img src="./src/assets/download-icon.png" alt="" />
                <h1 className="text-white font-light cursor-pointer">
                  Unduh CV
                </h1>
              </div>
            </div>

            {/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1922779383. */}
            <div className=" w-full lg:w-1/2 md:w-1/2 sm:w-full mt-10  lg:mt-0 md:mx-auto  ">
              <div className="md:-ml-32 md:mb-11 lg:ml-0 lg:mb-0 sm:-ml-16 hidden lg:block md:block">
                <img
                  src="./src/assets/bootstrap.png"
                  alt="Bootstrap"
                  className="z-10 mt-16 ml-32 -rotate-45 absolute animate-goyang"
                />
                <img
                  src="./src/assets/nodejs.png"
                  alt="Node.js"
                  className="z-20 mt-20 ml-64 absolute animate-naik"
                />
                <img
                  src="./src/assets/javascript.png"
                  alt="JavaScript"
                  className="z-20 mt-16 ml-96 absolute rotate-45 animate-pulse"
                />
                <img
                  src="./src/assets/figma.png"
                  alt="Figma"
                  className="z-20 mt-52 ml-36 absolute -rotate-12 animate-rightLeft"
                />
                <img
                  src="./src/assets/css.png"
                  alt="CSS"
                  className="z-20 absolute mt-60 ml-96 rotate-12 animate-goyang"
                />
                <img
                  src="./src/assets/html.png"
                  alt="HTML"
                  className="z-20 absolute mt-80 ml-60 animate-pulse"
                />
              </div>
              {/* tampilan ponsel */}
              <div className=" relative w-14  lg:hidden md:hidden">
                <img
                  src="./src/assets/bootstrap.png"
                  alt="Bootstrap"
                  className="-rotate-45 absolute animate-goyang mt-10 ml-20"
                />
                <img
                  src="./src/assets/nodejs.png"
                  alt="Node.js"
                  className=" absolute animate-naik mt-10 ml-40"
                />
                <img
                  src="./src/assets/javascript.png"
                  alt="JavaScript"
                  className="absolute rotate-45 animate-pulse mt-10 ml-64"
                />
                <img
                  src="./src/assets/figma.png"
                  alt="Figma"
                  className="-rotate-12 animate-rightLeft absolute mt-36 ml-24"
                />
                <img
                  src="./src/assets/css.png"
                  alt="CSS"
                  className="absolute rotate-12 animate-goyang mt-40 ml-64"
                />
                <img
                  src="./src/assets/html.png"
                  alt="HTML"
                  className="absolute  animate-pulse mt-60 ml-40"
                />
              </div>
              <img src="./src/assets/hero.png" alt="Hero" className="z-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
