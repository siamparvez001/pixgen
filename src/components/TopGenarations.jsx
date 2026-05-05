import PhotoCard from "./PhotoCard";


const TopGenarations = async () => {
    const res = await fetch('https://pixgen-black.vercel.app/data.json');
    const photos = await res.json();
    const topPhotos = photos.slice(0, 8)
    return (
        <div>
            <h1 className="text-2xl font-bold my-5">Top Genarations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    topPhotos.map(photo =>
                        <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGenarations;