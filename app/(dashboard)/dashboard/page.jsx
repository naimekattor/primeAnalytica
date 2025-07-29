import SalesGraph from "@/components/SalesGraph";

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <a
            href="#"
            className="border-red-500 text-red-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            HOME
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            TASKS
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            PROFILE
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            AGENDA
          </a>
        </nav>
      </div>
      {/* Grid for cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          Main Chart Placeholder
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          Max Achieved Card Placeholder
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          Katherine Stevens Card
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          Performance Cards Area
        </div>
      </div>
      <SalesGraph />
    </div>
  );
};

export default DashboardPage;
