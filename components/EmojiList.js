import React from "react";

const EmojiList = () => {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Emoji</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>😀</td>
            <td>grinning face</td>
          </tr>
          <tr>
            <td>😃</td>
            <td>grinning face with smiley eyes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmojiList;
