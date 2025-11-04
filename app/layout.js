export const metadata = {
  title: 'Harmony Academy - Excellence in Education',
  description: 'A premier institution dedicated to nurturing minds and shaping futures',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
