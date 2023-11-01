import css from "./Statistics.module.css"

export const Statistics = ({title , stats}) => {
  return (   
    <section className={css.statistics}>
    {title && <h2>{title}</h2>}
  
    <ul className={css.statList}>
        {stats.map(item => {
            return (
        <li className={css.item} key={item.id}>
            <span >{item.label} </span>
            <span >{item.percentage}%</span>
        </li>
            )}
        )}  
    </ul>
  </section>)

}