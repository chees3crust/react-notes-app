import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="flex h-screen w-16 flex-col border-e bg-white">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-black font-bold">
              Noted
            </span>
          </div>
        </div>
        <div className="border-t border-gray-100">
          <div className="px-2">
            <div className="py-4">
              <a
                href="#"
                className="t group relative flex justify-center rounded-full bg-black px-2 py-1.5 text-white "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  Create
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
