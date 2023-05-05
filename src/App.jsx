import './App.css';
import  {ContainerStyled}  from  './components/container/Container.styled';

import Profile from './components/profile/UserProfile';
import user from './components/data/user.json';

import FriendList from  './components/FriendList/FriendList';
import friends from './components/data/friends.json';
import Statistics from './components/Statistics/statistics';
import data from './components/data/data.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
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
    <Statistics  title= "Upload stats" Statistics={data}/>
    <FriendList title= "FriendList" friends={friends} />
    <TransactionHistory title="TransactionHistory" items={transaction} />
</ContainerStyled>
  
); 
};
export default App;

   

