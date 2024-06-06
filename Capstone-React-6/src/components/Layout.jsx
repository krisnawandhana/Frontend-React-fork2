import SideBar from "../components/SideBar/SideBar"
import { Outlet } from "react-router-dom"

export default function Layout() {
	return (
		<div className="flex w-full min-h-screen">
			<SideBar />
			<div className="sm:ml-64 p-6 bg-[#FAFAFA] sm:w-full w-[calc(100%-52px)]">
				<Outlet />
			</div>
		</div>
	)
}
