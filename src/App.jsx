import './App.css';
import Profile from './components/profile/UserProfile';
import  {ContainerStyled}  from  './components/Container.styled';
import FriendList from  './components/FriendList/FriendList';
import Statistics from './components/Statistics/statistics';
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from './data/user.json';
import friends from './data/friends.json';
export const App = () => {
   return (
    <>
  <ContainerStyled>
    <Profile 
    key= {user.id}
    userName={user.username}
    tag = {user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    <Statistics  title= "Upload stats"/>
    <FriendList  />
    <TransactionHistory />
    </ContainerStyled>
    </>
); 
}
export default App;


