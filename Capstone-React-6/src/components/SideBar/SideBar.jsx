import React from 'react'

export default function SideBar() {
  return (
    <div>
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="/logo/mindease-logo.svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>

        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full justify-between px-4 py-6 overflow-y-auto bg-white shadow">
                <a href="#" className="flex items-center justify-center mb-14">
                    <img src="/logo/mindease-logo.svg" className="h-6 sm:h-7" alt="Mindease Logo" />
                </a>
                <ul className="mb-20 text-body1 font-regular justify-between px-3 py-4 gap-10">
                    <li>
                        <a href="#" className="flex mb-3 items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                            <img src="../../../public/Sidebar/Dashboard.svg" alt="" className="hover:stroke-primary-darker" />
                            <span className="ms-3">Dashboard</span>
                        </a> 
                    </li>
                    <li>
                        <a href="#" className="flex mb-3 items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                            <img src="../../../public/Sidebar/Headset.svg" alt="" className="hover:stroke-primary-darker" />
                            <span className="ms-3">Kelola Konten</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex mb-3 items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                            <img src="../../../public/Sidebar/Clipboard.svg" alt="" className="hover:stroke-primary-darker" />
                            <span className="ms-3 ">Kelola Pasien</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex mb-3 items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                            <img src="../../../public/Sidebar/CardTransaction.svg" alt="" className="hover:stroke-primary-darker" />
                            <span className="ms-3 ">Transaksi</span>  
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex mb-3 items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                            <img src="../../../public/Sidebar/AddLayer.svg" alt="" className="hover:stroke-primary-darker" />
                            <span className="ms-3 ">Kelola Forum</span>
                        </a>
                    </li>
                </ul>
                <ul className="bottom-10 text-body1 font-regular justify-between px-3 py-2">
                    <li>
                        <a href="#" className="flex mt-40 items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                        <img src="../../../public/Sidebar/Logout.svg" alt="" className="hover:stroke-primary-darker" />
                            <span className="ms-3 ">Log Out</span>
                        </a>
                    </li>  
                </ul>
            </div>
        </aside>
    </div>
  )
}
