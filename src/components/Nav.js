"use client";
import Image from "next/image";
import React, { useState, useContext } from "react";
import BarsIcon from "./BarsIcon";
import CrossIcon from "./CrossIcon";
import DropdownMenu from "./DropDownMenu";
import { NavContext } from "../context/NavContext";
import Link from "next/link";
const Nav = () => {
	const navContext = useContext(NavContext);

	return (
		<nav className="flex flex-row p-6 justify-between items-center">
			<div className="flex flex-row justify-between items-center space-x-3">
				<Image
					src={"/anandit.png"}
					width={40}
					height={40}
					className=""
					alt="Anandit"></Image>
				<Link href={"/"}>
					<p className="block text-black no-underline font-bold text-xl lg:text-3xl  leading-none lg:leading-tight">
						Anandit Vashist
					</p>
				</Link>
			</div>
			<div>
				<div
					className="hover:cursor-pointer"
					onClick={() => {
						navContext.setIsNavDisplayed((prevStatus) => !prevStatus);
					}}>
					<BarsIcon
						className={`w-8 h-8 ${navContext.navDisplayed ? "hidden" : ""}`}
					/>
				</div>
				<div
					className="hover:cursor-pointer"
					onClick={(prevStatus) => navContext.setIsNavDisplayed(!prevStatus)}>
					<CrossIcon
						className={`w-8 h-8 ${navContext.navDisplayed ? "" : "hidden"}`}
					/>
				</div>
				{navContext.navDisplayed && <DropdownMenu />}
			</div>
		</nav>
	);
};

export default Nav;
