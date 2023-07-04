"use client";
import React, { useContext } from "react";
import { NavContext } from "../../context/NavContext";

const Page = () => {
	const navContext = useContext(NavContext);
	return (
		<>
			<main className={`px-6 pt-6 ${navContext.navDisplayed ? "hidden" : ""} `}>
				<div className="text-lg text-grey-darkest leading-normal space-y-6">
					<p className="font-semibold text-xl text-slate-900">Contact</p>
					<p>Please fill the form below and Anandit will get back ASAP!</p>
					<form className="rounded-lg" name="Contact" netlify>
						<label className="text-gray-700">Email</label>
						<input
							type="email"
							className="w-full bg-white border border-gray-300 p-2 rounded-md mt-1 mb-2"
							name="email"
						/>
						<label className="text-gray-700">Subject</label>
						<input
							type="text"
							className="w-full bg-white border border-gray-300 p-2 rounded-md mt-1 mb-2"
							name="subject"
						/>
						<label className="text-gray-700">Message</label>
						<textarea
							type="text"
							className="w-full bg-white border border-gray-300 p-2 rounded-md mt-1 h-24"
							name="message"></textarea>
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
							Submit
						</button>
					</form>
				</div>
			</main>
		</>
	);
};

export default Page;
