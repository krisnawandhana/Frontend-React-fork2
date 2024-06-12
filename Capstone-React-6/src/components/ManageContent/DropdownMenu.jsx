import React, { useState } from 'react';

const DropdownMenu = ({ onMenuSelect, selectedMenu, className, buttonClassName, menuClassName, itemClassName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menus = ['Musik Meditasi', 'Artikel Meditasi', 'Cerita Inspiratif'];

    const handleMenuClick = (menu) => {
        onMenuSelect(menu);
        setIsOpen(false);
    };

    return (
        <div className={`relative inline-block text-left ${className}`}>
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex justify-center items-center ${buttonClassName}`}
                >
                    <div className="text-white text-xl font-semibold text-left">
                        {selectedMenu}
                    </div>
                    <div className="bg-[#F1F5F9] opacity-50 p-1 rounded-full">
                        <img src="../../../public/Content/dropdown.svg" alt="" />
                    </div>
                </button>
            </div>
            {isOpen && (
                <div className={`absolute ${menuClassName}`}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {menus.map(menu => (
                            <button
                                key={menu}
                                onClick={() => handleMenuClick(menu)}
                                className={`block px-4 py-2 text-sm w-full text-left ${itemClassName}`}
                            >
                                {menu}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
