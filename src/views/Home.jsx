import React from "react";
import Button from "../components/Button";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/signin");
  };
  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden ">
      <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
        <Link to={"/pokemons/list"}>
          <div className="h-10 w-10 flex items-center justify-center cursor-pointer hover:text-gray-800 hover:bg-white   hover:duration-300 hover:ease-linear focus:bg-white active:bg-white">
            <svg
              id="Famous_Character_Pokemon_24"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              lassName="h-6 w-6 "
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="24"
                stroke="none"
                fill="#fff"
                opacity="0"
              />

              <g transform="matrix(0.83 0 0 0.83 12 12)">
                <g>
                  <g transform="matrix(1 0 0 1 0 0)">
                    <path
                      transform=" translate(-12, -12)"
                      d="M 12 0 C 5.372583002030479 0 0 5.372583002030479 0 12 C 0 18.627416997969522 5.372583002030479 24 12 24 C 18.627416997969522 24 24 18.627416997969522 24 12 C 24 5.372583002030479 18.627416997969522 0 12 0 Z M 12 8 C 14.209138999323173 8 16 9.790861000676825 16 12 C 16 14.209138999323173 14.209138999323175 16 12.000000000000002 16 C 9.790861000676827 16 8 14.209138999323176 8 12.000000000000002 C 8 9.790861000676827 9.790861000676827 8 12 8 Z M 12 22 C 7.084952798826913 22.00275666750103 2.8965768068720514 18.433310731037473 2.1199999999999974 13.58 C 2.0968633439184723 13.43534063827052 2.141055069658827 13.28803488580267 2.2399999999999993 13.18 C 2.330228425593286 13.062231751535386 2.471717872984121 12.995210434350254 2.62 13 L 5.68 13 C 5.909177783656792 12.998828339262635 6.108554248779366 13.156668040818008 6.16 13.38 C 6.798519371193006 16.089262475558186 9.216511155248437 18.003627957273178 12 18.003627957273178 C 14.783488844751563 18.003627957273178 17.201480628806994 16.08926247555819 17.84 13.38 C 17.891445751220633 13.156668040818008 18.09082221634321 12.998828339262635 18.32 13 L 21.38 13 C 21.528282127015878 12.995210434350254 21.669771574406713 13.062231751535386 21.759999999999998 13.18 C 21.85894493034117 13.28803488580267 21.903136656081525 13.43534063827052 21.88 13.58 C 21.103423193127945 18.433310731037473 16.915047201173085 22.002756667501025 11.999999999999998 22 Z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 0 0)">
                    <circle cx="0" cy="0" r="2" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </Link>
      </aside>

      <div className="w-full h-full flex flex-col justify-between">
        <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
          <div className="flex w-full justify-between flex-shrink-0 items-center space-x-4 text-white">
            <div className="flex items-start ">
              <div className="text-md font-medium ">POKEMON</div>
            </div>
            <div className="flex items-center ">
              <div className="text-md font-medium mr-2">Hello, {username}</div>
              <div onClick={logout}>
                <Button text="Logout" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-col max-w-full h-full relative overflow-y-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
