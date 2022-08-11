import Router from "next/router";
import axios from "axios";

function CreateRoomCard() {
  const generateNewRoom = async () => {
    const res = await axios.post("/api/create-room");
    if (res.status === 200) {
      Router.push(`room/${res.data.id}`);
    } else {
      console.error('Error creating room')
    }
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
