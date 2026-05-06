
import { Button, Link } from "@heroui/react";



const Category = async () => {
    const res = await fetch('https://pixgen-black.vercel.app/category.json')
    const categories = await res.json();
    // console.log(category)
    return (
        <div className="mb-5 space-x-2">
            {
                categories.map(category =>
                    <Link key={category.id} href={`?category=${category.name.toLowerCase()}`}>
                        <Button size="sm" variant="outline" >
                            {category.name}
                        </Button>
                    </Link>)
            }
        </div>
    );
};

export default Category;