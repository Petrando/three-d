"use client"
import Image from "next/image";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import {Experience} from "@/components/Experience"

export default function Home() {
  return (
      <>
      <Head>
        <title>3d Avatar</title>
      </Head>
      <Experience />
      </>    
  );
}
