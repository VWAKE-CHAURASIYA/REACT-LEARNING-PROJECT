// here we import out api  using .env to fetch the currnt data

import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

// eslint-disable-next-line react/prop-types
const Newsboard = ({category }) => {
    
  const [articles, setarticles] = useState([]); //creaing usestate with empty array

  // than creating useeffect to ignore unwanted things , and use to store url which i have copied

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8f929cc1f46f43248a60376e89df9835`;
    //  once we getting the url in useEffect, we need to fetch the url
    fetch(url)
      .then((response) => response.json())
      .then((data) => setarticles(data.articles));
  }, [category]); //when our news board component load ,  and for displaying ARTICLE WE USE NEWS ITEM COMPONENT

  return (
    <div>
      <h2 className="text-center">
        Highlighted <span className="badge bg-danger  mb-4">News</span>
      </h2>

      {/* passing all the info as props  */}

      {articles.map((news, index) => {
        // passing data to news item
        return (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    {/* // taking right of this news website  */}
    <footer className="text-center bg-dark text-white py-2">
        <p><span>&copy;</span>NEWS ON THE WAY -2025</p>
        <p><span>&reg;</span>Develope by: <span className="text-primary"> VIVEK CHAURASIYA</span></p>
    </footer>
    </div>

    
  );
};

export default Newsboard;
