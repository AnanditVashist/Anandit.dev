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
				<body>
					<Nav></Nav>
					{children}
				</body>
			</html>
		</NavContext.Provider>
	);
}
