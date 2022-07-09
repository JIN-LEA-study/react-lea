import styled from 'styled-components';
import { useState, useEffect } from 'react';
import getWallPapers from './api/getWallPapers';

import ToggleThemeButton from './component/ToggleThemeButton';
import Hero from './component/Hero';
import ResultContainer from './component/ResultContainer';
import Footer from './component/Footer';
import './App.css';

const Container = styled.div`
    position: relative;
    background-color: var(--primary);
    min-height: 100vh;
`;

function App() {
    const [data, setData] = useState({});
    const [query, setQuery] = useState('');
    const [order, setOrder] = useState('populer');
    const [orientation, setOrientation] = useState('all');
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(20);

    // ceil로 올림처리를 해서 정수가 나오도록
    const numOfPage = data.totalHits ? Math.ceil(data.totalHits / perPage) : 0;

    // useEffect 내부에서 데이터를 fatch하고, fatch한 데이터를 상태저장

    useEffect(() => {
        const fetch = async () => {
            const data = await getWallPapers({
                q: query,
                orientation: orientation,
                order: order,
                page: page,
                per_page: perPage,
            });
            setData(data);
        };
        fetch();
        // query가 update될 때마다 요청함
    }, [query, orientation, order, page, perPage]);

    return (
        <>
            <Container>
                <Hero
                    setQuery={setQuery}
                    setOrder={setOrder}
                    setOrientation={setOrientation}
                    setPerPage={setPerPage}
                />
                <ResultContainer
                    data={data}
                    page={page}
                    setPage={setPage}
                    numOfPage={numOfPage}
                />
                <Footer />
                <ToggleThemeButton />
            </Container>
        </>
    );
}

export default App;
