import Card from "../Card/Card";
import "./CardList.scss";
import React,{useState} from 'react';


const CardList = (props) => {
  //Create a state of jobs to update the state
  const [jobs, setJobs] = useState(props.datas);

  //This function is create to filter the data based on key and value that has been clicked
  const filterTag = (key, value) => {
    //job is an object i use includes to check if the value exist inside the arrays of this objects
    //i use includes to filter object that has an arrays inside
    console.log(key, value);
    const newJob = props.datas.filter((job)=> job[key].includes(value));
    setJobs(newJob)
  }


  return (
    <ul className="CardList">
      {jobs.map((data) => {
        // const tags = [data.role, data.level, ...data.languages, ...data.tools];
        /*Changing from array to array of object to find out when a click 
        on tag which one it belong to which key of the data.json*/
      const tags = [
          { role: data.role },
          { level: data.level },
          { languages: [...data.languages] },
          { tools: [...data.tools] }
        ];
        
        
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
            filterTag={filterTag}
          />
        );
      })}
    </ul>
  );
};

export default CardList;
