import user from '../data/user.json';
import UserCard from  './UserProfile';

const Profile = () => {
  return (
    <UserCard
      key= {user.id}
      userName={user.username}
      tag = {user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
export default Profile;
