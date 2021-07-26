import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HistoryTable from './HistoryTable';
import HistoryHeader from './HistoryHeader';
import Pagination from './Pagination';
import { HISTORY_API } from '../../../config';
import { isValidObject } from '../../../utilities/utils';

function History() {
  const [investLog, setInvestLog] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState([]);
  const [currentStatus, setCurrentStatus] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const LIMIT = 10;
    const offset = currentPage - 1;
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    };

    if (currentStatus > 0) {
      fetch(
        `${HISTORY_API}?search=${search}&status=${currentStatus}&offset=${
          offset * LIMIT
        }&limit=${LIMIT}`,
        requestOptions
      )
        .then(res => res.json())
        .then(res => {
          setInvestLog(res);
          makePageArray(Math.ceil(res.count[currentStatus] / LIMIT));
        });
    } else {
      fetch(
        `${HISTORY_API}?search=${search}&offset=${
          offset * LIMIT
        }&limit=${LIMIT}`,
        requestOptions
      )
        .then(res => res.json())
        .then(res => {
          setInvestLog(res);
          makePageArray(Math.ceil(res.count.all / LIMIT));
        });
    }
  }, [currentPage, currentStatus, search]);

  // 검색기능
  const searchChange = e => {
    setSearch(e.target.value);
  };

  // 페이지네이션의 버튼 클릭시 페이지 이동을 위한 setState
  const pageClick = e => {
    setCurrentPage(e.target.id);
  };

  // 페이지네이션을 위한 페이지 배열 만들기
  const makePageArray = pages => {
    let pageArray = [];
    for (let i = 1; i <= pages; i++) {
      pageArray.push(i);
    }
    setTotalPage(pageArray);
  };

  // 투자상태값을 기준으로 필터링하기 위한 setState
  const filterHandler = e => {
    setCurrentStatus(e.target.value);
  };

  return (
    <>
      {isValidObject(investLog) && (
        <HistoryWrapper>
          <div>
            <SearchBar onChange={searchChange}>
              <i class="fas fa-search" />
              <input
                type="text"
                placeholder="상품호수 또는 상품명을 검색해보세요"
              />
            </SearchBar>
            <HistoryMain>
              <HistoryHeader filterHandler={filterHandler} />
              <PaymentSummary>
                {investLog.summary.total > 0
                  ? Object.entries(investLog.summary)
                      .map(([name, value]) => [SUMMARY_NAME[name], value])
                      .map(item => (
                        <li key={item[0]}>
                          <div>
                            <h3>{item[0]}</h3>
                            <span>{item[1].toLocaleString()}원</span>
                          </div>
                        </li>
                      ))
                  : '데이터가 존재하지 않습니다.'}
              </PaymentSummary>
              <HistoryTable investLogItems={investLog.items} />
              <Pagination
                pageClick={pageClick}
                totalPage={totalPage}
                currentPage={currentPage}
              />
            </HistoryMain>
          </div>
        </HistoryWrapper>
      )}
    </>
  );
}

const SUMMARY_NAME = {
  total: '전체',
  paidTotal: '지급완료 원금',
  paidInterest: '지급완료 이자',
};

const HistoryWrapper = styled.div`
  ${({ theme }) => theme.flexMixin};
  flex-direction: column;
  padding-top: 150px;
  background-color: #f4f4f4;
`;

const SearchBar = styled.div`
  ${({ theme }) => theme.flexMixin('flex-end', 'center')};
  position: relative;
  width: 100%;
  margin-top: 20px;

  i {
    position: absolute;
    right: 273px;
    color: grey;
  }

  input {
    width: 300px;
    padding: 15px 10px 15px 33px;
    border: 1px solid #ccc;
  }
`;

const HistoryMain = styled.main`
  ${({ theme }) => theme.flexMixin};
  flex-direction: column;
  width: 60vw;
  margin: 20px 0 80px 0;
  background: white;
`;

const PaymentSummary = styled.ul`
  ${({ theme }) => theme.flexMixin};
  width: 95%;
  padding: 30px 25px;
  margin: 30px 0 40px 0;
  background-color: #fafafa;

  li {
    width: 16vw;
    padding-left: 20px;
    border-left: 1px solid #ccc;
    flex: 1;

    &:first-child {
      border-left: none;
    }
  }

  h3 {
    font-size: 0.8rem;
    padding-bottom: 10px;
    color: #606060;
  }

  span {
    font-size: 1.5rem;
  }
`;

export default History;
