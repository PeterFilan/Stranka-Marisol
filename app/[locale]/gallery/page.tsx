import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/sections/Gallery";

export default function GalleryPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-24">
                <Gallery />
            </div>
            <Footer />
        </main>
    );
}
