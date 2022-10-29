// root layout now replaces _app.tsx and _document.tsx files
export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }) {
    return (
      <html lang="en">
        <head>
          <title>Next.js</title>
        </head>
        <body>{children}</body>
      </html>
    );
  }