import CreateRoomCard from "../components/CreateRoomCard";
import JoinRoomCard from "../components/JoinRoomCard";

export default function Home() {
  return (
    <div className="bg-black h-screen flex items-center">
      <div className="mx-auto">
        <div className="flex flex-wrap mx-auto p-10 gap-y-8 gap-x-10 ">
          <CreateRoomCard />
          <JoinRoomCard />
        </div>
      </div>
    </div>
  );
}
