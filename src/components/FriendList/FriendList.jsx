import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({friends}) {
    return (
        <ul className={css.friendList}>
            {friends.map(({id, isOnline, name, avatar})=> 
                <FriendListItem key={id} isOnline={isOnline} name={name} avatar={avatar}></FriendListItem>
            )}
</ul>
    )
}
    
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}