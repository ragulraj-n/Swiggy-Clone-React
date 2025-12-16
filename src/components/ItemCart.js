import { IMAGE_URL } from "../utils/constant";


const ItemCart = ({itemData}) =>{
    const {name,category,imageId} = itemData;
    let {price} = itemData;
    if(price === undefined){
        const {defaultPrice} = itemData;
        price = defaultPrice;
    }

    return (
        <div className="flex h-[150px] mb-5 border-b border-gray-600">
            <div className="w-[30%] border-r border-gray-300">
                <img className="h-[90%] w-[90%] m-[2%] "src={IMAGE_URL + imageId}>
                </img>
            </div>
            <div className="w-[70%] flex">
            <div className="w-[40%]  flex flex-col  border-r border-gray-300">
                <h1 className="ml-2 mt-[20%] font-bold text-lg">{name}</h1>
                <p className="ml-2 font-light">location</p>
            </div>
            <div className="w-[30%] flex justify-center items-center border-r border-gray-300">
                <button className="bg-gray-300 border border-gray-500 w-[15%] h-[20%] cursor-pointer rounded-sm font-medium flex justify-center items-center">-</button>
                <p className="w-[50%] h-[20%] pl-[5%] flex justify-center items-center">{1} qty</p>
                <button className="border border-gray-500 bg-gray-300 w-[15%] h-[20%] cursor-pointer rounded-sm font-medium flex justify-center items-center">+</button>
            </div>
            <div className="m-auto">
                <p>{price/100}</p>
            </div>
        </div>
        </div>
    )
}

export default ItemCart;