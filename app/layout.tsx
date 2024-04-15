import "./globals.css";
import TopNav from "@/app/ui/topnav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"
        />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <title>manavhirani</title>
      </head>

      <body className="flex flex-col">
        <div className="sticky top-0 h-1 bg-red-500 sm:bg-indigo-500 md:bg-blue-500 lg:bg-green-500 xl:bg-yellow-500 2xl:bg-orange-500"></div>
        <div className="sticky flex flex-row items-center justify-center top-5 z-10">
          <div className="w-screen mx-2 xl:max-w-screen-xl">
            <TopNav />
          </div>
        </div>
        <div className="flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
