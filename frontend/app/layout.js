import "./globals.css"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"

export const metadata = {
  title: "Eric Solutions",
  description: "AI-powered clinical and data solutions platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
        
      </body>
    </html>
  )
}