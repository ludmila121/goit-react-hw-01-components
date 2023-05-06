import styled from 'styled-components';

 export  const StatusStyled = styled.span`
  width: 5px;
  height: 5px;
  border-radius:50%;
  padding: 5px; 
  margin-left:10px;
  margin-right: 10px;
  font-size: 1px;
  background-color: ${(props) => (props.statusIsOnline ? "green" : "tomato")};
`;
