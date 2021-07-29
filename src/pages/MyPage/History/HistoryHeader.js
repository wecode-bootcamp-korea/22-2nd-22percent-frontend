import React from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../../../config';

export default function HistoryHeader({ filterHandler, currentStatus }) {
  const doFetchDownload = () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    };

    fetch(
      `${BASE_URL}/investments/export-investment-history-xlsx`,
      requestOptions
    )
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '22percent.xls';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert('다운로드 실패 ㅠㅠ'));
  };

  return (
    <Header>
      <select name="filter" onChange={filterHandler}>
        {OPTION_LIST.map(option => (
          <option value={option} key={option}>
            {STATUS_NAME[option]}
          </option>
        ))}
      </select>
      <DownloadBtn onClick={doFetchDownload} currentStatus={currentStatus}>
        엑셀파일로 다운받기
        <i className="fas fa-download" />
      </DownloadBtn>
    </Header>
  );
}

const OPTION_LIST = [0, 1, 2, 3, 4, 5, 6, 7];

const STATUS_NAME = {
  0: '전체',
  1: '신청중',
  2: '정상',
  3: '상환지연',
  4: '연체',
  5: '부실',
  6: '정상상환완료',
  7: '부실상환완료',
};

const Header = styled.header`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  width: 100%;
  padding: 40px 20px 10px 30px;

  select {
    font-size: 1.3rem;
    font-weight: 600;
    color: #606060;
    padding-right: 10px;
    width: 150px;
    height: 40px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  i {
    color: #606060;
  }
`;

const DownloadBtn = styled.button`
  padding: 10px;
  background: transparent;
  border: 1px solid #ccc;
  margin-right: 10px;
  cursor: pointer;
  display: ${({ currentStatus }) => (currentStatus === '0' ? 'block' : 'none')};

  i {
    padding-left: 10px;
  }
`;
