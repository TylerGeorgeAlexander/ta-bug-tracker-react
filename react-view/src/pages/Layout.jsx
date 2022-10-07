import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  let [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setUser(data.message));
  }, []);
  return (
    <>
      <body data-theme="">
        <div class="m-4">
          <header class="container shadow rounded-xl">
            <div class="navbar bg-base-100">
              <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl" href="/profile">
                  Bug Tracker
                </a>
                <button
                  id="theme-toggle"
                  class="btn btn-link btn-sm ml-2 small"
                  type="button"
                >
                  <input type="checkbox" class="toggle" checked />
                </button>
              </div>
              <div class="flex-none gap-2">
                <div class="border-none">
                  <input
                    type="text"
                    placeholder="Search"
                    class="input input-bordered"
                  />
                </div>
                <div>
                  {user ? <span class="m-2">User:{user.userName}</span> : null}
                </div>
                <div class="dropdown dropdown-end">
                  <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                      {user ? (
                        <img src={user.profileImg} alt={user.name} />
                      ) : (
                        <img src="./favicon.ico" alt="Bug Icon" />
                      )}
                    </div>
                  </label>
                  <ul
                    tabindex="0"
                    class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a class="justify-between" href="/profile">
                        Profile
                        <span class="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Settings</a>
                    </li>
                    <li>
                      <a href="/logout">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        </div>
      </body>
      <Link to="Login">Login</Link>

      <Outlet />
    </>
  );
};

export default Layout;
