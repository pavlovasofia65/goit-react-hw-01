import css from './Profile.module.css';
export default function Profile({name, tag, location, image, stats:{followers, views, likes}}) {
return (
<div className={css.profile}>
    <div className={css.user}>
        <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            className={css.avatar}
        />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
    </div>

    <ul className={css.stats}>
        <li className={css.statsli}>
            <span>Followers</span>
            <span className={css.number}>{followers}</span>
        </li>
        <li className={css.statsli}>
            <span>Views</span>
            <span className={css.number}>{views}</span>
        </li>
        <li className={css.statsli}>
            <span>Likes</span>
            <span className={css.number}>{likes}</span>
        </li>
    </ul>
    </div>
)
};