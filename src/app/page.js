"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { useContext, useState } from "react";
import Link from "next/link";
import { NavContext } from "../context/NavContext";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const navContext = useContext(NavContext);
	return (
		<>
			{/* <h1 class="text-xl font-semibold text-black mb-4">About</h1> */}
			<div class="text-lg text-gray-600 leading-normal space-y-6">
				<p>Anandit is an experienced full-stack developer based in Canada.</p>{" "}
				<p>
					Currently, he&#39;s working at{" "}
					<Link
						className="underline font-semibold text-black"
						href={"https://getcargolink.com/"}
						target="_blank">
						CargoLink
					</Link>
					, a platform which helps truck carriers and custom brokers to
					streamline their cross-border workflows.
				</p>{" "}
				<p>
					Previously, he worked at{" "}
					<Link
						className="underline font-semibold text-black"
						href={"https://okrx.ca/"}
						target="_blank">
						OkRx
					</Link>
					, building software that makes it easier for patients to get access to
					costly medication and{" "}
					<Link
						className="underline font-semibold text-black"
						href={"https://ubinome.com/"}
						target="_blank">
						Ubinome
					</Link>
					, helping businesses of all sizes with their software needs.
				</p>{" "}
				<p>
					When he&#39;s not staring at the screen and writing about himself in
					third person, he <span className="line-through">likes</span> tries to
					workout , cook and discover new products on Product Hunt.
				</p>
				<p>
					You can contact him at{" "}
					<Link
						className="underline font-semibold text-black"
						href={"mailto:anandit46@gmail.com"}>
						anandit46@gmail.com
					</Link>
				</p>
			</div>
		</>
	);
}
