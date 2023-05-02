import PropTypes from 'prop-types';
import s from './Profile.module.scss';

const Profile = ({userName, tag, location, avatar, stats}) => {
        return (
          <div className={s.profile}>
          <div className={s.description}>
          <img
          src={avatar}
          alt="User avatar"
          className={s.avatar}
        />
        <p className={s.name}>{userName}</p>
        <p className={s.tag}>@{tag}</p>
        <p className="location">{location}</p>
      </div>
    
      <ul className={s.stats}>
        <li className={s.stats.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.stats.item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.stats.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username:PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.share({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
export default Profile;