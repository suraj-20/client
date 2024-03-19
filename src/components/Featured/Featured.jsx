import Card from "../Layout/Cards/Card";
const london = require('../assets/images/London-LON-United_Kingdom.jpg')
const paris = require('../assets/images/Paris_PAR-France.jpg')
const rome = require('../assets/images/Rome-ROM-Italy.jpg')




const Featured = ({item}) => {


  const featuredData = [
    {
      name: "Dublin",
      image: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
      flights: 2,
    },
    {
      name: "Reno",
      image: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
      flights: 11,
    },
    {
      name: "Austin",
      image: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
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
    // Add more featured items as needed
  ];

  return (
    <div className="featured">
    {featuredData.map((item, index) => (
      <Card key={index} item={item} /> // Ensure item prop is passed correctly
    ))}
  </div>


  );
};

export default Featured;
