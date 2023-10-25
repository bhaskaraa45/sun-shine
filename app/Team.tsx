import { useEffect, useRef } from "react";

const MyComponent = () => {
  const sidebarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;

    if (sidebar) {
      sidebar.style.opacity = "1";
      sidebar.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <div className="relative p-2 lg:p-4 bg-sky-300">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="./homepage/5.jpg"
          alt="Team 2023"
          className="w-full h-auto transition-transform duration-500 transform hover:scale-105"
        />
        <aside
          ref={sidebarRef}
          className="absolute top-0 right-0 w-1/4 lg:w-1/5 h-full flex flex-col justify-center text-xl lg:text-4xl font-bold opacity-0 transition-transform duration-500"
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            transform: "translateY(-100%)",
          }}
        >
          <div className="text-white text-xl lg:text-4xl font-bold mb-10 text-center">
            TEAM
          </div>
          <div className="flex flex-col space-y-2">
            <button className="text-white bg-opacity-60 hover:scale-105 px-2 py-1 text-xs lg:text-sm">
              Faculty
            </button>
            <button className="text-white bg-opacity-60 hover:scale-105 px-2 py-1 text-xs lg:text-sm">
              Management
            </button>
            <button className="text-white bg-opacity-60 hover:scale-105 px-2 py-1 text-xs lg:text-sm">
              Buddies
            </button>
            <button className="text-white bg-opacity-60 hover:scale-105 px-2 py-1 text-xs lg:text-sm">
              Mentors
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MyComponent;
