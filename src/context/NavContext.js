const { createContext } = require("react");
export const NavContext = createContext({
	navDisplayed: null,
	setIsNavDisplayed: null,
});
