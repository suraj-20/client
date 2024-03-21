import Card from "../Layout/Cards/Card";
const london = require('../assets/images/London-LON-United_Kingdom.jpg')
const paris = require('../assets/images/Paris_PAR-France.jpg')
const rome = require('../assets/images/Rome-ROM-Italy.jpg')
const itly = require('../assets/images/Venice-VCE-Italy.jpg')
const spain = require('../assets/images/Barcelona-BCN-Spain.jpg')
const spainl = require('../assets/images/Madrid-MAD-Spain.jpg')




const Featured = ({item}) => {


  const featuredData = [
    {
      name: "Itly",
      image: itly,
      flights: 2,
    },
    {
      name: "Reno",
      image: spain,
      flights: 11,
    },
    {
      name: "Austin",
      image: spainl,
      flights: 32,
    },
    {
      name: "London",
      image: london,
      flights: 2,
    },
    {
      name: "Rominia",
      image: rome,
      flights: 7,
    },
    {
      name: "Paris",
      image: paris,
      flights: 12,
    },
    
  ];

  return (
    <div className="featured">
    {featuredData.map((item, index) => (
      <Card key={index} item={item} /> 
    ))}
  </div>


  );
};

export default Featured;
