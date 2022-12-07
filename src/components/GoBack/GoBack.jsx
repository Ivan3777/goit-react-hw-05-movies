import css from './GoBack.module.css'

export const GoBackButton = ({ onClick }) => {
    return (
      <button className={css.backBtn} type="buton" onClick={onClick}>
        Go back
      </button>
    );
  };