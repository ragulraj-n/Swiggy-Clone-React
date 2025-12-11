import { IMAGE_URL } from "../utils/constant";

const ResInfoCard = ({ resInfo }) => {
  const { id, name, cloudinaryImageId, areaName, costForTwo, avgRating, totalRatingsString } =
    resInfo;
  const { slaString } = resInfo?.sla || {};

  return (
    <div className="w-full flex">
      <div className="m-auto w-[55%]">
        <p className="font-bold text-3xl">{name}</p>

        <div className="flex border mt-2.5 mx-auto w-full h-[200px] justify-between p-[7px] rounded-2xl shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)]">

          <div className="font-semibold">
    
            <p>⭐{avgRating} ({totalRatingsString}) • {costForTwo}</p>
            <p className="ml-6 mt-5">{areaName}</p>
            <p className="ml-6 mt-5">{slaString}</p>
          </div>

          <div>
            <img
              className="w-[320px] h-[180px] rounded-2xl object-cover"
              src={IMAGE_URL + cloudinaryImageId}
              alt={name}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResInfoCard;
