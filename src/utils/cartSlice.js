import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
       items: [{
    "id": "104639930",
    "name": "GHEE ROAST",
    "category": "South Indian",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/7837c4b4-f6f1-4d8e-a276-42fa83bc7bb4_439eedee-ccd3-4891-b170-c06bb1202acd.jpg",
    "inStock": 1,
    "isVeg": 1,
    "price": 17000,
    "variants": {},
    "variantsV2": {},
    "itemAttribute": {
        "vegClassifier": "VEG"
    },
    "ribbon": {
        "text": "Bestseller",
        "textColor": "#ffffff",
        "topBackgroundColor": "#d53d4c",
        "bottomBackgroundColor": "#b02331"
    },
    "showImage": true,
    "itemBadge": {},
    "badgesV2": {},
    "isBestseller": true,
    "ratings": {
        "aggregatedRating": {
            "rating": "4.7",
            "ratingCount": "1335 ratings",
            "ratingCountV2": "1.3K+"
        },
        "ratingsPresentationConfig": {
            "bgGradient": {
                "colours": [
                    "#C8F9E5",
                    "#00FFFFFF"
                ],
                "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
            },
            "ratingIconColor": "rating_very_good",
            "ratingTextColor": "rating_very_good",
            "ratingCountTextColor": "rating_very_good",
            "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
            "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
        }
    },
    "parentId": "55258574"
}],
    },
    reducers: {
        addItems : (state,action) =>{
            state.items.push(action.payload);
        },
        removeItems : (state) => {
            state.items.pop();
        },
        clearItems : (state)=>{
            state.items.lenght = 0;
        }
    }
});

export const  {addItems , removeItems , clearItems} = cartSlice.actions;
export default cartSlice.reducer;