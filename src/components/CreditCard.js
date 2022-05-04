// import masterCard from '../assets/images/master-card.svg'
// import visaCard from '../assets/images/visa.png'

function CreditCard (props) {
    console.log(props)
    let image;
    function selectCCImage(type){
        if (type === "Visa") {
            console.log('Visa Image')
            image = '../assets/images/visa.png'
        }
        else if (type === "Master Card"){
            console.log('MasterCard Image')
            image = '../assets/images/master-card.svg'
        }
       
    }
    selectCCImage(props.type)

    return (
        <div className="creditCard" style={{backgroundColor:`${props.bgColor}`}}>
            <div id="ccPicture">
                <img src={image} alt="CCimage" />
            </div>

            <div id="ccNumber">
                <h3>**** **** **** {props.number.toString().substr(-4)}</h3>
            </div>

            <div id="ccDetails"> 
                <div id="ccDetailsExp">
                    <p>Expires {props.expirationMonth.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}/{props.expirationYear.toString().substr(-2)}</p>
                    <p>{props.bank}</p>
                </div>
                <div>
                    <p>{props.owner}</p>
                </div>
            </div>

        </div>
    )
}

export default CreditCard
// () => selectCCImage(props.type)