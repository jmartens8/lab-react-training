function BoxColor (props) {


    let divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
      };

    return (
        <div className="Container" style={divStyle}>
            <p>rgb {props.r},{props.g},{props.b}</p>  
        </div>
    )
}

export default BoxColor