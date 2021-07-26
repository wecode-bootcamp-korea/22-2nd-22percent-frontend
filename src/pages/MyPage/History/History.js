import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HistoryTable from './HistoryTable';
import HistoryHeader from './HistoryHeader';
import PaymentSummaryList from './PaymentSummaryList';

function History() {
  const [investLog, setInvestLog] = useState([]);
  const [search, setSearch] = useState('');
  const [filterValue, setFilterValue] = useState('전체');

  useEffect(() => {
    fetch('/data/history.json')
      .then(res => res.json())
      .then(res => setInvestLog(res.results));
  }, []);

  const filterHandler = e => {
    setFilterValue(e.target.value);
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredList = investLog.filter(product => {
    return (
      product.item.includes(search) &&
      (filterValue !== '전체' ? product.status === filterValue : product.status)
    );
  });

  return (
    <HistoryWrapper>
      <div>
        <SearchBar onChange={handleChange}>
          <i class="fas fa-search" />
          <input
            type="text"
            placeholder="상품호수 또는 상품명을 검색해보세요"
          />
        </SearchBar>
        <HistoryMain>
          <HistoryHeader filterHandler={filterHandler} />
          <PaymentSummary>
            {paymentList.map((log, idx) => (
              <PaymentSummaryList
                filteredList={filteredList}
                title={log.title}
                item={log.item}
                key={idx}
              />
            ))}
          </PaymentSummary>
          <HistoryTable filteredList={filteredList} />
        </HistoryMain>
      </div>
    </HistoryWrapper>
  );
}

const paymentList = [
  { title: '투자금액', item: 'invest' },
  { title: '지급완료 원금', item: 'principal' },
  { title: '지급완료 이자', item: 'interest' },
];

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
