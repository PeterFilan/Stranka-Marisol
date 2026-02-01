"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
    "/images/oliva/hero-main.jpg",
    "/images/oliva/IMG_0356.jpg",
    "/images/oliva/IMG_0347.jpg",
    "/images/oliva/IMG_0354.jpg",
    "/images/oliva/IMG_0361.jpg",
    "/images/oliva/IMG_1138.jpg",
    "/images/oliva/IMG_2515.jpg",
];

export default function Gallery() {
    const [index, setIndex] = useState(-1);

    return (
        <section id="gallery" className="section-padding bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary uppercase tracking-wider">
                    Galéria
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((src, i) => (
                        <div
                            key={i}
                            className="group relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
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
                                    Zobraziť
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
