import Serviceimage from "../../../assets/vfxtext.png";
import { motion } from "framer-motion";
export function GalleryWithCarousel() {
  const videos = [
    { videoid: "gaW7K9QB7-s", title: "Video 1" },
    { videoid: "Cmbhur2Rc4E", title: "Video 2" },
    { videoid: "W68MEn_v5hw", title: "Video 3" },
    { videoid: "1urjoFV0GK4", title: "Video 4" },
  ];

  return (
    <section className="text-gray-600 body-font py-20">
      <img
        src={Serviceimage}
        alt="after effects"
        className="mb-10 w-[100px]"
        id="vfx"
      />
      <p className="text-left text-yellow-100">
        There are several benefits to using VFX in advertising: <br />{" "}
        Creativity: VFX allows advertisers to push the boundaries of what's
        possible, creating visually stunning and memorable ads that capture the
        viewer's attention.
      </p>
      <motion.div
        className="container py-0 m-auto mt-10 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex  m-5 gap-5">
          {videos.map(({ videoid, title }, index) => (
            <div key={index} className="lg:w-1/4 sm:w-2/4 ">
              <div
                className="relative overflow-hidden rounded shadow-glow"
                style={{
                  width: "100%",
                  paddingBottom: "177.77%" /* 9:16 aspect ratio */,
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoid}?autoplay=1&mute=1&loop=1&playlist=${videoid}`}
                  className="absolute inset-0 w-full h-full"
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// Add the CSS for the glow effec
