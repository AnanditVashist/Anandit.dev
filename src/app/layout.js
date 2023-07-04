"use client";
import { createContext, useState } from "react";
import "./globals.css";
import { NavContext } from "@/context/NavContext";
import Nav from "@/components/Nav";

export default function RootLayout({ children }) {
	const [navDisplayed, setIsNavDisplayed] = useState(false);
	return (
		<NavContext.Provider value={{ navDisplayed, setIsNavDisplayed }}>
			<html lang="en">
				<body className="py-8 lg:py-16 px-6 md:px-16 lg:px-24">
					<Nav></Nav>
					<div className="lg:pl-32 mt-12">
						<div class="max-w-md">{children}</div>
					</div>
				</body>
			</html>
		</NavContext.Provider>
	);
}
