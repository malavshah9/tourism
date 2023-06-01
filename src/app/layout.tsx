import "./globals.css";
import { CustomClientQueryProvider } from "./util/QueryClient";

export const metadata = {
  title: "Tourism",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CustomClientQueryProvider>
        <body>{children}</body>
      </CustomClientQueryProvider>
    </html>
  );
}
