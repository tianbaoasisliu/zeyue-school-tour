export const metadata = {
  title: 'Zeyue 2027-2028 Kindergarten 申请追踪',
  description: 'NYC私立学校幼儿园申请信息汇总',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
