import ImageCard from "./ImageCard";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

// const images = ["Dogs", "Cats", "Lion", "Tiger"];
const images = [
  {
    title: "Dogs",
    image:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    description: "Dogs are awesome"
  },
  {
    title: "Cats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNnZg7002-VDffcgpbtEFQ1TLYYZ8Ylyaj-zbM3SLhHQRNCcbONQE_iaw5UHdOHSLLv0A&usqp=CAU",
    description: "cats are awesome"
  },
  {
    title: "Lion",
    image:
      "https://images.news18.com/ibnlive/uploads/2021/08/1628511415_lion-1600x900.jpg",
    description: "Lions are awesome"
  },
  {
    title: "Tiger",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3TR5ODENKBdsBpL8WMnmro9Qtw8nYtW_x9Rqf4VY4dTFLy1TTKFE97BDOpZnMUdVydc&usqp=CAU",
    description: "Tigers are awesome"
  }
];

export default function App() {
  const imageElements = images.map((item, index) => {
    return (
      <ImageCard
        // key={index}
        title={item.title}
        image={item.image}
        description={item.description}
      />
    );
  });
  console.log(imageElements);
  return (
    <div className="App">
      <Header />
      <div className="cards">{imageElements}</div>
      <Footer />
    </div>
  );
}

// function add() {
//   return 1 + 2;
// }
