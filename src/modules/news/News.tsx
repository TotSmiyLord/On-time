import Footer from "@/components/Footer";
import Navbar from "@/components/NavbarWhite";
import NewsSection from "@/components/NewsSection";
import Subscribe from "@/components/Subscribe";

export default function News() {
  return (
    <div>
      <Navbar />
      <NewsSection />
      <Subscribe />
      <div className="mt-64">
        <Footer />
      </div>
    </div>
  );
}
