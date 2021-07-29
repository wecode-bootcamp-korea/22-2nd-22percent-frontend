import React from 'react';
import styled from 'styled-components';

export default function Pagination({ pageClick, totalPage, currentPage }) {
  let slicedArray = [];
  const pagination = arr => {
    for (let i = 0; i < arr.length; i += 10) {
      slicedArray.push(arr.slice(i, i + 10));
    }
    return slicedArray;
  };

  return (
    <PageWrapper>
      <PageListBox>
        <PageBtn>
          <i className="fas fa-arrow-left"></i>
        </PageBtn>
        <Prev>
          <i className="fas fa-chevron-left"></i>
        </Prev>
      </PageListBox>
      <PageListBox>
        {pagination(totalPage)[Math.floor(currentPage / 10)].map(page => (
          <PageBtn id={page} key={page} onClick={pageClick}>
            {page}
          </PageBtn>
        ))}
      </PageListBox>

      <PageListBox>
        <Next>
          <i className="fas fa-chevron-right"></i>
        </Next>
        <PageBtn>
          <i className="fas fa-arrow-right"></i>
        </PageBtn>
      </PageListBox>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  margin: 20px 0 30px 0;
`;

const PageListBox = styled.ul`
  ${({ theme }) => theme.flexMixin('center', 'center')};
`;

const PageBtn = styled.li`
  width: 40px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-right: none;
  color: #ccc;
  text-align: center;
  cursor: pointer;

  &:last-child {
    border-right: 1px solid #ccc;
  }

  &:hover {
    border: 1px solid black;
    color: black;
  }
`;

const Prev = styled(PageBtn)`
  margin-right: 40px;
  border-right: 1px solid #ccc;
`;

const Next = styled(PageBtn)`
  margin-left: 40px;
`;
