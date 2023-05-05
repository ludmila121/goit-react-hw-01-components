import s from './TransactionHistory.module.scss'
import PropTypes from 'prop-types';


const TransactionHistory = ({items}) => {
    return (
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        
        <tbody>
          {items.map((transactions) => { 
            return( 
                <tr> 
                  <td>{transactions.type}</td> 
                  <td>{transactions.amount}</td> 
                  <td>{transactions.currency}</td> 
                </tr>
               );
             })}
            </tbody>
      </table>
);
}

    
   TransactionHistory.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.isRequired,
            amount: PropTypes.isRequired,
            currency: PropTypes.isRequired,
        }).isRequired
    ),
};

export default TransactionHistory;