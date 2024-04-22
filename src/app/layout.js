import { promises as fs } from "fs";
import Script from "next/script";

export const generateMetadata = async () => {
  const file = await fs.readFile(
    process.cwd() + "/src/app/data/profile.json",
    "utf8"
  );
  const data = JSON.parse(file);
  let metadata = {
    ...data.meta,
    applicationName: "JSON Portfolio",
    authors: [{ name: "Anmol Agrawal", url: "https://anmolagrawal.dev" }],
  };
  return metadata;
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/9e516a39e2.js"></Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
