function DriverCard (props){
    console.log(props);

    let stars = ""
    let rating = Math.round(props.rating)

    if (rating === 0){
        stars = '☆☆☆☆☆'
    }
    else if (rating === 1){
        stars = '★☆☆☆☆'
    }
    else if (rating === 2){
        stars = '★★☆☆☆'
    }
    else if (rating === 3){
        stars = '★★★☆☆'
    }
    else if (rating === 4){
        stars = '★★★★☆'
    }
    else if (rating === 5){
        stars = '★★★★★'
    }

    return (
        <div className="driverCard">
            <div id="image">
                <img src={props.img} alt="driver" />
            </div>
            <div id="text">
                <h2>{props.name}</h2>
                <h2>{stars}</h2>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard