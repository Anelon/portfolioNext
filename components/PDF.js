import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';

export const pdfDirPath = "/documents/"

export default function PDF(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <>
            <Document
                file={pdfDirPath + props.pdfPath}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                { numPages > 1 ? //if there is more than 1 page show page select
                <div>
                    <p>
                        <button
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                            style={{padding:"5px"}}
                        >
                            <b>&lt;</b>
                        </button>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
                            style={{padding:"5px"}}
                        >
                            <b>&gt;</b>
                        </button>
                    </p>
                </div>
                : null
                }
                <Page pageNumber={pageNumber} />
            </Document>
        </>
    );
}
