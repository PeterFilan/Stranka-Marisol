import { FaUsers, FaBed, FaShower, FaSwimmingPool, FaUmbrellaBeach, FaPlane, FaUtensils, FaHome } from "react-icons/fa";

export default function About() {
    const highlights = [
        { icon: <FaUsers />, label: "5 osôb" },
        { icon: <FaBed />, label: "2 spálne" },
        { icon: <FaHome />, label: "presklená terasa" },
        { icon: <FaShower />, label: "1 kúpeľňa" },
        { icon: <FaSwimmingPool />, label: "bazén" },
        { icon: <FaPlane />, label: "letisko 35 min autom" },
        { icon: <FaUmbrellaBeach />, label: "pláž 10 min pešo" },
        { icon: <FaUtensils />, label: "reštaurácie 5 min pešo" },
    ];

    return (
        <section id="about" className="section-padding bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary uppercase tracking-wider">
                    O apartmáne
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="md:w-1/2">
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Enjoy the perfect sunrise right over the sea and a pleasant holiday atmosphere in our
                            stylish apartment in Oliva. Located in the quiet Molinell area, right next to the
                            beautiful Platja la Devesa and camping Pepe. A short walk through the dunes takes you
                            directly to the sea.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Outside our generous terrace overlooking the sea, you are steps away from
                            restaurants, supermarkets, and the beach. The apartment offers a fully equipped
                            kitchen, comfortable furnishings, and everything you need for a carefree holiday.
                        </p>    </div>

                    <div className="space-y-8">
                        <div
                            className="rounded-2xl overflow-hidden shadow-2xl h-64 bg-cover bg-center"
                            style={{ backgroundImage: 'url("/images/oliva/IMG_2515.jpg")' }}
                        />

                        <div className="grid grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 text-darkGray">
                                    <span className="text-2xl text-primary">{item.icon}</span>
                                    <span className="font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
