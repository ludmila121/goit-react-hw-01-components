import PropTypes from 'prop-types';
import s from '../FriendCard/FriendCard.module.scss';
import FriendCard from '../FriendCard/FriendCard';


 const FriendList = ({friends}) => {
       return (
        <ul className={s.friendList}>
          {friends.map((el) => {
           return (
             <FriendCard
               key={el.id}
               statusIsOnline={el.isOnline}
               avatar={el.avatar}
               name={el.name}
             />
        );
      })}
    </ul>
       );
    };
FriendList.protoTypes ={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
        })
        ),
    };
    export default FriendList;
