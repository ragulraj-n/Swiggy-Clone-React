import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";

const ItemCard = ({itemData}) =>{
    const {name,category,description,imageId} = itemData;
    let {price} = itemData;
    if(price === undefined){
        const {defaultPrice} = itemData;
        price = defaultPrice;
    }
    const rating = itemData?.ratings?.aggregatedRating?.rating;
    const ratingCountV2 = itemData?.ratings?.aggregatedRating?.ratingCountV2;
    const dispatch = useDispatch();
    const handleClick = () =>{
        console.log("Button Clicked")
            dispatch(addItems("burger"));
    }

    return (
        <div className="flex m-auto w-full border-gray-400 border-b-2 p-2.5 mb-2">
            <div className="w-[75%]">
                <h2 className="text-lg font-semibold">{name}</h2> 
                <h4 className="text-sm font-thin">{category}</h4>
                <h4 className="text-lg font-semibold my-2">₹{price/100}</h4>
                <div className="flex ">
                    <h4 className="text-sm font-semibold mb-2 text-green-800">⭐{rating}</h4>
                    <h4 className="text-xs font-semibold mb-2 ml-1 mt-0.5"> ({ratingCountV2})</h4>
                </div>
                <h4 className="text-sm  mb-2 overflow-auto">{description}</h4>
            </div>
            <div className="flex justify-center items-center w-[25%] relative">
                {imageId ? (
                    <div className="relative">
                    <button
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[17%] font-bold bg-white text-green-700 rounded-sm cursor-pointer" onClick={handleClick}>ADD</button>
                    <img
                        className="w-[300px] h-[170px] rounded-xl"
                        src={IMAGE_URL + imageId}
                        alt="item"
                    />
                    </div>
                ) : (
                    <button className="w-[50%] h-[25%] font-bold text-white bg-green-700 rounded-sm">
                    ADD
                    </button>
                )}

                </div>
        </div>
    )
}

export default ItemCard;