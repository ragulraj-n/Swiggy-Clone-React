import { IMAGE_URL } from "../utils/constant";

const itemCard = ({itemData}) =>{
    const {name,category,description,imageId} = itemData;
    let {price} = itemData;
    if(price === undefined){
        const {defaultPrice} = itemData;
        price = defaultPrice;
    }
    const rating = itemData?.ratings?.aggregatedRating?.rating;
    const ratingCountV2 = itemData?.ratings?.aggregatedRating?.ratingCountV2;
    console.log(itemData);
    return (
        <div className="flex m-auto w-[55%] border rounded-2xl p-2.5 mb-5">
            <div className="w-[75%]">
                <h2 className="text-lg font-semibold">{name}</h2> 
                <h4 className="text-sm font-thin">{category}</h4>
                <h4 className="text-lg font-semibold my-2">₹{price/100}</h4>
                <div className="flex ">
                    <h4 className="text-sm font-semibold mb-2 text-green-800">⭐{rating}</h4>
                    <h4 className="text-xs font-semibold mb-2 ml-1 mt-0.5"> ({ratingCountV2})</h4>
                </div>
                <h4 className="text-sm overflow-hidden mb-2;">{description}</h4>
            </div>
            <div className="w-[25%]">
                <img className="w-[300px] h-[170px] rounded-xl" src={IMAGE_URL + imageId }></img>
            </div>
        </div>
    )
}

export default itemCard;