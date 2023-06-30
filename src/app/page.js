"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { useContext, useState } from "react";
import Link from "next/link";
import { NavContext } from "./layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const navContext = useContext(NavContext);
	return (
		<>
			<main className={`px-6 pt-6 ${navContext.navDisplayed ? "hidden" : ""} `}>
				<div className="text-lg text-grey-darkest leading-normal space-y-6">
					<p className="font-extrabold text-xl text-slate-900">About</p>
					<p className="pt-4">
						Anandit is an experienced software developer based in Canada.
					</p>
					<p>
						Currently, he is working at{" "}
						<Link
							href={"https://getcargolink.com/"}
							className="font-semibold underline">
							CargoLink
						</Link>
						, a platform for helping truck carriers to improve their
						cross-border workflow.
					</p>
					<p>
						Previously, he worked at{" "}
						<Link href={"https://okrx.ca/"} className="font-semibold underline">
							OkRx
						</Link>{" "}
						,a platform helping patient to get easier access to costly
						medication that requires prior authorization from insurers and{" "}
						<Link
							href={"https://ubinome.com/"}
							className="font-semibold underline">
							Ubinome
						</Link>
						, a digital web agency helping enterprises of all sizes with their
						software development.
					</p>
					<p>
						When he is not staring at screen, he likes to workout, see whats new
						in the SaaS space and write about himself in third person.
					</p>
				</div>
			</main>
		</>
	);
}
