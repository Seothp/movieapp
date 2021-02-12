import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';

import { PaginationButtons } from '../pagination-buttons/pagination-buttons';

import { List } from '../list/list'
import { TMD_Api } from '../../api'
import { MIN_PAGE } from '../../constants'

const API = new TMD_Api()
export const MoviesList = () => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState([1]);
    useEffect(() => {
        API.fetchMovies(page)
            .then(res => {
                setList(res.results);
                setMaxPage(res.total_pages);
            })
        scrollToTop()
    }, [page])
    const nextPage = () => {
        if (page < maxPage) {
            setPage(page + 1)
        }
    }
    const backPage = () => {
        if (page > MIN_PAGE) {
            setPage(page - 1)
        }
    }
    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    let isEmpty = list.length === 0;
    return (
        <>
            {isEmpty &&
                <CircularProgress style={{ display: 'block', margin: '0 auto' }} />
            }
            {!isEmpty &&
                <>
                    <PaginationButtons
                        currentPage={page}
                        maxPage={maxPage}
                        nextPage={nextPage}
                        backPage={backPage}
                    />
                    <List type='movie' list={list} />
                    <PaginationButtons
                        currentPage={page}
                        maxPage={maxPage}
                        nextPage={nextPage}
                        backPage={backPage}
                    />
                </>
            }
        </>
    )
}