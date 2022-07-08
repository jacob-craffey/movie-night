import Router from "next/router";

function CreateRoomCard() {
  const generateNewRoom = () => {
    const id = Math.random().toString(36).slice(-6);

    Router.push({
      pathname: "/room",
      query: { id },
    });
  };

  return (
    <div className="card text-center">
      <h1 className="font-bold text-2xl">Create Room</h1>
      <p className="mb-5">
        Create a room code and send to your friends to vote on what movie to
        watch tonight.
      </p>
      <button className="button mx-auto mt-auto" onClick={generateNewRoom}>
        Create Room
      </button>
    </div>
  );
}

export default CreateRoomCard;
