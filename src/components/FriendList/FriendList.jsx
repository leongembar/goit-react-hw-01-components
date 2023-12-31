import css from './FriendList.module.css'

export const FriendList = ({friends}) => {
    

    return (
        <ul className={css.friendList}>

            

            {friends.map(friend => {
                const onlineBg = friend.isOnline ? 'green' : 'red';

                const friendStyles = {
                backgroundColor: onlineBg,
                };
            return (
                

                <li className={css.item} key={friend.id}>
                <span className={css.friend} style={friendStyles} ></span>
                <img  src={friend.avatar} alt={friend.name} width="48" />
                <p >{friend.name}</p>
              </li>
            )}
        )} 
        </ul>
    )
}