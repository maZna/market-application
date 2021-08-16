import React from "react";
import PropTypes from "prop-types";
import { PageButton } from "../../styles/index";
import { PaginatorContainer, SlideButton } from "./style";
import {
  CONTINUITY_STRING,
  MAX_PAGINATOR_TABS,
  SIDE_THRESHOLD_ON_EDGE_PAGES,
  SIDE_THRESHOLD_ON_MIDDLE_PAGES,
} from "../../utils/constants";

/**
 * This component allows pagination for lengthy server data lists
 */
function Paginator({ currentPage, totalPages, updatePage }) {
  const generatePaginatorArray = () => {
    let baseArray = [];
    if (totalPages <= MAX_PAGINATOR_TABS) {
      for (let i = 1; i <= totalPages; i++) baseArray.push(String(i));
    } else {
      if (
        currentPage < SIDE_THRESHOLD_ON_EDGE_PAGES ||
        currentPage > totalPages - (SIDE_THRESHOLD_ON_EDGE_PAGES - 1)
      ) {
        for (let i = 1; i <= SIDE_THRESHOLD_ON_EDGE_PAGES; i++)
          baseArray.push(String(i));
        baseArray.push(CONTINUITY_STRING);
        for (
          let i = totalPages - (SIDE_THRESHOLD_ON_EDGE_PAGES - 1);
          i <= totalPages;
          i++
        )
          baseArray.push(String(i));
      } else {
        for (let i = 1; i <= SIDE_THRESHOLD_ON_MIDDLE_PAGES; i++)
          baseArray.push(String(i));
        baseArray.push(
          CONTINUITY_STRING,
          String(currentPage - 1),
          String(currentPage),
          String(currentPage + 1),
          CONTINUITY_STRING
        );
        for (
          let i = totalPages - (SIDE_THRESHOLD_ON_MIDDLE_PAGES - 1);
          i <= totalPages;
          i++
        )
          baseArray.push(String(i));
      }
    }
    return baseArray;
  };

  return (
    <PaginatorContainer>
      <SlideButton
        className={currentPage === 1 ? "first" : null}
        onClick={() => {
          if (currentPage > 1) updatePage(currentPage - 1);
        }}
      >
        🡠&nbsp;&nbsp;&nbsp;Prev
      </SlideButton>
      <div>
        {generatePaginatorArray().map((item, i) => {
          let classes = "";
          if (String(currentPage) === item) classes = classes.concat("active");
          if (item === CONTINUITY_STRING) classes = classes.concat(" dis");
          return (
            <PageButton
              key={i}
              className={classes}
              onClick={() => {
                if (item !== CONTINUITY_STRING) updatePage(Number(item));
              }}
            >
              {item}
            </PageButton>
          );
        })}
      </div>
      <SlideButton
        className={currentPage === totalPages ? "last" : null}
        onClick={() => {
          if (currentPage < totalPages) updatePage(currentPage + 1);
        }}
      >
        Next&nbsp;&nbsp;&nbsp;🡢
      </SlideButton>
    </PaginatorContainer>
  );
}

Paginator.propTypes = {
  /** Current page that user is navigating*/
  currentPage: PropTypes.number,
  /** Total number of available pages*/
  totalPages: PropTypes.number,
  /** Function to select a new page*/
  updatePage: PropTypes.func,
};

export default Paginator;
