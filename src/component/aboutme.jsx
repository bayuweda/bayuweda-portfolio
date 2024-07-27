export default function About() {
  return (
    <>
      <section id="tentang" className="bg-gradient-to-t from-blue-500/5 w-full">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:mr-10 pl-5 md:pl-0 lg:pl-0">
              <img
                src="./src/assets/Group 4.png"
                alt=""
                className="w-full md:w-auto"
              />
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2 flex flex-wrap justify-center items-center lg:justify-start md:justify-start ">
              <h1 className="text-4xl md:text-3xl  lg:text-6xl text-white font-bold mb-6">
                <span className="text-primary">Tentang</span> saya
              </h1>
              <p className="text-base md:text-xl font-light text-white leading-relaxed hidden lg:block md:hidden ">
                Selamat datang di portofolio web saya! Saya Bayu Weda, seorang
                front-end website developer dengan hasrat untuk menciptakan
                pengalaman web yang menarik dan responsif. Dengan keahlian dalam
                HTML, CSS, dan JavaScript, saya fokus pada desain yang estetis
                dan performa yang optimal. Saat ini saya sedang menempuh
                pendidikan di Primakara University, semester 6. Selamat datang
                di dunia saya
              </p>
              <p className="lg:text-lg md:text-base   font-light text-white leading-relaxed hidden lg:hidden md:block">
                Halo! Saya Bayu Weda, seorang front end developer dengan fokus
                pada pengembangan antarmuka pengguna yang menarik dan responsif.
                Saat ini saya sedang menempuh pendidikan di Primakara
                University, semester 6. Selamat datang di dunia saya
              </p>
              <p className="text-lg md:text-xl font-light text-white leading-relaxed lg:hidden md:hidden text-center">
                Halo! Saya Bayu Weda, seorang front end developer dengan fokus
                pada pengembangan antarmuka pengguna yang menarik dan responsif.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
