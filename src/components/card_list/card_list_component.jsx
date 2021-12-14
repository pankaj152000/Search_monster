import React from "react";
import "./card_list.css";
import Card from "../card/card";


const CardList = props => (
  <div className="card-list">
    {props.monster.map((monster) => (
      <Card key={monster.id} monster={monster}></Card>
    ))}
  </div>
);

export default CardList;
