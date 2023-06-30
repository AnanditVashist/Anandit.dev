import Script from "next/script";
import React from "react";

const Page = () => {
	return (
		<>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Content Manager</title>
				<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
			</head>
			<body>
				<Script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></Script>
			</body>
		</>
	);
};

export default Page;
