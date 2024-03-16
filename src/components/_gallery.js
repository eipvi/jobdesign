import Image from "next/image";

export default function Gallery() {
  return (
    <div className="imageContainer">
      <div className="imageGrid">
        <div className="img1">
          <Image
            src="/manag.svg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="img2">
          <Image
            src="/gcheck.svg"
            width={800}
            height={900}
            alt="Picture of the author"
          />
        </div>
        <div className="img3">
          <Image
            src="/b24.svg"
            width={600}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="img4">
          <Image
            src="/linkbio.svg"
            width={900}
            height={800}
            alt="Picture of the author"
          />
          
        </div>
        <div className="img5">
          <Image
            src="/linkbio.svg"
            width={700}
            height={900}
            alt="Picture of the author"
          />
          
        </div>
      </div>
    </div>
  );
}
