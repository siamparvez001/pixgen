import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";

const PhotoCard = ({ photo }) => {

    return (
        <Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
                <Image
                    src={photo.imageUrl}
                    alt="photo"
                    fill={true}
                    className="object-cover rounded-xl"
                />
                <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip>
            </div>
            <div>
                <h2 className="font-medium">{photo.title}</h2>
            </div>
            <div className="flex justify-between gap-2">
                <div className="flex items-center gap-2">
                    <p><FaHeart></FaHeart></p>
                    <p>{photo.likes}</p>
                </div>
                <Separator orientation="vertical"></Separator>
                <div className="flex items-center gap-3">
                    <p><LiaDownloadSolid></LiaDownloadSolid></p>
                    <p>{photo.downloads}</p>
                </div>
            </div>
            <Button variant="outline" className={'w-full'}>View</Button>
        </Card>
    );
};

export default PhotoCard;