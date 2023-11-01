import css from './Profile.module.css'

export const Profile = ({username, tag, location, avatar, stats}) => {

    return (
        <div className={css.profile}>
        <div className={css.description}>
          <img
            src={avatar}
            alt={username}
            className={css.avatar}
          />
          <p>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      
        <ul className={css.stats}>
          <li className={css.item}>
            <span>Followers </span>
            <span>{stats.followers}</span>
          </li>
          <li className={css.item}>
            <span>Views </span>
            <span>{stats.views}</span>
          </li>
          <li className={css.item}>
            <span>Likes </span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    )

}