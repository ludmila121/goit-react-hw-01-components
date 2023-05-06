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
          {items.map((item) => { 
            return( 
                <tr> 
                  <td>{item.type}</td> 
                  <td>{item.amount}</td> 
                  <td>{item.currency}</td> 
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
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ),
};

export default TransactionHistory;