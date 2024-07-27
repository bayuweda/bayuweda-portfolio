export default function MySkill() {
  return (
    <>
      <section
        id="keahlian"
        className="bg-gradient-to-t from-blue-500/5 mt-16 md:mt-32 "
      >
        <div className="container mx-auto px-4">
          <div className="py-8 md:py-12 flex flex-col items-center">
            <h1 className="text-primary text-4xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Keahlian <span className="text-white">saya</span>
            </h1>
            <p className="text-white font-light text-sm md:text-base text-center max-w-lg">
              Sebagai seorang Frontend Web Developer berikut keahlian dan alat
              yang sudah saya pelajari dan gunakan selama proses pembelajaran.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <SkillCard image="./src/assets/pngwing 3.png" level="Ahli" />
            <SkillCard image="./src/assets/css.png" level="Ahli" />
            <SkillCard image="./src/assets/javascript.png" level="Menengah" />
            <SkillCard image="./src/assets/figma.png" level="Pemula" />
            <SkillCard image="./src/assets/bootstrap.png" level="Pemula" />
            <SkillCard image="./src/assets/nodejs.png" level="Pemula" />
            <SkillCard image="./src/assets/tailwind.png" level="Pemula" />
            <SkillCard image="./src/assets/logo192.png" level="Pemula" />
          </div>
        </div>
      </section>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function SkillCard({ image, level }) {
  return (
    <div className="flex flex-col items-center justify-center  shadow-sm transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 shadow-sky-950 hover:shadow-primary w-full sm:w-1/2 md:w-1/3 lg:w-1/6 m-2 mx-14 lg:mx-0 md:mx-0">
      <img
        src={image}
        alt=""
        className="bg-gradient-to-bl from-blue-600/20 via-transparent to-transparent p-7 "
      />
      <h1 className="text-primary text-sm md:text-base font-light text-center ">
        {level}
      </h1>
    </div>
  );
}
