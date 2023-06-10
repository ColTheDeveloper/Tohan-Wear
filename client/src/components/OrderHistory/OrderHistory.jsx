import "./OrderHistory.css"
const OrderHistory=()=>{
    return(
        <div className="OrderHistory">
            <span>Order History</span>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Order Date</th>
                        <th>Order Cost</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>243565</td>
                        <td>Ankara</td>
                        <td>3</td>
                        <td>Oct 20, 2020</td>
                        <td>$400</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>243565</td>
                        <td>Ankara</td>
                        <td>3</td>
                        <td>Oct 20, 2020</td>
                        <td>$400</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>243565</td>
                        <td>Ankara</td>
                        <td>3</td>
                        <td>Oct 20, 2020</td>
                        <td>$400</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>243565</td>
                        <td>Ankara</td>
                        <td>3</td>
                        <td>Oct 20, 2020</td>
                        <td>$400</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>243565</td>
                        <td>Ankara</td>
                        <td>3</td>
                        <td>Oct 20, 2020</td>
                        <td>$400</td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default OrderHistory