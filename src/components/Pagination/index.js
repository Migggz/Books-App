import React from "react"
import { Wrapper } from "./Pagination.styled"
import RCPagination from "rc-pagination"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

export default function Pagination({ onPageChange, itemsCount, itemsPerPage }) {
  return (
    <Wrapper>
      <RCPagination
        className="pagination"
        hideOnSinglePage={true}
        total={itemsCount}
        pageSize={itemsPerPage}
        onChange={onPageChange}
        showTitle={false}
        showPrevNextJumpers={false}
        prevIcon={<FaAngleLeft />}
        nextIcon={<FaAngleRight />}
      />
    </Wrapper>
  )
}
