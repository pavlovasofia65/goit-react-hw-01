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
            {avatar ? (
                <img src={avatar} alt={name} width="48" />
            ) : (
                <img src="/goit-react-hw-01/public/default-avatar.jpg" alt="Default Avatar" width="48" />
            )}
            <p>{name}</p>
            <p className={clsx(css.status, {
                [css.online] : isOnline,
            })}>{status}</p>
    </div>
    )
}