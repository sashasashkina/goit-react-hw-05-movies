import { NavLink, Outlet } from 'react-router-dom';

import css from './Layout.module.css';
const MainMenu = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.menu}>
          <li>
            <NavLink className={css.list} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.list} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
export default MainMenu;
