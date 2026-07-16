export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-green-700">
        Dawaikart247 Retailer Dashboard
      </h1>

      <p className="mt-4 text-gray-600">
        Welcome to the pharmacy management portal.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">
            Orders
          </h2>
          <p className="mt-2">
            Manage customer medicine orders
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">
            Inventory
          </h2>
          <p className="mt-2">
            Track medicine stock and expiry
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">
            Analytics
          </h2>
          <p className="mt-2">
            View sales and business insights
          </p>
        </div>

      </div>
    </main>
  );
}