"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useTranslations } from "next-intl";

const photos = [
    "/images/oliva/hero-main.jpg",
    "/images/oliva/resort_pool_view_1.png",
    "/images/oliva/resort_pool_view_2.jpg",
    "/images/oliva/188e782d-5f5f-4a5d-87d9-b52457d613fd.jpg",
    "/images/oliva/251f9a5b-677a-4121-a0fc-d45ea8cbc39c.jpg",
    "/images/oliva/349bba44-fd08-43dd-873e-20fa42904c59.jpg",
    "/images/oliva/57a60c86-4776-4968-ae68-728f595ac762.jpg",
    "/images/oliva/5a3a1db7-b5ac-4d0b-9587-693387b2c36d.jpg",
    "/images/oliva/5ca6915f-3bb9-41b5-b55c-40543eb00287.jpg",
    "/images/oliva/94998cb1-ee59-41fc-800b-f943bdf60752.jpg",
    "/images/oliva/IMG_0347.jpg",
    "/images/oliva/IMG_0354.jpg",
    "/images/oliva/IMG_0356.jpg",
    "/images/oliva/IMG_0361.jpg",
    "/images/oliva/IMG_0370.jpg",
    "/images/oliva/IMG_0374.jpg",
    "/images/oliva/IMG_0391.jpg",
    "/images/oliva/IMG_1138.jpg",
    "/images/oliva/IMG_1341.jpg",
    "/images/oliva/IMG_2515.jpg",
    "/images/oliva/IMG_3625.jpg",
    "/images/oliva/IMG_4648.jpg",
    "/images/oliva/IMG_4656.jpg",
    "/images/oliva/IMG_5075.jpg",
    "/images/oliva/IMG_5076.jpg",
    "/images/oliva/IMG_5080.jpg",
    "/images/oliva/IMG_5083.jpg",
    "/images/oliva/IMG_5089.jpg",
    "/images/oliva/IMG_5090.jpg",
    "/images/oliva/IMG_5134.jpg",
    "/images/oliva/IMG_5151.jpg",
    "/images/oliva/IMG_5155.jpg",
    "/images/oliva/IMG_5475.jpg",
    "/images/oliva/IMG_6036.jpg",
    "/images/oliva/IMG_6038.jpg",
    "/images/oliva/IMG_8953.jpg",
    "/images/oliva/IMG_9006.jpg",
    "/images/oliva/ea41df2b-f089-48a2-af2e-0f06b40bc186.jpg",
    "/images/oliva/fd7a19a1-7d7a-4bda-9bb6-2886b2e671d0.jpg",
];

export default function Gallery() {
    const t = useTranslations("Gallery");
    const [index, setIndex] = useState(-1);

    return (
        <section id="gallery" className="section-padding bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary uppercase tracking-wider">
                    {t("title")}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((src, i) => (
                        <div
                            key={i}
                            className="group relative h-64 overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                            onClick={() => setIndex(i)}
                        >
                            <Image
                                src={src}
                                alt={`Apartment photo ${i + 1}`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg uppercase tracking-widest">
                                    {t("view")}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <Lightbox
                    index={index}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    slides={photos.map(src => ({ src }))}
                />
            </div>
        </section>
    );
}
