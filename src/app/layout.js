'use client'
import './globals.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime : 1000 * 60 * 60 * 24
    },
  },
})

export default function RootLayout({ children }) {
  return (
      <QueryClientProvider client={queryClient}>
    <html lang="en">
      <body>{children}</body>
    </html>
      </QueryClientProvider>
  )
}
