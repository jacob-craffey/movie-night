import React from "react";
import { useRouter } from "next/router";

function room() {
  const router = useRouter();
  return <div>{router.query.id}</div>;
}

export default room;
