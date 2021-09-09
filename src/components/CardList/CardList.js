import { useState } from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  // initialDatas contain a fresh copy of datas
  const initialDatas = props.datas;
  // State datas (datas)
  const [datas, setDatas] = useState(initialDatas);
  // State listTags (array with all the tags/filters selected)
  const [listTags, setListTags] = useState([]);

  // Function to add new filters/tags :
  // 1. it add the tag clicked to the array listTags
  // 2. it filter the array datas and get all the objects that contain all item from array listTags
  // (if the tag clicked already exist in the array then we set a return)
  const addFilter = (e) => {
    let addedTag = e.currentTarget.dataset.tag;

    if (!listTags.includes(addedTag)) {
      setListTags([...listTags, addedTag]);
      setDatas(datas.filter((data) => data.tags.includes(addedTag)));
    } else {
      return;
    }
  };

  // Function to remove filters/tags :
  // 1. it remove the tag clicked from the array listTags
  // 2. it filter the array initialDatas and get all the objects that contain all item from array listTags
  const removeFilter = (e) => {
    let removedTag = e.target.textContent;
    const newArrayOfTags = listTags.filter((tag) => tag !== removedTag);
    setListTags(newArrayOfTags);

    let newArr = initialDatas.filter(
      (item) =>
        item.tags.filter((tag) => newArrayOfTags.indexOf(tag) + 1).length >=
        newArrayOfTags.length
    );
    setDatas(newArr);
  };

  const clearFilter = () => {
    setListTags([]);
    setDatas(initialDatas);
  };

  return (
    <div className="CardList">
      {listTags.length ? (
        <div className="List-Tag">
          <ul>
            {listTags.map((tg, id) => {
              return (
                <li className="tag" key={id} onClick={removeFilter}>
                  <span className="tagname">{tg}</span>
                </li>
              );
            })}
            <li>
              <span className="clear" onClick={clearFilter}>
                Clear
              </span>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
      <ul className="List-Card">
        {datas.map((data) => {
          return (
            <Card
              key={data.id}
              company={data.company}
              logo={data.logo}
              new={data.new}
              featured={data.featured}
              position={data.position}
              location={data.location}
              postedAt={data.postedAt}
              contract={data.contract}
              tags={data.tags}
              handleClick={addFilter}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CardList;
