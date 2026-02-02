
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="section-padding bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary uppercase tracking-wider">
                    {t("title")}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-darkGray mb-6">{t("writeUs")}</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">{t("name")}</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder={t("name")}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">{t("email")}</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder={t("email")}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">{t("message")}</label>
                                <textarea
                                    className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder={t("message")}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
                            >
                                {t("send")}
                            </button>
                        </form>
                    </div>

                    {/* Location and Navigation */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-darkGray mb-6">{t("findUs")}</h3>

                        <div className="h-[450px] bg-gray-200 overflow-hidden shadow-lg rounded-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3105.348382758645!2d-0.05155072406341575!3d38.893147871724906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDUzJzM1LjMiTiAwwrAwMic1Ni4zIlc!5e0!3m2!1ssk!2ssk"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
