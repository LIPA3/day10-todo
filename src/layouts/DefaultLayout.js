import {Outlet, NavLink} from "react-router";
function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <div className="tab-bar">
                    <NavLink to="/home" className={({isActive}) => isActive ? "tab active" : "tab"}>Home</NavLink>
                    <NavLink to="/donelist" className={({isActive}) => isActive ? "tab active" : "tab"}>Done List</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "tab active" : "tab"}>About Us</NavLink>
                </div>
            </nav>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
    </div>
}
export default DefaultLayout;