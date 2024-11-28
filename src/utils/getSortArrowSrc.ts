import { SortArrowDirection } from "../types/SortArrowDirection.ts";
import { SortField } from "../types/SortFields.ts";
import { SortOption } from "../types/SortOption.ts";

const getSortArrowSrc = (sortArrowDirection: SortArrowDirection, heading: SortField, sortField: SortField, sortOption: SortOption) => {
  let baseURL = process.env.REACT_APP_PRODUCTION_URL;

  if (window.location.href.includes('localhost')) {
    baseURL = process.env.REACT_APP_DEVELOPMENT_URL;

    if (!baseURL) {
      console.error('Could not extract environment variables.')
    }
  }

  let arrowType = `${sortArrowDirection}-arrow`;
  
  // If this is the active column
  if (sortField === heading) {
    if (sortArrowDirection === SortArrowDirection.Up && sortOption === SortOption.Asc) {
      arrowType = `${sortArrowDirection}-arrow-active`;
    } else if (sortArrowDirection === SortArrowDirection.Down && sortOption === SortOption.Desc) {
      arrowType = `${sortArrowDirection}-arrow-active`;
    }
  }
  
  return `${baseURL}/icons/${arrowType}.svg`;
};

export default getSortArrowSrc;