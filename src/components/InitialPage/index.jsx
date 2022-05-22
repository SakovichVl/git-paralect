import initialIcon from "../../assets/icons/initial.png"

import './styles.css'

const InitialPage = () => {
    return(
        <div className='initial-main'>
            <img className='initial-img' src={initialIcon} alt='initialIcon'/>
            <p className='initial-a'> Start with searching <br/> a GitHub user </p>
        </div>
    );
}

export default InitialPage;