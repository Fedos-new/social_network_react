import React, {useState} from 'react';
import style from "./Paginator.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={style.wrapPagination}>
        {portionNumber > 1
        && <button
            onClick={() => {setPortionNumber(portionNumber - 1)}}
            className={style.btnShift}
        >
            <FontAwesomeIcon icon={faChevronLeft} className={style.iconShift} />
        </button>
        }

        {pages
            .filter(p => (p >= leftPortionPageNumber && p <= rightPortionPageNumber))
            .map((p, i) => {
                return <span key={i}
                             className={`${currentPage === p ? style.selectedPage : style.noSelectedPage}`}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}

        {portionNumber < portionCount
        && <button
            onClick={() => {setPortionNumber(portionNumber + 1)}}
            className={style.btnShift}
        >
            <FontAwesomeIcon icon={faChevronRight} className={style.iconShift}/>
        </button>
        }
    </div>
}

export default Paginator;

