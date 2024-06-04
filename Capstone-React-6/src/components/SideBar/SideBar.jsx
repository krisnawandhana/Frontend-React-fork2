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
            <div className="h-full justify-between px-4 py-6 overflow-y-auto bg-white">
                <a href="#" className="flex items-center justify-center mb-5">
                    <img src="/logo/mindease-logo.svg" className="h-6 sm:h-7" alt="Mindease Logo" />
                </a>
                <ul className="my-20 text-body1 font-regular justify-between px-3 py-4 gap-10">
                    <li>
                        <a href="#" className="flex items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:stroke-primary-darker">
                            <path d="M21.6665 20.0003C21.6665 19.0799 22.4127 18.3337 23.3332 18.3337H31.6665C32.587 18.3337 33.3332 19.0799 33.3332 20.0003V31.667C33.3332 32.5875 32.587 33.3337 31.6665 33.3337H23.3332C22.4127 33.3337 21.6665 32.5875 21.6665 31.667V20.0003Z" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                            <path d="M6.6665 8.33366C6.6665 7.41318 7.4127 6.66699 8.33317 6.66699H14.9998C15.9203 6.66699 16.6665 7.41318 16.6665 8.33366V20.0003C16.6665 20.9208 15.9203 21.667 14.9998 21.667H8.33317C7.4127 21.667 6.6665 20.9208 6.6665 20.0003V8.33366Z" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                            <path d="M6.6665 28.3337C6.6665 27.4132 7.4127 26.667 8.33317 26.667H14.9998C15.9203 26.667 16.6665 27.4132 16.6665 28.3337V31.667C16.6665 32.5875 15.9203 33.3337 14.9998 33.3337H8.33317C7.4127 33.3337 6.6665 32.5875 6.6665 31.667V28.3337Z" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                            <path d="M21.6665 8.33366C21.6665 7.41318 22.4127 6.66699 23.3332 6.66699H31.6665C32.587 6.66699 33.3332 7.41318 33.3332 8.33366V11.667C33.3332 12.5875 32.587 13.3337 31.6665 13.3337H23.3332C22.4127 13.3337 21.6665 12.5875 21.6665 11.667V8.33366Z" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                        <span className="ms-3">Dashboard</span>
                        </a> 
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-primary-darker">
                            <path d="M11.6665 5H28.3332V14C28.3332 17.3137 25.6469 20 22.3332 20H17.6665C14.3528 20 11.6665 17.3137 11.6665 14V5Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M28.3335 35L11.6668 35L11.6668 26C11.6668 22.6863 14.3531 20 17.6668 20L22.3335 20C25.6472 20 28.3335 22.6863 28.3335 26L28.3335 35Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 35H30" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 5H30" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="ms-3">Manage Content</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-primary-darker">
                            <path d="M5 31.6663V29.9997C5 26.3178 7.98477 23.333 11.6667 23.333H18.3333C22.0152 23.333 25 26.3178 25 29.9997V31.6663M25 18.333C27.7614 18.333 30 16.0944 30 13.333C30 10.5716 27.7614 8.33301 25 8.33301M35 31.6663V29.9997C35 26.3178 32.0152 23.333 28.3333 23.333H27.5M20 13.333C20 16.0944 17.7614 18.333 15 18.333C12.2386 18.333 10 16.0944 10 13.333C10 10.5716 12.2386 8.33301 15 8.33301C17.7614 8.33301 20 10.5716 20 13.333Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="ms-3 ">Manage User</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:stroke-primary-darker">
                            <path d="M15.0002 8.33301H10.3335C9.22893 8.33301 8.3335 9.22844 8.3335 10.333V32.9997C8.3335 34.1042 9.22893 34.9997 10.3335 34.9997H15.0002M25.0002 8.33301H29.6668C30.7714 8.33301 31.6668 9.22844 31.6668 10.333V14.9997" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M25.0346 33.8509L21.1922 34.6194L21.9606 30.777C21.9994 30.5834 22.0945 30.4056 22.2341 30.266L29.1667 23.3333L32.5 20L35.8114 23.3114L32.4781 26.6448L25.5456 33.5775C25.406 33.7171 25.2282 33.8122 25.0346 33.8509Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 7C15 5.89543 15.8954 5 17 5H23C24.1046 5 25 5.89543 25 7V11.6667H15V7Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="ms-3 ">My Patient</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:stroke-primary-darker">
                            <rect x="5" y="10" width="30" height="21.6667" rx="2" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 16.667H34.1667" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.6665 25H14.9998" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="ms-3 ">Transaction</span>  
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-primary-darker">
                            <path d="M33.3332 16.6667V10.3333C33.3332 9.22876 32.4377 8.33333 31.3332 8.33333H8.6665C7.56193 8.33333 6.6665 9.22876 6.6665 10.3333V16.6667M33.3332 16.6667V33C33.3332 34.1046 32.4377 35 31.3332 35H8.6665C7.56193 35 6.6665 34.1046 6.6665 33V16.6667M33.3332 16.6667H6.6665M13.3332 5V11.6667M26.6665 5V11.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <rect x="10" y="20" width="5" height="5" rx="0.5" fill="currentColor" stroke="currentColor"/>
                            <rect x="17.5" y="20" width="5" height="5" rx="0.5" fill="currentColor" stroke="currentColor"/>
                            <rect x="25" y="20" width="5" height="5" rx="0.5" fill="currentColor" stroke="currentColor"/>
                        </svg>
                        <span className="ms-3 ">Booking</span>
                        </a>
                    </li>
                </ul>
                <ul className="bottom-10 text-body1 font-regular justify-between px-3 py-2">
                    <li>
                        <a href="#" className="flex items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100 ">
                        <img src="avatar/avatar.jpg" alt="avatar" className="avatar w-10 rounded-full"/>
                        <span className="ms-3 ">Kelompok 6</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-dark-3 rounded-lg hover:bg-primary-lighter hover:text-primary-darker hover:font-semibold group ease-in-out duration-100">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4998 13.333C13.4998 14.1614 14.1714 14.833 14.9998 14.833C15.8283 14.833 16.4998 14.1614 16.4998 13.333H13.4998ZM16.4998 26.6663C16.4998 25.8379 15.8283 25.1663 14.9998 25.1663C14.1714 25.1663 13.4998 25.8379 13.4998 26.6663H16.4998ZM32.9579 31.5363L34.289 32.2277L34.289 32.2277L32.9579 31.5363ZM31.5364 32.9577L30.845 31.6266L30.845 31.6266L31.5364 32.9577ZM31.5364 7.04163L32.2279 5.71051L32.2279 5.71051L31.5364 7.04163ZM32.9579 8.46309L34.289 7.77163L34.289 7.77163L32.9579 8.46309ZM16.7966 7.04163L16.1051 5.71051L16.1051 5.71051L16.7966 7.04163ZM15.3751 8.46309L16.7062 9.15456L16.7062 9.15456L15.3751 8.46309ZM16.7966 32.9577L16.1051 34.2888L16.1051 34.2888L16.7966 32.9577ZM15.3751 31.5363L14.044 32.2277L14.044 32.2277L15.3751 31.5363ZM23.3332 21.4997C24.1616 21.4997 24.8332 20.8281 24.8332 19.9997C24.8332 19.1712 24.1616 18.4997 23.3332 18.4997L23.3332 21.4997ZM6.6665 19.9997L5.60584 18.939C5.02006 19.5248 5.02006 20.4745 5.60584 21.0603L6.6665 19.9997ZM11.8938 16.8937C12.4796 16.3079 12.4796 15.3581 11.8938 14.7723C11.308 14.1866 10.3583 14.1866 9.77251 14.7723L11.8938 16.8937ZM9.77251 25.227C10.3583 25.8128 11.308 25.8128 11.8938 25.227C12.4796 24.6412 12.4796 23.6915 11.8938 23.1057L9.77251 25.227ZM20.3665 8.16634H27.9665V5.16634H20.3665V8.16634ZM31.8332 12.033V27.9663H34.8332V12.033H31.8332ZM27.9665 31.833H20.3665V34.833H27.9665V31.833ZM16.4998 13.333V12.033H13.4998V13.333H16.4998ZM16.4998 27.9663V26.6663H13.4998V27.9663H16.4998ZM31.8332 27.9663C31.8332 28.9407 31.832 29.5797 31.7914 30.0681C31.7523 30.5385 31.6846 30.7334 31.6268 30.8448L34.289 32.2277C34.6064 31.6167 34.7264 30.9757 34.7811 30.3164C34.8344 29.675 34.8332 28.8903 34.8332 27.9663H31.8332ZM27.9665 34.833C28.8905 34.833 29.6752 34.8342 30.3165 34.781C30.9759 34.7262 31.6169 34.6062 32.2279 34.2888L30.845 31.6266C30.7335 31.6845 30.5387 31.7522 30.0683 31.7912C29.5799 31.8318 28.9408 31.833 27.9665 31.833V34.833ZM31.6268 30.8448C31.4528 31.1796 31.1798 31.4527 30.845 31.6266L32.2279 34.2888C33.1107 33.8303 33.8304 33.1105 34.289 32.2277L31.6268 30.8448ZM27.9665 8.16634C28.9408 8.16634 29.5799 8.16755 30.0683 8.20811C30.5387 8.24718 30.7335 8.31486 30.845 8.37275L32.2279 5.71051C31.6169 5.39311 30.9759 5.27315 30.3165 5.2184C29.6752 5.16514 28.8905 5.16634 27.9665 5.16634V8.16634ZM34.8332 12.033C34.8332 11.109 34.8344 10.3243 34.7811 9.68297C34.7264 9.02365 34.6064 8.38266 34.289 7.77163L31.6268 9.15456C31.6846 9.26599 31.7523 9.4608 31.7914 9.93125C31.832 10.4197 31.8332 11.0587 31.8332 12.033H34.8332ZM30.845 8.37275C31.1798 8.54669 31.4528 8.81971 31.6268 9.15456L34.289 7.77163C33.8304 6.88886 33.1107 6.16908 32.2279 5.71051L30.845 8.37275ZM20.3665 5.16634C19.4425 5.16634 18.6578 5.16514 18.0165 5.2184C17.3571 5.27315 16.7162 5.39311 16.1051 5.71051L17.4881 8.37275C17.5995 8.31486 17.7943 8.24718 18.2647 8.20811C18.7532 8.16755 19.3922 8.16634 20.3665 8.16634V5.16634ZM16.4998 12.033C16.4998 11.0587 16.501 10.4197 16.5416 9.93125C16.5807 9.4608 16.6484 9.26599 16.7062 9.15456L14.044 7.77163C13.7266 8.38266 13.6066 9.02365 13.5519 9.68297C13.4986 10.3243 13.4998 11.109 13.4998 12.033H16.4998ZM16.1051 5.71051C15.2224 6.16908 14.5026 6.88886 14.044 7.77163L16.7062 9.15456C16.8802 8.81971 17.1532 8.54669 17.4881 8.37275L16.1051 5.71051ZM20.3665 31.833C19.3922 31.833 18.7532 31.8318 18.2647 31.7912C17.7943 31.7522 17.5995 31.6845 17.4881 31.6266L16.1051 34.2888C16.7162 34.6062 17.3571 34.7262 18.0165 34.781C18.6578 34.8342 19.4425 34.833 20.3665 34.833V31.833ZM13.4998 27.9663C13.4998 28.8903 13.4986 29.675 13.5519 30.3164C13.6066 30.9757 13.7266 31.6167 14.044 32.2277L16.7062 30.8448C16.6484 30.7334 16.5807 30.5385 16.5416 30.0681C16.501 29.5797 16.4998 28.9407 16.4998 27.9663H13.4998ZM17.4881 31.6266C17.1532 31.4527 16.8802 31.1796 16.7062 30.8448L14.044 32.2277C14.5026 33.1105 15.2224 33.8303 16.1051 34.2888L17.4881 31.6266ZM23.3332 18.4997L6.6665 18.4997L6.6665 21.4997L23.3332 21.4997L23.3332 18.4997ZM7.72716 21.0603L11.8938 16.8937L9.77251 14.7723L5.60584 18.939L7.72716 21.0603ZM5.60584 21.0603L9.77251 25.227L11.8938 23.1057L7.72716 18.939L5.60584 21.0603Z" fill="currentColor"/>
                        </svg>
                        <span className="ms-3 ">Log Out</span>
                        </a>
                    </li>  
                </ul>
            </div>
        </aside>
    </div>
  )
}
