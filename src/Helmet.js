import React from "react";

const description = "This is my PWA Test Site";
const title = "Jay Fallon PWA Test";
const url = `https://jayfallon.net`;
const thumbnail = `%PUBLIC_URL%/graphics/thumbnail.png`;

const HelmetWrapper = () => (
	<>
		{/* Global Stylesheet */}
		{/* <link rel="stylesheet" href="https://s3.amazonaws.com/jayfallon-portfolio-2019/globalStyles.css" /> */}
		<link rel="stylesheet" href="https://s3.amazonaws.com/jayfallon-portfolio-2019/css/globalStyles.css" />

		{/* NProgress Stylesheet */}
		{/* <link rel="stylesheet" type="text/css" href="https://s3.amazonaws.com/jayfallon-portfolio-2019/nprogress.css" /> */}
		<link
			rel="stylesheet"
			type="text/css"
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/css/nprogress.css"
		/>

		{/* Font Awesome Stylesheet */}
		<link
			rel="stylesheet"
			href="https://pro.fontawesome.com/releases/v5.6.3/css/all.css"
			integrity="sha384-LRlmVvLKVApDVGuspQFnRQJjkv0P7/YFrw84YYQtmYG4nK8c+M+NlmYDCv0rKWpG"
			crossOrigin="anonymous"
		/>

		{/* SEO: App description for search-engine optimization */}
		<meta name="Description" content={description} />

		{/* Bonus: Have beautiful preview tiles when users share your website on social media */}
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content={thumbnail} />
		<meta property="og:type" content="website" />
		<meta property="og:url" content={url} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:image" content={thumbnail} />

		{/* Bonus: Have app icon and splash screen for PWAs saved to homescreen on iOS devices */}
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
		<link
			rel="apple-touch-icon"
			sizes="57x57"
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/icon-57.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="72x72"
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/icon-72.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="114x114"
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/icon-114.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="144x144"
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/icon-144.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="512x512"
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/icon-512.png"
		/>
		<link
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/splash-2048.png"
			media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
			rel="apple-touch-startup-image"
		/>
		<link
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/splash-1668.png"
			media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
			rel="apple-touch-startup-image"
		/>
		<link
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/splash-1536.png"
			media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
			rel="apple-touch-startup-image"
		/>
		<link
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/splash-1125.png"
			media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
			rel="apple-touch-startup-image"
		/>
		<link
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/splash-1242.png"
			media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
			rel="apple-touch-startup-image"
		/>
		<link
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/splash-750.png"
			media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
			rel="apple-touch-startup-image"
		/>
		<link
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/splash-640.png"
			media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
			rel="apple-touch-startup-image"
		/>
		{/* favicon */}
		{/* <link rel="icon" type="image/png" href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/favicon.png" /> */}
		<link
			rel="icon"
			type="image/png"
			href="https://s3.amazonaws.com/jayfallon-portfolio-2019/graphics/favicon.png"
		/>
	</>
);

export default HelmetWrapper;
