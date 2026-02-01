"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const equipmentData = [
    {
        id: "bedroom1",
        label: "Spálňa 1",
        items: ["manželská posteľ", "nočné stolíky", "vstavaná skriňa", "posteľná bielizeň", "klimatizácia"],
        image: "/images/bedroom_1.png"
    },
    {
        id: "bedroom2",
        label: "Spálňa 2",
        items: ["2x jednolôžková posteľ", "komoda", "pracovný stôl", "posteľná bielizeň"],
        image: "/images/bedroom_1.png" // Reusing for now
    },
    {
        id: "livingroom",
        label: "Obývačka",
        items: ["rozkladacia pohovka", "TV", "konferenčný stolík", "jedálenský kút", "vstup na terasu"],
        image: "/images/apartment_interior_living_room.png"
    },
    {
        id: "kitchen",
        label: "Kuchyňa",
        items: ["chladnička", "mraznička", "rúra", "varná doska", "mikrovlnka", "rýchlovarná kanvica", "kávovar"],
        image: "/images/kitchen_modern.png"
    },
    {
        id: "bathroom",
        label: "Kúpeľňa",
        items: ["sprchovací kút", "WC", "umývadlo", "práčka", "uteráky", "fén"],
        image: "/images/kitchen_modern.png" // Placeholder
    }
];

export default function Equipment() {
    const [activeTab, setActiveTab] = useState(equipmentData[0].id);

    const activeData = equipmentData.find(tab => tab.id === activeTab) || equipmentData[0];

    return (
        <section id="equipment" className="section-padding bg-accent/20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary uppercase tracking-wider">
                    Vybavenie apartmánu
                </h2>

                {/* Tabs Grid */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {equipmentData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === tab.id
                                    ? "bg-primary text-white shadow-lg scale-105"
                                    : "bg-white text-darkGray hover:bg-gray-100"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white p-8 rounded-2xl shadow-xl">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-bold mb-6 text-darkGray">{activeData.label}</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {activeData.items.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-darkGray">
                                    <span className="text-primary"><FaCheck /></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="order-1 md:order-2">
                        <div
                            className="rounded-xl overflow-hidden shadow-lg h-64 bg-cover bg-center transition-all duration-500"
                            style={{ backgroundImage: `url("${activeData.image}")` }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
