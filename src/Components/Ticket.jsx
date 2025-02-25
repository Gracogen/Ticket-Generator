
const Ticket = ({ data }) => {
  return (
    <div className="text-white text-center">
      <h2 className="text-lg font-bold">Conference Ticket</h2>
      <img
        src={data.avatar}
        alt="Avatar"
        className="w-24 h-24 rounded-full mx-auto my-4 border-2 border-blue-400"
      />
      <p className="text-lg">{data.name}</p>
      <p className="text-gray-400">{data.email}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 bg-gray-700 hover:bg-gray-800 p-2 rounded"
      >
        Generate New Ticket
      </button>
    </div>
  );
};

export default Ticket;
