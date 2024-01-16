import './tile.css'
const Tile = (props) => {
    return ( 
        <div id="tile">
            {props.skill}
        </div>
     );
}
 
export default Tile;