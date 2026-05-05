import { Chip } from "@heroui/react";
import Image from "next/image";


const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://pixgen-black.vercel.app/data.json');
    const photos = await res.json();
    const photo = photos.find(p => p.id == id)
    return (
        <div className="space-y-2">
            <h1 className="text-4xl font-semibold">{photo.title}</h1>
            <div className="relative w-full aspect-square">
                <Image
                    src={photo.imageUrl}
                    alt="photo"
                    fill={true}
                    className="object-cover rounded-xl"
                />
                <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip>
            </div>
            <p>{photo.prompt}</p>
        </div>
    );
};

export default PhotoDetailsPage;