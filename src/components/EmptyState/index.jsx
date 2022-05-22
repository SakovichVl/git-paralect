import "./styles.css";

const EmptyState = ({ iconSrc, message}) => {
    return (
       <div className="empty-main">
            <div className="empty-message">
                <img src={iconSrc} alt="empty icon"></img>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default EmptyState;