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
		<div class="relative z-20 flex justify-between items-center">
			<div class="flex md:block lg:flex items-center max-w-full">
				<div class="mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-12">
					<a href="/" class="flex items-center no-underline">
						<img
							src="/anandit.png"
							class="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"></img>
					</a>
				</div>{" "}
				<div>
					<a
						href="/"
						class="block text-black no-underline  text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight">
						Anandit Vashist
					</a>{" "}
					{/* <div class="flex mt-3 lg:mt-4 uppercase tracking-wide text-xs space-x-6">
						<a
							href="/articles"
							class="text-gray-600  font-semibold no-underline hover:text-black">
							About
						</a>{" "}
						<a
							href="/articles"
							class="text-gray-600  font-semibold no-underline hover:text-black">
							Articles
						</a>
						<a
							href="/journal"
							class="text-gray-600  font-semibold no-underline hover:text-black">
							Contact
						</a>
					</div> */}
				</div>
			</div>{" "}
			{/* <div class="block md:hidden">
				<button class="block">
					<svg
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						class="block text-black h-6 w-6"
						style={{ display: "block" }}>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>{" "}
					<svg
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						class="text-black h-6 w-6 hidden"
						style={{ display: "none" }}>
						<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
					</svg>
				</button>
			</div> */}
		</div>
	);
};

export default Nav;
