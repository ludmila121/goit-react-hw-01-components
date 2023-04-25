import PropTypes from "prop-types";
import  s from "./FriendList.scss";
import {StatusStyled} from '.FriendList.styled.js';

const FriendCard = (props) => {
const {statusInOnline, avatar, userName} = props;

return (
    <li className = {css.item}><StatusStyled statusInOnline={statusInOnline}></StatusStyled><img className = {s.avatar} src={avatar} alt="User avatar" width ="48" /><p className={s.name}>{userName}</p></li>
);
};

FriendCard.propTypes = {
    statusIsOnline: propTypes.bool,
    avatar: propTypes.string,
    name: PropTypes.string,
};
export default FriendCard;