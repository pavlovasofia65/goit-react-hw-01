import clsx from 'clsx';
import css from './FriendListItem.module.css';
export default function FriendListItem({avatar, name, isOnline}) {
    let status;
    if (isOnline) {
        status = "Online";
    } else {
        status = "Offline";
    }
    return (
        <div className={css.friend}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={clsx(css.status, {
                [css.online] : isOnline,
            })}>{status}</p>
    </div>
    )
}