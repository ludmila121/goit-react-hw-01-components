import PropTypes from 'prop-types';
import s from '../FriendCard/FriendCard.module.scss';

export  const FriendList = ({friends= [] }) => {
     const FriendCard = (friends.map(el => {
        const {id, avatar, name, isOnline} = el;
       return (
        <li className={s.item} key={id} id= {id}>
        <span className={isOnline ? s.online : s.offline}></span>
        <img className = {avatar} 
        src={avatar} alt="User avatar" width ="48"></img>
        <p className={s.name}>{name}</p>
    </li>
);
}))
return <ul className={s.FriendCard}>{FriendCard}</ul>;
};
FriendList.protoTypes ={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            statusInOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
        ),
    };
    export default FriendList;
