import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


// import { dialogClasses } from "@mui/material";
// import { Audio } from "react-loader-spinner";

const  News =  (props) =>{
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // const [count, setCount] = useState(0);



  const updateNews = async () => {
    try {
      props.setProgress(0);
      const url = `https://newsapi.org/v2/top-headlines?&from=2023-12-30&to=2023-12-30&sortBy=popularity&category=${props.category}&country=${props.country}&apiKey=${props.api}&pageSize=${props.pageSize}&page=${page}`;
      setLoader(true);
      let data = await fetch(url);
      props.setProgress(20);

      let jsonData = await data.json();
      props.setProgress(90);

      if (jsonData.status === "ok") {
        setArticles(jsonData.articles);
        setTotalResults(jsonData.totalResults);
        setLoader(false);
        props.setProgress(100);

      } else {
        console.log("returned status: ", jsonData.status);
      }
    } catch (error) {
      console.log(error.message);
        setLoader(false);

    }
  }

  useEffect(() => {
    /* eslint-disable */
    updateNews();
  }, []);
  //****************** here was the  goToNextPage function*/
  const capitalize = (msg) => {
    const message = msg.toLowerCase();
    return `${message.charAt(0).toUpperCase()}${message.slice(1)}`;
  };
  //****************** here was the  goToPrevPage function*/
  // Before fetching new data
  // scrollPosition = {
  //   x: window.scrollX,
  //   y: window.scrollY,
  // };
  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    try {
      const url = `https://newsapi.org/v2/top-headlines?&from=2023-12-30&to=2023-12-30&sortBy=popularity&category=${props.category}&country=${props.country}&apiKey=${props.api}&pageSize=${props.pageSize}&page=${page+1}`;
      setPage(page + 1);

      //*************************this line was causing the malfunctioning like once the data is fetched it reaches to top once again
      // this.setState({ loader: true }); 
      //***************************************************************************************************************************** */
        // setLoader(true);

      let data = await fetch(url);
      let jsonData = await data.json();
      if (jsonData.status === "ok") {
        setArticles(articles.concat(jsonData.articles));
        setTotalResults(jsonData.totalResults);
        // setLoader(false);
      } else {
        console.log("returned status: ", jsonData.status);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
      <>
        <h2 className="text-center" style={{ margin: "40px" }}>
          {`NewsLion - Top ${capitalize(props.category)} Headlines`}
        </h2>
        {loader && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          scrollToTop={false}
          // scrollableTarget={window}

          // loader={<Spinner />}
        >
          <div className="container">
            <div className="row h-100">
              {articles.map((element,index) => {
                const cnt = index;
                return (
                  <div className="col-md-4" key={cnt}>
                    {element.url && <NewsItem element={element} />}
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* prev and next buttons */}
      </>
    );
  }

  News.defaultProps = {
    pageSize: 6,
    country: "in",
    category: "general",
    // api:"",
  };
  News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
    setProgress: PropTypes.func,
    api: PropTypes.string,
  };

export default News;
 // goToPrevPage = async () => {
  //   // try {
  //   //   let url = `https://newsapi.org/v2/top-headlines?&from=2023-12-30&to=2023-12-30&sortBy=popularity&category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.api}&pageSize=${this.state.pageSize}&page=${this.state.page}`;
  //   //   this.setState({ loader: true });
  //   //   let data = await fetch(url);
  //   //   let jsonData = await data.json();
  //   //   if (jsonData.status === "ok") {
  //   //     this.setState({
  //   //       articles: jsonData.articles,
  //   //       page: this.state.page - 1,
  //   //     });
  //   //     this.setState({ loader: false });
  //   //   } else {
  //   //     return <div>Error: 404 , Page not found!</div>;
  //   //   }
  //   // } catch (error) {
  //   //   console.log("something went wrong: no prev page" + error);
  //   // }
  //   // *********************************** removed redundency from above code
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
// };
  
// goToNextPage = async () => {
//   // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults) / 21)) {
//   //   try {
//   //     let url = `https://newsapi.org/v2/top-headlines?&from=2023-12-30&to=2023-12-30&sortBy=popularity&category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.api}&pageSize=${this.state.pageSize}&page=${this.state.page}`;
//   //     this.setState({ loader: true });
//   //     let data = await fetch(url);
//   //     let jsonData = await data.json();
//   //     if (jsonData.status === "ok") {
//   //       this.setState({
//   //         articles: jsonData.articles,
//   //         page: this.state.page + 1,
//   //       });
//   //       this.setState({ loader: false });
//   //     } else {
//   //       return <div>Error: 404 , Page not found!</div>;
//   //     }
//   //   } catch (error) {
//   //     console.log("something went wrong: " + error);
//   //   }
//   // }
//   // *********************************** removed redundency from above code
//   this.setState({ page: this.state.page + 1 });
//   this.updateNews();
// };

 
   /* <div className="container d-flex justify-content-between">
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
        </div> */