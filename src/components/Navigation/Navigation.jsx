import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <main>
      <ul className="HeaderList">
        <NavLink className="HeaderItem" to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/movies">
          <li className="HeaderItem">Movies</li>
        </NavLink>
      </ul>
    </main>
  );
};