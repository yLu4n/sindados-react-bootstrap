import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

function NewsCarousel({ noticias }) {
  return (
    <Carousel controls indicators interval={6000} className="news-carousel">
      {noticias.map((noticia) => (
        <Carousel.Item key={noticia.id}>
          <div className="slide" style={{ backgroundImage: `linear-gradient(90deg, rgba(25, 25, 25, .9), rgba(25, 25, 25, .25)), url(${noticia.imagem})` }}>
            <Container className="slide-content text-white">
              <div>
                <h2 className="h1">{noticia.titulo}</h2>
                <p>{noticia.descricao}</p>
                <Button variant="danger" href={noticia.link} target="_blank" rel="noopener noreferrer">Ler notícia</Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default NewsCarousel;
