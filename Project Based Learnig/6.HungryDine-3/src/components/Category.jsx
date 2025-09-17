import Items from "./Items";
import { useState } from "react";

const Category = ({ cat }) => {
  const [openCatId, setOpenCatId] = useState(cat[0]?.card?.card?.categoryId);

  return (
    <div className="w-6/12 mx-auto">
      {cat.map((item) => {
        const { categoryId, itemCards, title } = item.card.card;
        let isOpen = openCatId === categoryId;
        return (
          <div className="p-3 m-2 border-t-15 border-gray-200" key={categoryId}>
            <div
              className="flex justify-between font-bold text-lg cursor-pointer"
              onClick={() => {
                setOpenCatId(isOpen ? null : categoryId);
              }}
            >
              <span>
                {title} ({itemCards.length})
              </span>
              <span>{isOpen ? "-" : "+"}</span>
            </div>
            {isOpen && <Items items={itemCards} />}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
