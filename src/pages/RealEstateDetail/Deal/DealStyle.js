import styled from 'styled-components';

export const ContentHeading = styled.h1`
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 1.27;
  color: #1d2024;
`;

export const SvgImageWrapper = styled.div`
  svg {
    box-sizing: border-box;
    margin-right: 30px;
  }
`;

export const SellingPointContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SellingPointContentTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
  letter-spacing: -0.4px;
  padding-bottom: 10px;
  color: #1d2024;
`;

export const LineChart = styled.div`
  margin-bottom: 20px;
`;

export const ChartArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentBlock = styled.div`
  margin-bottom: 80px;

  ul {
    padding-inline-start: 0;

    li {
      display: flex;
      flex-direction: row;
      margin-bottom: 30px;
      align-items: start;
      align-items: center;
    }
  }
  table {
    table-layout: fixed;
    width: 100%;
    tr {
      th {
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.6px;
        margin-bottom: 7px;
        font-weight: normal;
        color: ${props => props.theme.colorDesc};
        background: #f8f9fa;
      }
      td {
        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
        letter-spacing: -0.4px;
        margin-bottom: 8px;
        color: #4b525a;
      }
      th,
      td {
        padding: 14px 20px;
      }
    }
  }
`;

export const TableLabTh = styled.th`
  box-shadow: inset 0 1px 0 0 #f1f3f5, inset 0 -1px 0 0 #f1f3f5;
`;

export const TableLabTd = styled.td`
  box-shadow: inset 0 1px 0 0 #f1f3f5, inset 0 -1px 0 0 #f1f3f5;
`;

//DealMortgageTempate.css
export const DealMortgageTempate = styled.div`
  display: flex;
  flex: 0 1 240px;
  position: relative;
  margin-right: auto;
`;
export const ChartCenter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

//chart.chart
export const ChartItem = styled.div`
  height: 240px;
  width: 240px;
  position: relative;
`;

export const ExpectedRecoverAmount = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;
  letter-spacing: -0.6px;
  color: #9ca5ad;
  text-align: right;
  margin-top: -12px;
`;

export const Legend = styled.article`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LegendColor = styled.span`
  background-color: rgb(222, 226, 230);
  display: inline-block;
  margin-right: 10px;
  border-radius: 2px;
  width: 14px;
  height: 14px;
`;

//LegendItem.css
export const LegendItem = styled.div`
  flex: 0 1 50%;
  font-size: 24px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3c3c3c;

  .blue {
    background-color: rgb(50, 130, 240);
  }
  .real-grey {
    background-color: rgb(173, 181, 189);
  }
`;

export const Percent = styled.span`
  font-weight: 400;
`;

export const LegendValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.3px;
  color: #495057;
`;

export const LegendLabel = styled.span`
  margin-right: auto;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.71;
  letter-spacing: -0.3px;
  color: #868e96;
`;

export const Map = styled.div`
  .map-area {
    height: 280px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    margin-bottom: 30px;
    border: solid 1px #dee2e6;
  }
`;
