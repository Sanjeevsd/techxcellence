import "../styles/bootstrap.min.css";
import "../styles/fontawesome.min.css";
import "../styles/flaticon.css";
import "animate.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../styles/style.scss";
import "../styles/responsive.scss";

import App from "next/app";
import Head from "next/head";
import Loader from "../components/Layouts/Loader";
import GoTop from "../components/Layouts/GoTop";

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>
            TechXcellence - Techxcellence-Digital marketing agency in nepal
          </title>
          <meta
            name="description"
            content="Achieve your business goals with our expert digital marketing services by increasing brand visibility, website traffic, and generating valuable leads."
          />
        </Head>

        <Component {...pageProps} />

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="100" delayInMs="15.50" />
      </>
    );
  }
}
