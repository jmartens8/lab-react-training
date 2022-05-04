function IdCard(props) {
    
    return (
    <div className="Container">
        <img src={props.picture} alt="Profile" />
        <table>
            <tbody>
                <tr>
                    <th>First name:</th>
                    <td>{props.firstName}</td> 
                </tr>
                <tr>
                    <th>Last name:</th>
                    <td>{props.lastName}</td> 
                </tr>
                <tr>
                    <th>Gender:</th>
                    <td>{props.gender}</td> 
                </tr>
                <tr>
                    <th>Height:</th>
                    <td>{props.height}</td> 
                </tr>
                <tr>
                    <th>Birth:</th>
                    <td>{props.birth.getYear()}</td> 
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default IdCard