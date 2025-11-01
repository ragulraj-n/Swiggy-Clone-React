

const Filter = ({restaurant,setFilteredList}) =>{

    return (
         <div className="filter-bar">
            <button className="top-rated-btn" onClick={()=>{
            let filteredList = restaurant.filter((res)=>{
                return  res.info.avgRating > 4.2;
            })
                console.log("Top Rated Button Clicked");
                setFilteredList(filteredList);
            }}>Top Rated Restaurants</button>

            <button className="reset-btn" onClick={()=>{
                setFilteredList(restaurant);
                console.log("Reset Button Clicked");
            }}>Reset Filters</button>
        </div>
    )
}

export default Filter;