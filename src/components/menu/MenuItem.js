export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img
          className="max-h-24 block mx-auto"
          src={"/pizza.png"}
          alt={"Pizza"}
        />
      </div>
      <h4 className="font-semibold my-2">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Et esse in voluptate et dolor est consectetur velit.
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-6 py-2">
        Add to cart $12
      </button>
    </div>
  );
}
