import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "100 Days CSS Challenge",
	description: "100 Days CSS Challenge",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased bg-gray-900 text-slate-200">{children}</body>
		</html>
	);
}
