
"use client";

import { useState } from "react";
import NavBar from "./NavBar";

function PageLayout({ children }: { children: React.ReactNode }) {

    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <div
            className={`grid flex-grow min-w-0 grid-cols-1 ${
                menuAbierto
                    ? "md:grid-cols-[25rem_minmax(0,1fr)]"
                    : "md:grid-cols-1"
            }`}
        >

            <NavBar
                menuAbierto={menuAbierto}
                setMenuAbierto={setMenuAbierto}
            />

            <main className="min-w-0">
                {children}
            </main>

        </div>
    );
}

export default PageLayout;
