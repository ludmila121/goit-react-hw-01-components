import s from './TransactionHistory.module.scss'
import PropTypes from 'prop-types';
import transactions from '../data/transaction.json';


const TransactionHistory = ({items =[]}) => {
   const stats = items.map(el => {
    const { id, type, amount, currency } = el;
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
          return (
              <thead>
                <tr key = {id}>
                  <th>{type}</th> 
                  <th>{amount}</th> 
                  <th>{currency}</th> 
              </tr>
             </thead>
            );
        </tbody>
      </table>
  );
  });
};
    
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