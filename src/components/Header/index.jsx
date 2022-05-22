import { useState } from "react";

import gitLogo from "../../assets/images/github.png"

import "./styles.css"

const Header = ({ setUsername }) => {
    const [inputValue, setInputValue] = useState('');
    
    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!inputValue) {
            return;
        }
        
        setUsername(inputValue);
    }

    return (
        <div className="toolbar">
            <a className="github-link" href="https://github.com/" target="_blank" rel="noreferrer">
                <img src={gitLogo} alt="GitHub Icon"/>
            </a>
            <div className="search">
                <form onSubmit={onSubmit} >
                    <input className="input-search" value={inputValue} onChange={onChange} type="text" placeholder="Enter GitHub username" />
                </form>
            </div>
        </div>
    );
    
}

export default Header;