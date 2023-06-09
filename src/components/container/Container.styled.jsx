
import s from './container.module.scss';
import PropTypes from 'prop-types';

export const ContainerStyled = ({ title, children }) => {
    return (
      <section className={s.container}>
        <h2 className={s.title}>{title}</h2>
        {children}
      </section>
    );
  };
  
  ContainerStyled.protoType = {
    title: PropTypes.string.isRequired,
  };

 
