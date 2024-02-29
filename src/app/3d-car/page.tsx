import Head from "next/head";
import { ShowRoom } from "@/components/3d-car/"

export default function ShowRoomPage() {
  return (
      <>
      <Head>
        <title>Show Room</title>
      </Head>
      <ShowRoom />
      </>    
  );
}
