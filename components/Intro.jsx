import React from "react";
import Container from "./Container";
import Image from "next/image";
import Location from "./Location";
import MyIntro from "./MyIntro";
import NameAndImage from "./NameAndImage";

const Intro = () => {
  return (
    <Container>
      <NameAndImage />
      <MyIntro />
      <Location />
    </Container>
  );
};

export default Intro;
