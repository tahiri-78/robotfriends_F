import React from "react";
import Carte from "./Carte";

const Carteliste = ({ robots }) => {
  const listcarte = robots.map((ele, i) => {
    return <Carte key={i} email={ele.email} id={ele.id} name={ele.name} />;
  });

  return <div> {listcarte} </div>;
};
export default Carteliste;
