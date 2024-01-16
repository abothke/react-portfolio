import './cardelement.css'

const CardElement = (props) => {
    return ( 
        <div id="card">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <span>{props.highlight}</span>
        </div>
     );
}
 
export default CardElement;