import styled from 'styled-components';
import ImageCard from './ImageCard';
import ImageModal from './ImageModal';
import Pagination from './Pagination';
import EmptyResult from './EmptyResult';
import { useState } from 'react';

const Container = styled.div`
    max-width: 1830px;
    margin: 8px auto;
    padding-right: 8px;
`;

const ResultsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

const ResultContainer = ({ data, page, setPage, numOfPage }) => {
    const [currentImgDetail, setCurrentImgDetail] = useState(null);
    return (
        <Container>
            <ImageModal currentImgDetail={currentImgDetail} />
            {data.hits?.length > 0 && (
                <Pagination
                    page={page}
                    setPage={setPage}
                    numOfPage={numOfPage}
                />
            )}
            <ResultsWrapper>
                {data.hits?.length > 0 ? (
                    data.hits?.map((imgData) => (
                        <ImageCard
                            key={imgData.id}
                            imgData={imgData}
                            onClick={() => setCurrentImgDetail(imgData)}
                        />
                    ))
                ) : (
                    <EmptyResult />
                )}
            </ResultsWrapper>
        </Container>
    );
};

export default ResultContainer;
