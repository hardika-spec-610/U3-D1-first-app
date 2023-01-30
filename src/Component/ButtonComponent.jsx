import './componentStyles.css';


const ButtonComponent = ({label})=>{
    return(
        <div> 
            <button type="button"><span> {label}</span></button>
        </div>
    )
}

export default ButtonComponent