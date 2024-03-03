import { promises as fs } from "fs";

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
      <body>{children}</body>
    </html>
  );
}
