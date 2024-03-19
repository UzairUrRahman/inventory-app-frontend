import Sidebar from "./Sidebar";



const Layout = ({children}) => {
    return (
        <>
        <div className="d-flex w-100">
            <Sidebar />
            <main style={{flex:1}}>
                {children}</main>
        </div>
           
        </>
    );
}

export default Layout;
