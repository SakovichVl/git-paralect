import './styles.css'

const RepositoryItem = ({ repositoryItem }) => {
    const { name, description, html_url } = repositoryItem;

    return (
        <div className="repo-item">
            <a className="repo-url" href={html_url} target="_blank" rel="noreferrer">{name}</a>
            <p className='repo-describe'>{description}</p>
        </div>
    );

}

export default RepositoryItem;