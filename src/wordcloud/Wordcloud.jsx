import "./Wordcloud.css"
import ReactWordcloud from 'react-wordcloud';
function Wordcloud() {
  const words = [
    {
      text: 'tusk',
      value: 128,
    },{
      text: 'polityka',
      value: 512,
    },
    {
      text: 'kaczyński',
      value: 256,
    },
    {
      text: 'sejm',
      value: 64,
    },
    {
      text: 'lewica',
      value: 64,
    },

    {
      text: 'senat',
      value: 256,
    },
    {
      text: 'demokracja',
      value: 64,
    },
    {
      text: 'PRL',
      value: 64,
    },
  ]
    return (
      <ReactWordcloud words={words} />
    );

    /*const callbacks = {
  getWordColor: word => word.value > 50 ? "blue" : "red",
  onWordClick: console.log,
  onWordMouseOver: console.log,
  getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
}
const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
};
const size = [600, 400];
const words = [...];
 
function MyWordcloud() {
  return (
    <ReactWordcloud
      callbacks={callbacks}
      options={options}
      size={size}
      words={words}
    />
  );*/ 
}
  export default Wordcloud;