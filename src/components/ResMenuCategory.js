import ItemsCard from "./ItemsCard";

const ResMenuCategory = ({menuCategory}) =>{

    
    const {title,itemCards} = menuCategory;
    return (
        <div className="flex m-auto w-[55%] flex-wrap rounded-lg border p-2.5 my-2.5">
            <div className="flex justify-between w-full mx-2">
            <h1 className="font-bold ml-1 mb-4 text-xl">{title} ({itemCards.length})</h1>
            <h1 className="mr-2.5 text-xl">⬇</h1>
            </div>
            <div className="w-full">
            {
                itemCards.map((item)=>{
                return <ItemsCard key={item?.card?.info?.id} itemData={item?.card?.info}/>
            })
            }
            </div>
        </div>
        )
}

export default ResMenuCategory;