import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("pizza"));
  };
  return (
    <div>
      <div className="">
        <button onClick={handleAddItem}> Add Item </button>
      </div>
    </div>
  );
};
export default ItemList;
