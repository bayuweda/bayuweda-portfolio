import React, { useState } from "react";

const certificate = [
  {
    id: 1,
    name: "Belajar AJAX dan Web Api",
    image: "./src/assets/sartifikat/gambar/sertif_ajax.jpg",
    pdf: "./src/assets/sartifikat/certificate ajax.pdf",
  },
  {
    id: 2,
    name: "Javascript Asynchronous",
    pdf: "./src/assets/sartifikat/certificate asyn.pdf",
    image: "./src/assets/sartifikat/gambar/sertif_asyn.jpg",
  },
  {
    id: 3,
    name: "Dasar Css",
    pdf: "./src/assets/sartifikat/sertifikatcss.pdf",
    image: "./src/assets/sartifikat/gambar/sertif_dasarcss.jpg",
  },
  {
    id: 4,
    name: "Dasar Pemrograman",
    pdf: "./src/assets/sartifikat/sertifikat_dasar pemrograman.pdf",
    image: "./src/assets/sartifikat/gambar/sertif_dasarpemrograman.jpg",
  },
  {
    id: 5,
    name: "Belajar Git",
    pdf: "./src/assets/sartifikat/sertifikat_belajar git.pdf",
    image: "./src/assets/sartifikat/gambar/sertif_git.jpg",
  },
  {
    id: 6,
    name: "Belajar SQL",
    pdf: "./src/assets/sartifikat/sertifikat_sql.pdf",
    image: "./src/assets/sartifikat/gambar/sertifsql.jpg",
  },
  {
    id: 7,
    name: "Belajar ReactJS",
    pdf: "./src/assets/sartifikat/certificate reactjs01.pdf",
    image: "./src/assets/sartifikat/gambar/sertif_react02.jpg",
  },
  {
    id: 8,
    name: "ReactJS Component",
    pdf: "./src/assets/sartifikat/certificate react02.pdf",
    image: "./src/assets/sartifikat/gambar/sertif_react03.jpg",
  },
  {
    id: 9,
    name: "ReactJS State",
    pdf: "./src/assets/sartifikat/certificate.pdf",
    image: "./src/assets/sartifikat/gambar/sertif_react01.jpg",
  },
  {
    id: 10,
    name: "Belajar HTML",
    pdf: "./src/assets/sartifikat/certificate html.pdf",
    image: "./src/assets/sartifikat/gambar/sertif_html.jpg",
  },
];

// Komponen Card untuk menampilkan informasi sertifikat dan tombol unduh
function Card({ image, name, pdf }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf; // Path ke file PDF
    link.download = pdf.split("/").pop(); // Nama file saat di-download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-blue-600/5 mx-10 md:mx-3 lg:mx-3 rounded-lg overflow-hidden shadow-lg lg:w-96 md:w-1/3  transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 m-2">
      <img src={image} alt="" className="w-full" />
      <div className="px-2 py-4">
        <h1 className="text-primary">{name}</h1>
        <button
          onClick={handleDownload}
          className="text-white text-sm font-light hover:text-primary"
        >
          Download sertifikat
        </button>
      </div>
    </div>
  );
}

// Komponen Certificate untuk menampilkan daftar sertifikat
export default function Certificate() {
  const [showAllCertificate, setShowAllCertificate] = useState(false);

  const handleToggleProjects = () => {
    setShowAllCertificate(!showAllCertificate);
  };

  const certificateToShow = showAllCertificate
    ? certificate
    : certificate.slice(0, 3);

  return (
    <section id="certificate" className="mt-32">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="text-center w-96 mx-auto">
            <h1 className="text-white text-4xl md:text-4xl lg:text-5xl">
              Sertifikat <span className="text-primary">saya</span>
            </h1>
          </div>
          <div className="container flex flex-wrap justify-center mt-10">
            {certificateToShow.map((certif) => (
              <Card
                key={certif.id}
                image={certif.image}
                name={certif.name}
                pdf={certif.pdf}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-4 mx-auto">
          <button
            className="bg-primary px-4 py-2 inline-flex items-center rounded-sm text-xl text-white mx-auto"
            onClick={handleToggleProjects}
          >
            {showAllCertificate ? "Tampilkan sedikit" : "Tampilkan semua"}
            <span className="text-xl pl-2">
              {showAllCertificate ? (
                <img src="./src/assets/arrow-left.png" alt="" />
              ) : (
                <img src="./src/assets/arrow-right 1.png" alt="" />
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
