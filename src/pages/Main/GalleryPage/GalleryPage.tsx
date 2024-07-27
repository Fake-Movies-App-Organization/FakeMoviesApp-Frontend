import { Gallery } from "../../../components/Gallery/Gallery";
import { Releases } from "../../../components/Gallery/Releases";

export const GalleryPage = () => {
  return (
    <div className="w-full bg-[#161A30]">
      <section className="py-20 max-w-[1450px] mx-auto w-11/12 flex gap-8">
        <Gallery />
        <Releases />  
      </section>
    </div>
  );
};
