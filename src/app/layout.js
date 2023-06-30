"use client";
import { createContext, useState } from "react";
import "./globals.css";
import Nav from "@/components/Nav";
export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export const NavContext = createContext({
	navDisplayed: null,
	setIsNavDisplayed: null,
});

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
