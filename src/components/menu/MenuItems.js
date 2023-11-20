export default function MenuItems() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img src="/pizza.png" className="max-h-24 block mx-auto" alt="pizza" />
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet,consectrtur adipisicing elit.
      </p>
      <button className="bg-primary mt-4  text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
}
