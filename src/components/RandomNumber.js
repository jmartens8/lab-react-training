function RandomNumber (props){


    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      

    return (
        <div className="Container">
            Random value between {props.min} and {props.max} is {getRandomArbitrary(props.min, props.max)}
        </div>
    )
}

export default RandomNumber