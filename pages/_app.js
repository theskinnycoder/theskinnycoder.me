import Footer from "../components/Footer"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-display text-tuna-900">
      <Header />
      <Sidebar />
      <div className="flex flex-col min-h-screen mt-20">
        <div className="flex-grow">
          <main>
            <Component {...pageProps} />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
