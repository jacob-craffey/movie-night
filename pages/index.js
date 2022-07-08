export default function Home() {
  return (
    <div className="bg-black h-screen align-middle flex items-center">
      <div className="mx-auto">
      <div className="flex flex-wrap mx-auto p-10 gap-y-8 gap-x-10 ">
        <div className="bg-dark-gray border rounded-2xl flex items-center flex-col p-10  sm:w-full md:w-80  gap-y-5 text-white">
          <h1 className="font-bold text-2xl">Create Room</h1>
          <p className="mb-5">
            Create a room code and send to your friends to vote on what movie to watch tonight.
          </p>
          <button className="button mx-auto mt-auto">Create Room</button>
        </div>
        <div className="bg-dark-gray border rounded-2xl flex items-center flex-col p-10 sm:w-full md:w-80  gap-y-5 text-white">
          <h1 className="font-bold text-2xl">Join Room</h1>
          <p className="mb-5">
            If you have a room code, enter it below to be placed in the room
          </p>
          <input className="border rounded-md" type="text" />
          <button className="button mx-auto mt-auto">Join Room</button>
        </div>
      </div>
      </div>
     
    </div>
  );
}
