import { Container, Card, Carousel, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import NewsObj from "../Interfaces/interface";

const Home = function () {
  const [news, setNews] = useState<NewsObj[] | null>(null);

  const getNews = () => {
    const url = `https://api.spaceflightnewsapi.net/v4/articles`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        {
          throw new Error("Errore nella fetch");
        }
      })
      .then((data) => {
        setNews(data.results), console.log(data, "siamo i dati");
      })
      .catch((error) => console.error("Errore:", error));
  };

  useEffect(() => {
    console.log("sono use effect");

    getNews();
  }, []);
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <div className="justify-content-center ">
            <Carousel>
              {news &&
                news.map((article) => (
                  <Carousel.Item key={article.id}>
                    <img src={article.image_url} alt={article.title} />
                    <Carousel.Caption>
                      <h3>{article.title}</h3>
                      <span>
                        Created by:
                        {article.authors.map((author) => author.name)}
                      </span>
                      <p>{article.summary}</p>
                      <span>
                        Published: {article.published_at} / Last update:
                        {article.updated_at}
                      </span>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
