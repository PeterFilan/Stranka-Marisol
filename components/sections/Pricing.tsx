import { useTranslations } from "next-intl";

export default function Pricing() {
    const t = useTranslations("Pricing");

    const pricingData = [
        { period: t("high"), daily: "120 €", weekly: "780 €", monthly: "2800 €" },
        { period: t("off"), daily: "80 €", weekly: "520 €", monthly: "1800 €" },
        { period: t("winter"), daily: "60 €", weekly: "390 €", monthly: "1200 €" },
    ];

    return (
        <section id="pricing" className="section-padding bg-accent/10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary uppercase tracking-wider">
                    {t("title")}
                </h2>

                <div className="overflow-x-auto shadow-2xl">
                    <table className="w-full text-left bg-white border-collapse">
                        <thead>
                            <tr className="bg-primary text-white text-lg font-bold">
                                <th className="p-6">{t("period")}</th>
                                <th className="p-6">{t("daily")}</th>
                                <th className="p-6">{t("weekly")}</th>
                                <th className="p-6">{t("monthly")}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {pricingData.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-semibold text-darkGray">{row.period}</td>
                                    <td className="p-6 text-primary font-bold">{row.daily}</td>
                                    <td className="p-6">{row.weekly}</td>
                                    <td className="p-6">{row.monthly}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 text-center text-gray-500 italic">
                    {t("note")}
                </div>
            </div>
        </section>
    );
}
