import { FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-darkGray text-white py-8">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <div className="flex flex-col gap-2">
                            <a href="mailto:info@yourapartment.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <FaEnvelope /> info@yourapartment.com
                            </a>
                            <a href="tel:+421123456789" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <FaPhone /> +421 123 456 789
                            </a>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow us</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://wa.me/421123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl hover:text-primary transition-colors"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl hover:text-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl hover:text-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div>
                        <p className="text-sm">
                            © {new Date().getFullYear()} Your Apartment. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
