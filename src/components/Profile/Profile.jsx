import css from "./Profile.module.css"

export default function Profile({ profile: { username, tag, location, avatar, stats: { followers, views, likes } } }) {
  // console.log(props)
  return (
    <div className={css.container}>
      <div className={css.generalWrap}>
  <div className={css.wrapper}>
    <img className={css.img}
      src={avatar}
      alt={username}
    />
        <p className={css.titleName}>{username}</p>
        <p className={css.textInfo}>@{tag}</p>
        <p className={css.textInfo}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
          <span className={css.text}>Followers</span>
          <span className={css.countDate}>{followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.text}>Views</span>
      <span className={css.countDate}>{views}</span>
    </li>
    <li className={css.item}>
      <span className={css.text}>Likes</span>
      <span className={css.countDate}>{likes}</span>
    </li>
        </ul>
        </div>
</div>
  );
};