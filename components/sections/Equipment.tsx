"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useTranslations } from "next-intl";

const equipmentData = [
    {
        id: "bedroom1",
        label: "Bedroom 1",
        items: ["double bed", "nightstands", "built-in wardrobe", "bed linen", "air conditioning"],
        image: "/images/bedroom_1.png"
    },
    {
        id: "bedroom2",
        label: "Bedroom 2",
        items: ["2x single bed", "chest of drawers", "desk", "bed linen"],
        image: "/images/bedroom_1.png" // Reusing for now
    },
    {
        id: "livingroom",
        label: "Living Room",
        items: ["sofa bed", "TV", "coffee table", "dining area", "access to terrace"],
        image: "/images/apartment_interior_living_room.png"
    },
    {
        id: "kitchen",
        label: "Kitchen",
        items: ["fridge", "freezer", "oven", "hob", "microwave", "electric kettle", "coffee maker"],
        image: "/images/kitchen_modern.png"
    },
    {
        id: "bathroom",
        label: "Bathroom",
        items: ["shower", "WC", "sink", "washing machine", "towels", "hair dryer"],
        image: "/images/kitchen_modern.png" // Placeholder
    }
];

export default function Equipment() {
    const t = useTranslations("Equipment");
    const [activeTab, setActiveTab] = useState(equipmentData[0].id);

    const activeData = equipmentData.find(tab => tab.id === activeTab) || equipmentData[0];

    return (
        <section id="equipment" className="section-padding bg-accent/20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary uppercase tracking-wider">
                    {t("title")}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white p-8 shadow-xl">
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
                            className="overflow-hidden shadow-lg h-64 bg-cover bg-center transition-all duration-500"
                            style={{ backgroundImage: `url("${activeData.image}")` }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
