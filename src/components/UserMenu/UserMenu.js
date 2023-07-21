import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import 'boxicons';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user}</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.logOutBtn}
      >
        <box-icon name="log-out"></box-icon>
      </button>
    </div>
  );
};
