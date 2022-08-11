function JoinRoomCard() {
  return (
    <div className="card text-center">
      <h1 className="font-bold text-2xl">Join Room</h1>
      <p className="mb-5">
        If you have a room code, enter it below to be placed in the room.
      </p>
      <form className="flex flex-col">
        <input
          className="text-input"
          type="text"
          required
          placeholder="Room Code"
          minLength={6}
          maxLength={6}
          size={6}
        />
        <button type="submit" className="button mx-auto mt-auto">
          Join Room
        </button>
      </form>
    </div>
  );
}

export default JoinRoomCard;
