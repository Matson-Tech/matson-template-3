import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSyncUsername from "@/hooks/useSyncUsername";
import useWedding from "@/hooks/useWedding";
import deleteImage from "@/utils/deleteImage";
import DeletableItem from "./Editable/DeleteableItem";
import EditableImage from "./Editable/EditableImage";
import Footer from "./Footer";
import Header from "./Header";

export default function Gallery() {
    const {
        weddingData,
        updateGalleryImage,
        user,
        updateWeddingData,
        isLoggedIn,
    } = useWedding();
    const { username } = useParams();
    useSyncUsername(username);

    const limit = isLoggedIn
        ? import.meta.env.VITE_GALLERY_IMAGE_LIMIT || 12
        : weddingData.gallery.length;

    useSyncUsername(username);
    useEffect(() => window.scrollTo(0, 0), []);

    const handleGalleryImageDelete = async (
        name: string,
        indexToRemove: number,
    ) => {
        const updatedGallery = [...weddingData.gallery];
        updatedGallery.splice(indexToRemove, 1);

        const updated = await deleteImage(user, name);

        if (!updated) {
            return;
        }

        await updateWeddingData({ gallery: updatedGallery });
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header isNotIndexPage={true} />

            <div className="flex-1 max-w-7xl mx-auto px-4 py-20 w-full">
                {/* Heading Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 font-Faculty-Glyphic">
                        Wedding Gallery
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Capturing beautiful moments of{" "}
                        {weddingData.couple.groomName} &{" "}
                        {weddingData.couple.brideName}
                    </p>
                </div>

                {!isLoggedIn && weddingData.gallery.length === 0 ? (
                    <div className="text-center py-16">
                        <h3 className="text-xl font-serif text-foreground mb-2">
                            No photos yet
                        </h3>
                        <p className="text-muted-foreground">
                            Photos will be added soon!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {weddingData.gallery
                            .slice(0, limit)
                            .map((image, index) => (
                                <div
                                    key={image.id}
                                    className="backdrop-blur-sm bg-white/20 rounded-2xl p-2 border border-white/20"
                                >
                                    <DeletableItem
                                        onDelete={() =>
                                            handleGalleryImageDelete(
                                                image.name,
                                                index,
                                            )
                                        }
                                    >
                                        <EditableImage
                                            onUpdate={updateGalleryImage}
                                            imageCaption={image.caption}
                                            index={index}
                                            imageCaptionAvailable
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
                                        </EditableImage>
                                    </DeletableItem>
                                </div>
                            ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
