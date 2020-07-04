const Paginate = (props) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(props.totalEmojis / props.emojisPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, key) => {
          let classes = "page-item ";
          if (number === props.currentPage) {
            classes += "active";
          }
          return (
            <li className={classes} key={key}>
              <a
                onClick={() => props.pageSelected(number)}
                href="#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginate;
