import './style.css';

const Header = () => {
    return ( 
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Sign</th>
                        <th className="coin">Name</th>
                        <th className="coin2">Symbol</th>
                        <th>Price</th>
                        <th>24h%</th>
                        <th>Market Cap</th>
                        <th>Volume(24h)</th>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default Header;