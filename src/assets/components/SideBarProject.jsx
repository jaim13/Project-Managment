import React, { useState } from 'react';

export default function SideBarProject() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button always visible on smaller screens */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-stone-900 text-stone-50 px-4 py-2 rounded"
        onClick={toggleSidebar}
      >
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 md:w-72 bg-stone-900 text-stone-50 px-8 py-16 rounded-r-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <button className="md:hidden" onClick={toggleSidebar}>
          {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
        <h2 className="text-xl font-semibold mb-4 hidden md:block">Your projects</h2>
        <ul className="hidden md:block">
          {/* Add list items here */}
        </ul>
      </aside>
    </>
  );
}
