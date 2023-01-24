import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Jujutsu Kaisen']);

    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)} />


            {
                categories.map(category => {
                    return (
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                })
            }
        </>
    )
}