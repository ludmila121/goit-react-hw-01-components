import ProtoTypes from "prop-types";
import s from './Statistics.module.scss';


const StatisticsCard = (props) => {
    const { label, percentage } = props;
  
    return (
      <li className={s.item}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </li>
    );
  };
  StatisticsCard.protoTypes = {
    label: ProtoTypes.string,
    percentage: ProtoTypes.string,
  };
export default StatisticsCard;