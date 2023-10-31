
export const FriendList = (friends) => {
    return (
        <ul class="friend-list">
            { friends.map(friend => {
            return (
                <li class="item" key={friend.id}>
                <span class="friend"></span>
                <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
                <p class={friend.name}></p>
              </li>
            )}
        )} 
        </ul>
    )
}