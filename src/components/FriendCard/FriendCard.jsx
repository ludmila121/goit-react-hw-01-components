import PropTypes from "prop-types";
import  s from '../FriendList/FriendList.module.scss';
import {StatusStyled} from '../FriendList/FriendList.styled.js';
i
 const FriendCard = (props) => {
const {statusIsOnline, avatar, name} = props;

return (
    <li className = {s.item}>
        <StatusStyled statusIsOnline={statusIsOnline} ></StatusStyled>
        <img className = {s.avatar} 
        src={avatar} alt="User avatar" width ="48"></img>
        <p className={s.name}>{name}</p>
        </li>
);
};


