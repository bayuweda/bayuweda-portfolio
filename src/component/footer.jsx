export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-b from-blue-500/5 text-white p-8 mt-28">
        <div className="container flex justify-center">
          <div className="">
            <div className="container mx-auto text-center">
              <p>&copy; 2023 Bayu Weda. Hak Cipta Dilindungi.</p>
              <p className="mt-2">Weda Dev</p>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-1 text-white">
                Informasi Kontak
              </h3>
              <p className="text-gray-600">
                Alamat: Br. Pupuan. Tegallalang. Gianyar. Bali
              </p>
              <p className="text-gray-600">Telepon: +6285847486643</p>
              <p className="text-gray-600">Email: bayuweda24@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
