import right from '../rightarrow.svg';
import left from '../leftarrow.svg';

function Pagination(props) {
    const { display, totalPage, page, previousPage, nextPage, setPage } = props;
  
    const elements = [];
    for(let i=0; i<totalPage; i++){
      // push the component to elements!
      elements.push(
        <div
          className="pages"
          key={i}
          value={i+1}
          style={{
            backgroundColor: page === i ? 'rgb(0 212 243)' : '',
            padding: '5px 5px',
            borderLeft: i === 0 ? '2px solid black' : '',
            borderRight: i === 0 ? '2px solid black' : '',
          }}
          onClick={() => setPage(i)}
        >
          {i+1}
        </div>
      );
    }

    return totalPage > 0 && display ? (
      <div className="pagination" >
        {
          page > 0 ? 
          <div
            onClick={previousPage}
          >
            <img src={left} className="prev" alt="Previous Page" />
          </div> : null
        }
        {elements}
        {
          page < (totalPage - 1) ?
          <div onClick={nextPage} className="next">
            <img src={right} className="" alt="Next Page" />
          </div> : null
        }
      </div>
    ) : null;
  }

export default Pagination;
