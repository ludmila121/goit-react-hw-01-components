import data from "./data.json";
import StatisticsCard from "./StatisticsCard";
import s from '..Statistics.module.scss'

const Statistics = ({title}) => {
   return (
    <section className ={s.statistics}>
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
   ) ;
};
export default Statistics;