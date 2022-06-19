import '../styles/globals.css'
import '../styles/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import Layout from '../component/layout'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
axios.defaults.baseURL = "http://localhost:4000";

function MyApp({ Component, pageProps }) {
  return <>
      {/* <Navbar/> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
}

export default MyApp
