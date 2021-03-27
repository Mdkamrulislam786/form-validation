import { Link } from 'react-router-dom'
import Header from './Header'
import "./index.css"


const Layout = ({ children }: any) => {


    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
