import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "@/components/Background";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useWedding } from "@/contexts/WeddingContext";
import Footer from "@/components/Footer";

const Gallery = () => {
    const { weddingData } = useWedding();
    const imageLimit = import.meta.env.VITE_GALLERY_IMAGE_LIMIT || 10;

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <Background>
            <Header isNotIndexPage />
            <section id="gallery" className="py-20 px-4 select-none">
                <div className="md:container mx-auto">
                    <div className="backdrop-blur-md bg-white/30 rounded-3xl p-3 md:p-12 border border-white/20 shadow-xl py-12">
                        <div className="flex flex-col gap-4 mb-8">
                            <Link to="/" className="w-fit">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="backdrop-blur-sm bg-white/50"
                                >
                                    <ArrowLeft size={16} className="mr-2" />
                                    Back to Home
                                </Button>
                            </Link>
                            <div className="w-full text-center">
                                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 font-Faculty-Glyphic">
                                    Our Gallery
                                </h2>
                                <p className="text-xs text-muted-foreground">
                                    Moments captured through our journey
                                    together
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {weddingData.gallery
                                .slice(0, imageLimit)
                                .map((image, index) => (
                                    <div
                                        key={image.id}
                                        className="backdrop-blur-sm bg-white/20 rounded-2xl p-2 border border-white/20"
                                    >
                                        <div className="relative group overflow-hidden rounded-xl">
                                            <img
                                                src={image.url}
                                                alt={
                                                    image.caption ||
                                                    `Gallery image ${index + 1}`
                                                }
                                                className="w-full h-64 object-cover shadow-lg group-hover:scale-105 transition-transform"
                                            />
                                            {image.caption && (
                                                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/30 text-white p-3 rounded-b-xl">
                                                    <p className="text-sm">
                                                        {image.caption}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Background>
    );
};

export default Gallery;
