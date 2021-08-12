import "./Card.scss";

const Card = (props) => {
  return (
    <li key={props.id} className="Card">
      <div className="image">
        <img src={props.logo} alt={`${props.company} logo`} />
      </div>
      <div className="content">
        <span className="company">{props.company}</span>
        {props.new && <span className="new">New!</span>}
        {props.featured && <span className="featured">Featured</span>}
        <h2>{props.position}</h2>
        <ul>
          <li>{props.postedAt}</li>
          <li>{props.contract}</li>
          <li>{props.location}</li>
        </ul>
      </div>
      <ul className="tags">
        {props.tags.map((tag, index) => {
          return (
            <li onClick={props.handleClick} key={index} data-tag={tag}>
              {tag}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Card;
