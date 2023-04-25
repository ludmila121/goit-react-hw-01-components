import FriendCard from "./FriendCart";
import friends from "./friends.json";
import s from './FriendList.scss';

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