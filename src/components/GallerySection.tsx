import { Link } from "react-router-dom";
import useWedding from "@/hooks/useWedding";
import deleteImage from "@/utils/deleteImage";
import DeletableItem from "./Editable/DeleteableItem";
import EditableImage from "./Editable/EditableImage";
import { Button } from "./ui/button";

const GallerySection = () => {
    const { weddingData, updateGalleryImage, user, updateWeddingData } =
        useWedding();

    const limit = 3; // Show only 3 images in the section

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
        <section id={"gallery"} className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 font-Faculty-Glyphic">
                        Our Gallery
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Beautiful moments captured
                    </p>
                </div>

                {/* Gallery Grid */}
                {weddingData.gallery.length === 0 ? (
                    <div className="text-center py-16">
                        <h3 className="text-xl font-serif text-foreground mb-2">
                            No photos yet
                        </h3>
                        <p className="text-muted-foreground">
                            Photos will be added soon!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

                {/* View All Images Button */}
                <div className="p-6 text-center mx-auto">
                    <Link to={`/gallery/${user?.username}`}>
                        <Button variant="outline" type="button">
                            View All Images
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
