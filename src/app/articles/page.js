"use client";
import React, { useContext } from "react";
import { NavContext } from "../layout";

const Page = () => {
	const navContext = useContext(NavContext);
	return (
		<main className={`px-6 pt-6 ${navContext.navDisplayed ? "hidden" : ""} `}>
			<p className="font-extrabold text-xl text-slate-900">Articles</p>
			<p className="pt-4">
				I like to write articles because they give me a chance to reflects whats
				going on in my code and (more importantly) in my mind!
			</p>
		</main>
	);
};

export default Page;
