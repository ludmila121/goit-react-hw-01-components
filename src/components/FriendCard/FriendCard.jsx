import PropTypes from "prop-types";
import  s from '../FriendList/FriendList.scss';
import {StatusStyled} from '../FriendList/FriendList.styled.js';

const FriendCard = (props) => {
const {statusInOnline, avatar, userName} = props;

return (
    <li className = {s.item}><StatusStyled statusInOnline={statusInOnline}></StatusStyled><img className = {s.avatar} src={avatar} alt="User avatar" width ="48" /><p className={s.name}>{userName}</p></li>
);
};

FriendCard.propTypes = {
    statusIsOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
};
export default FriendCard;