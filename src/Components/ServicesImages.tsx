import type { ServiceImage } from "../utils/types";

function ServicesImages({ src, alt }: ServiceImage) {
  return <img src={src} alt={alt}></img>;
}

export default ServicesImages;
