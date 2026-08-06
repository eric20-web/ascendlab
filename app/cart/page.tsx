export default function CartPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Your Cart</h1>
        <div className="mt-10 rounded-xl bg-zinc-900 p-8">
  <h2 className="text-3xl font-bold">
    ASCENDLAB Essential Hoodie
  </h2>

  <p className="mt-3 text-gray-400">
    Price: £44.99
  </p>
</div>

        <p className="mt-4 text-gray-400">
           </p>

        <button className="mt-8 rounded-full bg-white px-8 py-3 font-bold text-black hover:bg-gray-200">
          Checkout
        </button>
      </div>
    </main>
  );
}