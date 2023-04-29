import FriendCard from "../FriendCard/FriendCard";
import friends from 'data/friends.json';
import s from '../FriendCard/FriendCard.module.scss';

const FriendList = () => {
    return (
        <ul className={s.friendList}>{friends.map((el)=> { 
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
export default FriendList;