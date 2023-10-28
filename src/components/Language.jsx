import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { useState } from "react";

const Language = ({ item }) => {
  const [show, setShow] = useState(false);
  const showList = () => {
    setShow(!show);
    console.log(show);
  };
  const { name, img, options } = item;
  return (
    <Container
      onClick={showList}
      className="border-none rounded-4 bg-warning p-2 h-100 lang-card "
      type="button"
    >
      {/* {show && (
        <ul>
          {options.map((option) => {
            return <li className="text-start">{option}</li>;
          })}
        </ul>
      )}
      {!show && (
        <>
          <Image fluid src={img} width="70%"></Image>
          <h1>{name}</h1>
        </>
      )} */}

      {show ? (
        <ul className="h-100">
          {options.map((option) => {
            return <li className="text-start">{option}</li>;
          })}
        </ul>
      ) : (
        <>
          <Image className="lang-logo" fluid src={img} width="50%"></Image>
          <h1 className="text-light fw-bold">{name}</h1>
        </>
      )}
    </Container>
  );
};

export default Language;
