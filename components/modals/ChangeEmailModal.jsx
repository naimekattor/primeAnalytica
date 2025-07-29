import Dialog from "../ui/Dialog";

// This is just the UI, logic would be added with state and handlers
export default function ChangeEmailModal({ isOpen, setIsOpen }) {
  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="p-8">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 flex items-center text-sm"
        >
          <svg
            className="w-4 h-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
          Change Password
        </h2>
        <form className="space-y-5">
          <div>
            <label className="text-sm font-medium">Old password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="mt-1 w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">New password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="mt-1 w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Confirm new password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="mt-1 w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Confirm
          </button>
        </form>
      </div>
    </Dialog>
  );
}
