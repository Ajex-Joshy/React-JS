import { useDispatch } from "react-redux";
import { ITEM_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const Items = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((e) => {
        console.log(e);
        const { description, id, imageId, name, price, defaultPrice } =
          e?.card?.info;
        const amount = price || defaultPrice;

        return (
          <div key={id} className="border-b-2 py-7 border-gray-200">
            <div className="flex justify-between ">
              <div className="w-9/12">
                <h3 className="font-bold">{name}</h3>
                <h3 className="font-medium">₹{amount / 100}</h3>
                <p className="pt-3 text-sm pr-15 text-gray-500">
                  {description}
                </p>
              </div>
              <div className="w-3/12 relative">
                <div>
                  {imageId ? (
                    <div>
                      <img
                        className="w-39 h-39 object-cover rounded-xl "
                        src={ITEM_LINK + imageId}
                        alt=""
                      />
                      <button
                        className="absolute top-32.5 left-19.5  -translate-x-1/2 px-10 py-1.5 border-gray-500 rounded-lg bg-white shadow-lg font-bold text-green-600 cursor-pointer"
                        onClick={() => handleAddItem(e)}
                      >
                        ADD
                      </button>
                    </div>
                  ) : (
                    <button
                      className="mx-5 mt-3 px-10 py-1.5 border-gray-600  rounded-lg bg-white shadow-lg font-bold text-green-600 cursor-pointer"
                      onClick={() => handleAddItem(e)}
                    >
                      ADD
                    </button>
                  )}
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
