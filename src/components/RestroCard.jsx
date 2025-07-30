import React from 'react';

function RestroCard({ name, image, locality, time, avgRating, cuisines }) {
  return (
    <div className="mx-2 my-2 border h-80 w-72 hover:bg-gray-100 rounded overflow-hidden shadow">
      <img
        className="h-40 w-full object-cover"
        src={image}
        alt={name}
      />
      <div className="p-2 font-semibold space-y-1">
        <div>{name}</div>
        <div className="text-sm text-gray-600">{locality}</div>
        <div className="text-sm text-green-600">⭐ {avgRating} Stars</div>
        <div className="text-sm text-gray-600">{time} mins</div>
        <div className="text-sm text-gray-800">{cuisines}</div>
      </div>
    </div>
  );
}
// for higher component for example when we want to use restruarnt card and enhance ith promated lable then we use higher order compenents
//  export const withLabelRestroCard=(RestroCard)=>{
//   return (props) => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestroCard {...props}/>
//       </div>
//     )
//   }
// }

export default RestroCard;
