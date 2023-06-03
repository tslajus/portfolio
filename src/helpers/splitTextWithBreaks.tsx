function splitTextWithBreaks(text: string): Array<string | JSX.Element> {
  const words = text.split(" ");
  return words.reduce((prev, curr, index) => {
    return index < words.length - 1
      ? [...prev, curr, <br key={index} />]
      : [...prev, curr];
  }, [] as Array<string | JSX.Element>);
}

export default splitTextWithBreaks;
