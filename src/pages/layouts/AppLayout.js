import { Link, NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
	return (
		<>
			<div className="appBar">
				<div className="logo">
					<Link to="/">Breaking Bad</Link>
				</div>
				<div className="menu">
					<NavLink to="quotes">Quotes</NavLink>
				</div>
			</div>
			<Outlet />
		</>
	);
}
