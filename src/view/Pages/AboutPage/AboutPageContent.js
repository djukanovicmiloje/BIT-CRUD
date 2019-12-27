import React from "react";
import Row from "../../Components/Row/Row";
import Title from "../../Components/Title/Title";
import Column from "../../Components/Column/Column";
import Text from "../../Components/Text/Text";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 20,
    min: 20
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const AboutPageContent = props => (
  <Row>
    <Column basis={3}>
      <Title text="Who we are?" />
    </Column>
    <Column basis={3}>
      <Text text={lorem.generateParagraphs(1)} />
    </Column>
  </Row>
);

export default AboutPageContent;
