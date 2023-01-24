import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGif"

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        console.log(category)
        const imagesResponse = await getGifs(category);

        setImages(imagesResponse);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages()
    }, [])

    return {
        images: images,
        isLoading: true
    }
}
