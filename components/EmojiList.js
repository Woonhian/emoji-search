import { useState, useEffect } from "react";
import axios from "axios";
import Paginate from "./Paginate";
import EmojiSearch from "./EmojiSearch";

const EmojiList = () => {
  const [emojis, setEmojis] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [emojisPerPage, setEmojisPerPage] = useState(100);
  const indexOfLastEmoji = currentPage * emojisPerPage;
  const indexOfFirstEmoji = indexOfLastEmoji - emojisPerPage;

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEmojis = async () => {
      setIsLoading(true);
      const results = await axios("https://emoji-api.com/emojis", {
        params: {
          access_key: "a2a50e310b303bd202ff4c8e1ae7bdb6ffa5a5a2",
        },
      });
      setEmojis(results.data);
      setIsLoading(false);
    };
    fetchEmojis();
  }, []);

  const pageSelected = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const updateSearchEmojis = () => {
    const filteredEmojis = emojis.filter((el) => {
      return el.unicodeName.toLowerCase().includes(searchTerm);
    });
    return filteredEmojis.slice(indexOfFirstEmoji, indexOfLastEmoji);
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <EmojiSearch setSearchTerm={setSearchTerm} />
      <Paginate
        pageSelected={pageSelected}
        currentPage={currentPage}
        emojisPerPage={emojisPerPage}
        totalEmojis={emojis.length}
      />
      <table className="table table-hover">
        <thead>
          <tr>
            <th width="20%">Emoji</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {updateSearchEmojis().map((el, key) => {
            return (
              <tr key={key}>
                <td>{el.character}</td>
                <td>{el.unicodeName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmojiList;
