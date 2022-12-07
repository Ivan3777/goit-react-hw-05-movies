import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

export const Nav = () => {
  return (
    <main>
      <ul className={css.header}>
        <NavLink className={css.headerItem.active} to="/">
          <li className={css.item}>Home</li>
        </NavLink>
        <NavLink className={css.headerItem.active} to="/movies">
          <li className={css.item}>Movies</li>
        </NavLink>
      </ul>
    </main>
  );
};