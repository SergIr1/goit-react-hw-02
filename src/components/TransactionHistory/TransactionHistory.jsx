import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
        <div className={css.container}>
    <table className={css.wrapper}>
        <thead>
            <tr>
                <th className={css.titleWrap}>Type</th>
                <th className={css.titleWrap}>Amount</th>
                <th className={css.titleWrap}>Currency</th>
            </tr>
       </thead>
    
    
        { items.map(({ type, amount, currency, id }) => 
             (
                <tbody key={id}>
                    <tr className={css.rowWrap}>
                        <td className={css.textWrap}>{type}</td>
                        <td className={css.textWrap}>{amount}</td>
                        <td className={css.textWrap}>{currency}</td>
                    </tr>
                </tbody>
        ))}
    </table>
        </div>
    )}