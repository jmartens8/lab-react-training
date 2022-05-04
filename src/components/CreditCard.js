import masterCard from '../assets/images/visa.png'
import visaCard from '../assets/images/visa.png'

function CreditCard (props) {
    console.log(props)

    function selectCCImage(type){
        if (type === "Visa") {
            console.log('Visa Image')
            return visaCard
        }
        else if (type === "Master Card"){
            console.log('MasterCard Image')
            return masterCard
        }
       
    }
    selectCCImage(props.type)

    return (
        <div className="creditCard" style={{backgroundColor:`${props.bgColor}`}}>
            <div id="ccPicture">
                <img src={() => {selectCCImage(props.type)}} alt="CCimage" />
            </div>

            <div id="ccNumber" style={{color:`${props.color}`}}>
                <h3>**** **** **** {props.number.toString().substr(-4)}</h3>
            </div>

            <div id="ccDetails" style={{color:`${props.color}`}}> 
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
