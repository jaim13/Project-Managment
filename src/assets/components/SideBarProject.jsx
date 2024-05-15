import React from 'react';

export default function SideBarProject() {
    return (
        <aside className="float-left w-1/4 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl"> 
            <h2 className="">Your projects</h2>
            <div>
                <button>+ Add Project</button>
            </div>
            <ul></ul>
        </aside>
    );
}
