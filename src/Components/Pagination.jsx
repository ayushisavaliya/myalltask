import React from 'react';
import PropTypes from 'prop-types';

function returnPaginationRange(totalPages, currentPage, limit, siblings) {
    const totalVisible = 1 + siblings * 2; // Current page + siblings on both sides
    let start = Math.max(1, currentPage - siblings);
    let end = Math.min(totalPages, currentPage + siblings);

    if (end - start < totalVisible - 1) {
        if (start === 1) {
            end = Math.min(totalPages, start + totalVisible - 1);
        } else {
            start = Math.max(1, end - totalVisible + 1);
        }
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function Pagination({ totalPage, page, limit, siblings, onPageChange }) {
    let array = returnPaginationRange(totalPage, page, limit, siblings);

    return (
        <ul className="pagination justify-content-center">
            <li className="page-item">
                <span onClick={() => onPageChange('&laquo;')} className="page-link">&laquo;</span>
            </li>
            <li className="page-item">
                <span onClick={() => onPageChange('&lsaquo;')} className="page-link">&lsaquo;</span>
            </li>
            {array.map(value => (
                <li key={value} className={`page-item ${value === page ? 'active' : ''}`}>
                    <span onClick={() => onPageChange(value)} className="page-link">{value}</span>
                </li>
            ))}
            <li className="page-item">
                <span onClick={() => onPageChange('&rsaquo;')} className="page-link">&rsaquo;</span>
            </li>
            <li className="page-item">
                <span onClick={() => onPageChange('&raquo;')} className="page-link">&raquo;</span>
            </li>
        </ul>
    );
}

Pagination.propTypes = {
    totalPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    siblings: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

