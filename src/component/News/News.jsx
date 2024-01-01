import React, { Component } from "react";
import NewsItem from "./NewsItem.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import PropTypes from "prop-types";

// import { dialogClasses } from "@mui/material";
// import { Audio } from "react-loader-spinner";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Www.hs.fi",
      },
      author: "Juha-Pekka Raeste HS",
      title:
        "Sijoittaminen | Yhdysvaltain pörssit ennätys­vauhdissa teknologia­yhtiöiden siivittäminä",
      description:
        "Seitsemän suurimman teknologiayhtiön menestys selittää paljolti S&P 500 -indeksin hyvää virettä.",
      url: "https://www.hs.fi/talous/art-2000010086330.html",
      urlToImage:
        "https://hs.mediadelivery.fi/img/some/default/a1ff55b239477677d2a74f1518821ca3.jpg",
      publishedAt: "2023-12-28T16:20:00Z",
      content:
        "Seitsemän suurimman teknologiayhtiön menestys selittää paljolti S&amp;P 500 -indeksin hyvää virettä.Suurten teknologiayhtiöiden vahva kurssikehitys on nostamassa Yhdysvaltain pörssien indeksejä uusii… [+732 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "finance.yahoo.com",
      title: "Cathie Wood Goes Into Bitcoin Futures ETF, Dumps Grayscale",
      description:
        "One of Cathie Wood’s funds has executed a massive shake-up to its Bitcoin-related holdings, selling off its remaining position in the Grayscale Bitcoin Trust because of uncertainty over whether it will be able to successfully convert into an exchange-traded f…",
      url: "https://biztoc.com/x/6001279aa6084fe5",
      urlToImage: "https://c.biztoc.com/p/6001279aa6084fe5/og.webp",
      publishedAt: "2023-12-28T16:14:26Z",
      content:
        "One of Cathie Woods funds has executed a massive shake-up to its Bitcoin-related holdings, selling off its remaining position in the Grayscale Bitcoin Trust because of uncertainty over whether it wil… [+302 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "finance.yahoo.com",
      title: "Global Bond ‘Carnival’ Sets Stage for Record Two Months",
      description:
        "The world’s debt market is on track to post its biggest two-month gain on record as traders ramp up expectations that central banks everywhere will slash interest rates next year. • None The Late-Night Email to Tim Cook That Set the Apple Watch Saga in Motion…",
      url: "https://biztoc.com/x/c72bf0be20d22064",
      urlToImage: "https://c.biztoc.com/p/c72bf0be20d22064/og.webp",
      publishedAt: "2023-12-28T16:14:23Z",
      content:
        "The worlds debt market is on track to post its biggest two-month gain on record as traders ramp up expectations that central banks everywhere will slash interest rates next year.None The Late-Night E… [+285 chars]",
    },
    {
      source: {
        id: null,
        name: "Ig.com.br",
      },
      author: "Luiz Forelli Santana, Luiz Forelli Santana",
      title:
        "Primeiro veículo da Xiaomi faz 0 a 100 km/h mais rápido que McLaren P1",
      description:
        "Modelo pode atingir o 0 100 km/h em 2,7 segundos e os 200 km/h em 10,6 segundos, com autonomia de até 800 km",
      url: "https://carros.ig.com.br/2023-12-28/primeiro-veiculo-da-xiaomi-faz-0-a-100-km-h-mais-rapido-que-mclaren-p1.html",
      urlToImage:
        "https://i0.statig.com.br/bancodeimagens/6l/82/m5/6l82m5nd1jxxqfv1zchi0g9oq.jpg",
      publishedAt: "2023-12-28T16:13:59Z",
      content:
        "A fabricante de smartphones, Xiaomi\r\n, encara um novo desafio: ingressar no setor automotivo, conforme prometido há quase três anos.\r\nO CEO da Xiaomi, Lei Jun\r\n, revelou detalhes sobre o primeiro veí… [+2153 chars]",
    },
    {
      source: {
        id: null,
        name: "Leblogauto.com",
      },
      author: "Nicolas Anderbegani",
      title:
        "Xiaomi SU7 : le géant de l'électronique présente sa première voiture",
      description:
        "Xiaomi, à l'image des autres constructeurs automobiles chinois établis, affiche de grandes ambitions. Le \"smartphone\" roulant n'a peut-être jamais aussi bien porté son nom ?",
      url: "https://www.leblogauto.com/actualite/xiaomi-su7--le-geant-de-l-electronique-presente-sa-premiere-voiture-95276",
      urlToImage:
        "https://medias.leblogauto.com/20/2023/12/photo_article/95276/177602/1200-L-xiaomi-su7-le-gant-de-l-lectronique-prsente-sa-premire-voiture.jpg",
      publishedAt: "2023-12-28T16:13:00Z",
      content:
        "A l’image de l’univers cosmique et du rythme de nos découvertes scientifiques, la galaxie de l’automobile électrique voit se multiplier sans cesse le nombre de ses étoiles, et la constellation des ma… [+4374 chars]",
    },
    {
      source: {
        id: "breitbart-news",
        name: "Breitbart News",
      },
      author: "Lucas Nolan, Lucas Nolan",
      title:
        "Reuters Investigation: Elon Musk's Tesla Blames Customers for Its Defective Parts",
      description:
        "A recent investigation by Reuters has unearthed critical issues with Tesla's handling of part failures, revealing a pattern of blaming customers despite longstanding awareness of defects.",
      url: "https://www.breitbart.com/tech/2023/12/28/reuters-investigation-elon-musks-tesla-blames-customers-for-its-defective-parts/",
      urlToImage:
        "https://media.breitbart.com/media/2023/08/elon-musk-06-16-2023-getty-640x335.jpg",
      publishedAt: "2023-12-28T16:11:22Z",
      content:
        "A recent investigation by Reuters has unearthed critical issues with Tesla’s handling of part failures, revealing a pattern of blaming customers despite longstanding awareness of defects.\r\nReuters re… [+3604 chars]",
    },
    {
      source: {
        id: null,
        name: "Enter.co",
      },
      author: "Digna Irene Urrea",
      title:
        "De los celulares a los carros: Así es el nuevo automóvil eléctrico de Xiaomi SU7",
      description:
        "La fabricante china lanzó el Xiaomi SU7, un carro eléctrico sedán que pretende revolucionar este mercado. El nuevo automóvil...",
      url: "https://www.enter.co/chips-bits/gadgets/de-los-celulares-a-los-carros-asi-es-el-nuevo-automovil-electrico-de-xiaomi-su7/",
      urlToImage:
        "https://www.enter.co/wp-content/uploads/2023/12/xiaomi-su7-coche-electrico-3253851.jpg",
      publishedAt: "2023-12-28T16:07:47Z",
      content:
        "La fabricante china lanzó el Xiaomi SU7, un carro eléctrico sedán que pretende revolucionar este mercado. El nuevo automóvil tiene dos opciones de baterías, una 73,6 kWh y 101 kWh, lo que permite que… [+2159 chars]",
    },
    {
      source: {
        id: null,
        name: "Marketscreener.com",
      },
      author: null,
      title: "China's Xiaomi unveils first electric car",
      description:
        "(marketscreener.com) STORY: There's a new major player in the electric vehicle market.https://www.marketscreener.com/quote/stock/XIAOMI-CORPORATION-45271958/news/China-s-Xiaomi-unveils-first-electric-car-45645523/?utm_medium=RSS&utm_content=20231228",
      url: "https://www.marketscreener.com/quote/stock/XIAOMI-CORPORATION-45271958/news/China-s-Xiaomi-unveils-first-electric-car-45645523/",
      urlToImage:
        "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
      publishedAt: "2023-12-28T16:05:16Z",
      content:
        "STORY: There's a new major player in the electric vehicle market.\r\n Chinese smartphone maker Xiaomi has entered the popular market, and unveiled its first EV on Thursday (December 28).\r\nThe sedan is … [+1037 chars]",
    },
    {
      source: {
        id: "rt",
        name: "RT",
      },
      author: "RT en Español\n , RT en Español",
      title:
        'Xiaomi presenta su primer auto eléctrico de "ensueño" para competir con Tesla y Porsche',
      description:
        "Se trata del SU7, que en su versión de mayor potencia es capaz de alcanzar los 100 kilómetros por hora en 2,78 segundos.",
      url: "https://actualidad.rt.com/actualidad/493904-xiaomi-presentar-primer-auto-electrico-competir-tesla-porsche",
      urlToImage:
        "https://mf.b37mrtl.ru/actualidad/public_images/2023.12/article/658d72e559bf5b37927425c1.jpg",
      publishedAt: "2023-12-28T16:03:47Z",
      content:
        "El fabricante chino de teléfonos inteligentes Xiaomi presentó este jueves, 28 de diciembre, su primer modelo de auto eléctrico, que tiene dos versiones y saldrá al mercado durante el año próximo. Su … [+2005 chars]",
    },
    {
      source: {
        id: null,
        name: "CleanTechnica",
      },
      author: "Zachary Shahan",
      title:
        "The Real Shocker In The “Robot Attacks Tesla Factory Worker” Story",
      description:
        "I’ll be honest, there are a few surprising and confusing parts of this story. First of all, let’s note that ... [continued]\nThe post The Real Shocker In The “Robot Attacks Tesla Factory Worker” Story appeared first on CleanTechnica.",
      url: "https://cleantechnica.com/2023/12/28/the-real-shocker-in-the-robot-attacks-tesla-factory-worker-story/",
      urlToImage:
        "https://cleantechnica.com/wp-content/uploads/2023/12/Tesla-Robots-in-Factory-1-CleanTechnica-Watermark.png",
      publishedAt: "2023-12-28T16:02:34Z",
      content:
        "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nI’ll be honest, there are a few surprising and confusing parts of this story. First of all, let’s note that t… [+5166 chars]",
    },
  ];
  static defaultProps = {
    pageSize: 6,
    country: "in",
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loader: false,
      page: 1,
      pageSize: 6,
    };
  }
  async componentDidMount() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?&from=2023-12-30&to=2023-12-30&sortBy=popularity&category=${this.props.category}&country=${this.props.country}&apiKey=1d7394a14ee64b14acb07b2e7483c94c&pageSize=${this.state.pageSize}&page=${this.state.page}`;
      this.setState({ loader: true });
      let data = await fetch(url);
      let jsonData = await data.json();

      if (jsonData.status === "ok") {
        this.setState({
          articles: jsonData.articles,
          totalResults: jsonData.totalResults,
          loader: false,
        });
      } else {
        console.error("News API error:", jsonData.message);
      }
    } catch (error) {
      console.error("Error fetching news:", error.message);
    }
  }

  goToNextPage = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults) / 21)) {
      try {
        let url = `https://newsapi.org/v2/top-headlines?&from=2023-12-30&to=2023-12-30&sortBy=popularity&category=${this.props.category}&country=${this.props.country}&apiKey=1d7394a14ee64b14acb07b2e7483c94c&pageSize=${this.state.pageSize}&page=${this.state.page}`;

        this.setState({ loader: true });

        let data = await fetch(url);
        let jsonData = await data.json();

        if (jsonData.status === "ok") {
          this.setState({
            articles: jsonData.articles,
            page: this.state.page + 1,
          });
          this.setState({ loader: false });
        } else {
          return <div>Error: 404 , Page not found!</div>;
        }
      } catch (error) {
        console.log("something went wrong: " + error);
      }
    }
  };
  goToPrevPage = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?&from=2023-12-30&to=2023-12-30&sortBy=popularity&category=${this.props.category}&country=${this.props.country}&apiKey=1d7394a14ee64b14acb07b2e7483c94c&pageSize=${this.state.pageSize}&page=${this.state.page}`;
      this.setState({ loader: true });

      let data = await fetch(url);
      let jsonData = await data.json();
      if (jsonData.status === "ok") {
        this.setState({
          articles: jsonData.articles,
          page: this.state.page - 1,
        });
        this.setState({ loader: false });
      } else {
        return <div>Error: 404 , Page not found!</div>;
      }
    } catch (error) {
      console.log("something went wrong: no prev page" + error);
    }
  };
   capitalize = (msg) => {
        const message = msg.toLowerCase();
        return `${message.charAt(0).toUpperCase()}${message.slice(1)}`;
    }
  render() {
    return (
      <div className="container my-4">
        <h2 className="text-center" style={{ margin: "40px" }}>
          {`NewsLion - ${this.capitalize(this.props.category)}`}
        </h2>
        {this.state.loader && <Spinner />}
        <div className="row h-100">
          {!this.state.loader &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem element={element} />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <div
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.goToPrevPage}
          >
            &larr; Previous
          </div>
          <div className="btn btn-dark " onClick={this.goToNextPage}>
            {" "}
            Next &rarr;
          </div>
        </div>
      </div>
    );
  }
}
