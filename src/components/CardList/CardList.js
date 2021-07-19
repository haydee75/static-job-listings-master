import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  return (
    <ul className="CardList">
      {props.datas.map((data) => {
        const tags = [data.role, data.level, ...data.languages, ...data.tools];
        return (
          <Card
            key={data.id}
            company={data.company}
            logo={data.logo}
            new={data.new}
            featured={data.featured}
            position={data.position}
            postedAt={data.postedAt}
            contract={data.contract}
            tags={tags}
          />
        );
      })}
    </ul>
  );
};

export default CardList;
