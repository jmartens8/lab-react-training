function Rating (props){
    // console.log(props);

    let stars = ""
    let children = Math.round(props.children)

    if (children === 0){
        stars = '☆☆☆☆☆'
    }
    else if (children === 1){
        stars = '★☆☆☆☆'
    }
    else if (children === 2){
        stars = '★★☆☆☆'
    }
    else if (children === 3){
        stars = '★★★☆☆'
    }
    else if (children === 4){
        stars = '★★★★☆'
    }
    else if (children === 5){
        stars = '★★★★★'
    }

    
    return (
        <div className="Container">
            Hallo {stars}
        </div>
    )
}

export default Rating