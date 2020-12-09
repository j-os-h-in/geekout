import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner"

/**
 *  @description
 *  This is the root (or index) page of our application.
 *
 *  @summary
 *  From the folder structure (being the index page), you can access this page via ---> http://localhost:3000/
 * 
 *  @requires
 *  Your server to be running ---> Run `npm run dev` in your terminal
 */

function About() {
  return (
    <div>
      <Navbar />
      <Banner />
      <section>
        <div className="container">
          <h1>About Us</h1>
        
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
