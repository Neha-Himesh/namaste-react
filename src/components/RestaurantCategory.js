const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
    // console.log(data);
  };

  return (
    <div>
      <div className="w-6/12 m-auto my-5 bg-gray-50 shadow-lg p-4 flex justify-between">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.items.length})
          </span>
          <span>⬇️</span>
        </div>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
