import PropTypes from "prop-types";
import  s from '../FriendList/FriendList.module.scss';
import {StatusStyled} from '../FriendList/FriendList.styled';
 
const FriendCard = (props) => {
    const {avatar,name,statusIsOnline}= props;
    return (
    <li className = {s.item}>
        <StatusStyled statusIsOnline={statusIsOnline}></StatusStyled> 
        <img className = {s.avatar} 
        src={avatar} alt="User avatar" width ="48"></img>
        <p className={s.name}>{name}</p>
        </li>
);
};

FriendCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendCard;
