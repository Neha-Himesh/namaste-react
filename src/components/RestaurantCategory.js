const RestaurantCategory = (data) => {
  console.log(data);
  return (
    <div>
      <div className="w-6/12 m-auto my-5 bg-gray-50 shadow-lg p-4 flex justify-between">
        <span className="font-bold">
          {data.title} ({data.items.length})
        </span>
        <span>⬇️</span>
      </div>
      <ItemList items={data.itemCards} />
    </div>
  );
};
export default RestaurantCategory;
