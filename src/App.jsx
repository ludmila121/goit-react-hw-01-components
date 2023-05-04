import './App.css';
import Profile from './components/profile/UserProfile';
import FriendList from  './components/FriendList/FriendList';
import  {ContainerStyled}  from  './components/Container.styled';
import Statistics from './components/Statistics/statistics';
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from './components/data/user.json';
import friends from './components/data/friends.json';
import transaction from './components/data/transaction.json'
export const App = () => {
   return (
   
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
    <FriendList friends={friends} />
    <TransactionHistory items={transaction} />
</ContainerStyled>
  
); 
};
export default App;


