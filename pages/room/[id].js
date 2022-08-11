import React, { useEffect, useState } from "react";
import EnterNameModal from "../../components/EnterNameModal";
import MovieSearch from "../../components/MovieSearch";
import UserCard from "../../components/UserCard";
import { useRouter } from "next/router";
import axios from "axios";

export default function room() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("name");
    if (!userName || !id) return;
    setName(userName);
    axios.post("/api/user", { id, name: userName, isInRoom: true });
  }, [id]);

  const submitName = async (name) => {
    if (name) {
      localStorage.setItem("name", name);
      setName(name);
      await axios.post("/api/user", { id, name, isInRoom: true });
    }
  };

  return (
    <div className="bg-black h-screen flex items-center">
      <UserCard name={name} />
      <MovieSearch />

      {name ? null : <EnterNameModal submitName={submitName} />}
    </div>
  );
}
