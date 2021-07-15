import './style.css';
import NumberFormat from 'react-number-format';
import {Link} from 'react-router-dom';

const Table = (props) => {
    const id = props.id;
    const sym = props.symbol.toUpperCase();

    return ( 
        <div>
            <div className = "lines">
                <table>
                    <tbody>
                        <tr className="tblrow">
                            <td><img src = {props.image} alt = 'xyz' height='50px' width='50px' /></td>
                            <td className="coin">
                                <Link to = {`/currency/${id}`}>{props.name}</Link>
                                <button className = "btn"><a href = {`https://exchange.blockchain.com/trade/${sym}-USD&utm_source=CMC&utm_medium=CMC&utm_campaign=CMCsponsorship`}>BUY</a></button>
                            </td>
                            <td className="coin2">{props.symbol.toUpperCase()}</td>
                            <td>
                            <Link to = {`/currency/${id}`}><NumberFormat 
                                value = {props.price.toFixed(2)}
                                displayType = {'text'}
                                thousandSeparator = {true}
                                prefix={'$'}
                                 />
                            </Link>
                                
                            </td>
                            {
                                props.perc<0 ? (<td className="red">{props.perc.toFixed(2)}%</td>) : (<td className="green">{props.perc.toFixed(2)}%</td>)
                            }
                            <td>
                            <Link to = {`/market/${id}`}>
                                <NumberFormat 
                                value = {props.market}
                                displayType = {'text'}
                                thousandSeparator = {true}
                                prefix={'$'}
                                 />
                            </Link>
                            </td>
                            <td>
                            <Link to = {`/volume/${id}`}>
                                <NumberFormat 
                                value = {props.volume}
                                displayType = {'text'}
                                thousandSeparator = {true}
                                prefix={'$'}
                                 />
                            </Link>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default Table;