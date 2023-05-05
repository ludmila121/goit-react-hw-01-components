import data from '../data/data.json';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.scss';
import StatisticsCard from './StatisticsCard';



const Statistics = ({title}) => {
    return (
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.statList}>
          {data.map((el) => {
            return (
              <StatisticsCard
                key={el.id}
                label={el.label}
                percentage={el.percentage}
              />
            );
          })}
        </ul>      
      </section>
    );
  };

Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.string.isRequired,
        })
    )
}
export default Statistics;