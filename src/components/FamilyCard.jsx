import React from "react";

const FamilyCard = ({ href, image, nameMember, role }) => {
  return (
    <div className="">
      <a href={href} target="_blank">
        <div className="flex sm:flex-col gap-3 sm:justify-center sm:items-center">
          <div className="w-20 sm:w-40 xl:w-full rounded-full overflow-hidden">
            <img
              src={image}
              alt="member"
              className="h-full object-cover rounded-full transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex flex-col justify-center sm:items-center align-middle">
            <p className="text-sm xl:text-xl">{nameMember}</p>
            <p className="text-sm xl:text-xl text-[#808080]">{role}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FamilyCard;
