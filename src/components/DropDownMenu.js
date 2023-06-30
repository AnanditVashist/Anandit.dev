import { NavContext } from "../context/NavContext";
import Link from "next/link";
import React, { useContext } from "react";
const DropdownMenu = () => {
	const navContext = useContext(NavContext);
	return (
		<div className="absolute right-0 mt-6   w-full h-screen bg-white rounded-lg shadow-lg z-50 ">
			<ul className="">
				<Link
					href="/articles"
					onClick={() =>
						navContext.setIsNavDisplayed((prevVal) => {
							!prevVal;
						})
					}>
					<li className="hover:bg-gray-100 px-4 py-2 cursor-pointer font-bold">
						Articles
					</li>
				</Link>
				<Link
					href="/contact"
					onClick={() =>
						navContext.setIsNavDisplayed((prevVal) => {
							!prevVal;
						})
					}>
					<li className="hover:bg-gray-100 px-4 py-2 cursor-pointer font-bold">
						Contact
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default DropdownMenu;
