import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <FriendListItem friends={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}
