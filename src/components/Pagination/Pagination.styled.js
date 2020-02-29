import styled from "styled-components"

export const Wrapper = styled.section`
  margin: 50px 0;
  text-align: center;
  .pagination {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    overflow: hidden;
    .rc-pagination-prev,
    .rc-pagination-next {
      line-height: 55px;
      background: #0c7b93;
    }
    .rc-pagination-disabled {
      background: #ccc;
    }
    li {
      background-color: #364f6b;
      cursor: pointer;
      display: block;
      width: 60px;
      height: 50px;
      line-height: 48px;
      text-align: center;
      font-size: 2.2rem;
      color: #eee;
      padding: 2px;
      outline: 0;
      transition: 0.3s ease all;
      &.rc-pagination-item-active {
        background-color: #00a8cc;
      }
    }
  }
`
