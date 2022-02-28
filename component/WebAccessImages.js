

import React, { useEffect, useState } from "react";
import { imageService } from "../services/imageService";
import '../App.css';

const WebAccessImages = () => {

    const [imageList, setImageList] = useState([]);
    const [imageListLoadMore, setImageListLoadMore] = useState([]);
    const [loadMoreCheck, setLoadMoreCheck] = useState(false);

    useEffect(() => {
        imageService().then(data => {
            data.json().then(imageData => {
                setImageList(imageData?.slice(1, 20));
                setImageListLoadMore(imageData?.slice(20, 25));
            })
        })
    }, []);

    function* generatorExample() {
        yield imageListLoadMore
    }

    const loadMoreImageHandler = () => {
        var genObject = generatorExample();
        setImageList([...imageList, ...genObject.next().value])
        setLoadMoreCheck(true);
    }



    return (
        <div>
            <h1>Image List</h1>

            {imageList?.length ? <div className="image-list-container" role="img" aria-label="json palace holder images">
                {
                    imageList?.map(image => {
                        return (
                            <div key={image.id} className="image-list">
                                <img src={image.thumbnailUrl} alt={image.title} />
                            </div>
                        )
                    })
                }
                <div>
                    {!loadMoreCheck ? <a aria-label="Show more images" onClick={loadMoreImageHandler}>Load More</a> : null}
                </div>
            </div> : <h3>No image</h3>}


        </div>
    );
};

export default WebAccessImages;
