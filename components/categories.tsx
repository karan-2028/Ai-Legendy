"use client";

import {Category} from "@prisma/client";

interface categoriesProps {
    data: Category[];
};

export const Categories = () => {
    return (
        <div>
            Categories!
        </div>
    )
}
