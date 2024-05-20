export default function AddProject() {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6">ADD YOUR PROJECT</h1>
        <div className="w-full md:max-w-md bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter title"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                rows="4"
                placeholder="Enter description"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                + Add Project
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  