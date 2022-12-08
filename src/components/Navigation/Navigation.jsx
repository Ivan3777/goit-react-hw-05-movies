import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

export const Nav = () => {
  return (
    <main>
      <ul className={css.header}>
        <NavLink className={css.item} to="/">
          <li className={css.active}>Home</li>
        </NavLink>
        <NavLink className={css.item} to="/movies">
          <li className={css.active}>Movies</li>
        </NavLink>
      </ul>
    </main>
  );
};