import { IMAGE_URL } from "../utils/constant";

const itemCard = ({itemData}) =>{
    const {name,category,description,imageId,price} = itemData;
    const rating = itemData?.ratings?.aggregatedRating?.rating;
    const ratingCountV2 = itemData?.ratings?.aggregatedRating?.ratingCountV2;
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <h4>{category}</h4>
                <h4>{price}</h4>
                <div>
                    <h4>{rating}</h4>
                    <h4>{ratingCountV2}</h4>
                </div>
                <h4>{description}</h4>
            </div>
            <div>
                <img src={IMAGE_URL + imageId }></img>
            </div>
        </div>
    )
}

export default itemCard;