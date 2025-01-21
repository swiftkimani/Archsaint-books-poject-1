import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import Routers from "../routers/Routers"
const Layout = () => {
    return (<>
        <Navbar />
        <div>
            <Routers/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout