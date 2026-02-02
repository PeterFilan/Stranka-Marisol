import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export default function LocationPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-24">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
