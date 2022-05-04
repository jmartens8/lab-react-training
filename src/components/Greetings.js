function Greetings (props){

    switch (props.language){
        case "de":
            return (
                <div className="Container">
                    Hallo {props.name}
                </div>
            )
        case "fr":
            return (
                <div className="Container">
                    Bonjour {props.name}
                </div>
            )
        case "es":
            return (
                <div className="Container">
                    Hola {props.name}
                </div>
            )
        default:
    }
}

export default Greetings