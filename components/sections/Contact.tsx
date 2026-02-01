import { FaWhatsapp, FaFacebookMessenger, FaInstagram, FaMapMarkerAlt, FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiWaze } from "react-icons/si";

export default function Contact() {
    return (
        <section id="contact" className="section-padding bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary uppercase tracking-wider">
                    Contact
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Social and Messaging */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-darkGray mb-6">Write to us</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a
                                href="https://wa.me/421123456789"
                                target="_blank"
                                className="flex items-center gap-4 p-6 bg-green-50 text-green-700 rounded-2xl hover:bg-green-100 transition-all border border-green-100 group"
                            >
                                <FaWhatsapp size={32} className="group-hover:scale-110 transition-transform" />
                                <div>
                                    <div className="font-bold text-lg">WhatsApp</div>
                                    <div className="text-sm opacity-80">We respond almost immediately</div>
                                </div>
                            </a>
                            <a
                                href="https://m.me/yourprofile"
                                target="_blank"
                                className="flex items-center gap-4 p-6 bg-blue-50 text-blue-700 rounded-2xl hover:bg-blue-100 transition-all border border-blue-100 group"
                            >
                                <FaFacebookMessenger size={32} className="group-hover:scale-110 transition-transform" />
                                <div>
                                    <div className="font-bold text-lg">Messenger</div>
                                    <div className="text-sm opacity-80">Write to us via Facebook</div>
                                </div>
                            </a>
                            <a
                                href="https://instagram.com/yourprofile"
                                target="_blank"
                                className="flex items-center gap-4 p-6 bg-pink-50 text-pink-700 rounded-2xl hover:bg-pink-100 transition-all border border-pink-100 group"
                            >
                                <FaInstagram size={32} className="group-hover:scale-110 transition-transform" />
                                <div>
                                    <div className="font-bold text-lg">Instagram</div>
                                    <div className="text-sm opacity-80">Check out our photos</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Location and Navigation */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-darkGray mb-6">Where to find us</h3>
                        <div className="bg-accent/10 p-8 rounded-3xl border border-accent/30">
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div className="ml-4">
                                    <h3 className="font-bold text-gray-900 uppercase tracking-widest">Address</h3>
                                    <p className="text-gray-600">
                                        VXV2+7C2 Molinell<br />
                                        Oliva, Valencia<br />
                                        Spain
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FaPhone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div className="ml-4">
                                    <h3 className="font-bold text-gray-900 uppercase tracking-widest">Phone</h3>
                                    <p className="text-gray-600">+421 900 000 000</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <FaEnvelope className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div className="ml-4">
                                    <h3 className="font-bold text-gray-900 uppercase tracking-widest">Email</h3>
                                    <p className="text-gray-600">info@marisol.sk</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
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
        </section>
    );
}
