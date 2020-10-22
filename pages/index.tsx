import * as React from "react";
import { NextRouter, useRouter } from "next/router";
import { GridLoader } from "react-spinners";

export default function Home() {
  const router: NextRouter = useRouter();

  React.useEffect(() => {
    router.push("/news");
  }, []);

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        padding: "0",
        margin: "0",
        height: "100vh",
        width: "100vw"
      }}
    >
      <GridLoader />
    </div>
  );
}
