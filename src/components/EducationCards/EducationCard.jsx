import React from "react";
import S from "./style.module.scss";

function EducationCard({data}) {
  return (
    <div
      className={S.EduContainer}
      style={{
        direction: data.direction,
      }}
    >
      <h1 className={S.Title}>{data.education}</h1>
      <p className={S.School}>{data.school}</p>
      <div className={S.Description_container}>
        <ul className={S.DescriptionList}>
          {data.descriptions.map((item) => {
            return <li> {item} </li>;
          })}
        </ul>
      </div>
      <div className={S.date}> {data.date} </div>

    </div>
  );
}

export default EducationCard;
