export default function Gallery() {
    const images = [
      { src: "/asset/my-image/foto (1).jpeg", aspect: "aspect-video" },
      { src: "/asset/my-image/foto (2).jpeg", aspect: "aspect-square" },
      { src: "/asset/my-image/foto (14).jpeg", aspect: "aspect-square" },
      { src: "/asset/my-image/foto (3).jpeg", aspect: "aspect-video" },
      { src: "/asset/my-image/foto (4).jpeg", aspect: "aspect-square" },
      { src: "/asset/my-image/foto (6).jpeg", aspect: "aspect-video" },
      { src: "/asset/my-image/foto (7).jpeg", aspect: "aspect-square" },
      { src: "/asset/my-image/foto (8).jpeg", aspect: "aspect-video" },
      { src: "/asset/my-image/foto (9).jpeg", aspect: "aspect-square" },
      { src: "/asset/my-image/foto (10).jpeg", aspect: "aspect-video" },
      { src: "/asset/my-image/foto (11).jpeg", aspect: "aspect-square" },
      { src: "/asset/my-image/foto (12).jpeg", aspect: "aspect-video" },
      { src: "/asset/my-image/foto (13).jpeg", aspect: "aspect-square" }
    ];
  
    return (
      <div className="container mx-auto mt-28">
        <div className="text-center w-96 mx-auto mb-8">
          <h1 className="text-white text-4xl md:text-4xl lg:text-5xl">
            Gallery <span className="text-primary">saya</span>
          </h1>
        </div>
        <div className="columns-2  gap-2">
          {images.map((image, index) => (
            <div key={index} className={`p-1 ${image.aspect}`}>
              <img src={image.src} alt={`Foto ${index + 1}`} className="w-full h-full object-cover rounded shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  