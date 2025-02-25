import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  // =============== Example 1 work hands ===============
  // const clsx = [css.textStatus];

  // isOnline ? clsx.push(css.online) : clsx.push(css.offline);

  // console.log(clsx.join(" "));

  // =============== / Example 1 work hands  ===============

  const statusClsx = clsx(css.textStatus, isOnline ? css.online : css.offline);

  return (
    <>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      {/* <p className={clsx.join(" ")}>{isOnline ? "Online" : "Offline"}</p> */}
      <p className={statusClsx}>{isOnline ? 'Online' : 'Offline'}</p>
    </>
  );
}
