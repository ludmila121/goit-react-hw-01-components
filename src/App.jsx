import './App.css';
import UserProfile from './components/profile/Profile';
import  {ContainerStyled}  from  './components/Container.styled';
import FriendList from  './components/FriendList/FriendList';
import Statistics from './components/Statistics/statistics';
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

export const App = () => {
   return (
  <ContainerStyled>
    <UserProfile />
    <Statistics  title= "Upload stats"/>
    <FriendList  />
    <TransactionHistory />
    </ContainerStyled>

  
  ); 
}
export default App;


