import './button.css'

const Button = (props) => {
    return ( 
        <>
        <a href={props.section}><button>{props.title}</button></a>
        </>
     );
}
 
export default Button;