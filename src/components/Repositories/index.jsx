import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import RepositoryItem from '../RepositoryItem';
import repEmptyIcon from '../../assets/icons/repEmpty.png';
import EmptyState from '../EmptyState';
import Loader from '../Loader';

import * as repositoryResourse from '../../resources/repository/hooks';

import './styles.css'

const itemsPerPage = 4;

const Repositories = ({ username, publicRepos }) => {
    const [selectedPage, setSelectedPage] = useState(1);

    const { isLoading, data: repInfo } = repositoryResourse.useRepository(username, itemsPerPage, selectedPage);

    const onPageClick = (e) => {
        setSelectedPage(e.selected + 1);
    };

    if (isLoading) {
        return <Loader/>;
    }

    if (!repInfo) {
        return (
            <div className='rep-error'>
                <p className='p-error'>Something went wrong</p>
            </div>
        );
    }

    if (repInfo.repositories.length === 0) {
        return(
            <EmptyState iconSrc={repEmptyIcon} message={"Repository list is empty"}/>
        );
    }
    
    return (
        <div className="repositories-main">
            <p className='repo-title'>Repositories ({publicRepos})</p>
            {repInfo.repositories.map((repository) => <RepositoryItem key={repository.id} repositoryItem={repository} />)}
            {publicRepos > itemsPerPage &&
            <div className='paginate-main'>
                <p className='paginate-info'>
                    {selectedPage * itemsPerPage - (itemsPerPage - 1)} 
                    - 
                    {selectedPage * itemsPerPage > publicRepos ? publicRepos : selectedPage * itemsPerPage}
                    {' '}
                    of {Math.ceil(publicRepos)} items
                </p>
                <ReactPaginate
                    className='panel-paginate'
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={onPageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={Math.ceil(publicRepos / itemsPerPage)}
                    previousLabel="<"
                    forcePage={selectedPage-1}
                    renderOnZeroPageCount={null}
                    pageClassName="li-child"
                    pageLinkClassName="a-child"
                    previousClassName="previous-button"
                    nextClassName="next-button"
                    nextLinkClassName="a-next"
                    previousLinkClassName="a-previous"
                />
            </div>}    
        </div>
    );

}

export default Repositories;
