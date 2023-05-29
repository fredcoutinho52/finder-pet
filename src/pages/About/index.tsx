import Header from "../../components/Header";
import Footer from "../../components/Footer";
import petsImg from "../../assets/pets.png";
import "./styles.scss";

function AboutPage() {
  return (
    <>
      <Header/>
      <div className="about-container">
        <div className="cta">
          <h1>Faucibus varius ultrices sollicitudin.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a suspendisse tempor praesent cursus tellus a urna, integer. Risus hendrerit tincidunt nec, tellus. Viverra habitasse felis vulputate est et egestas tortor sit vestibulum. </p>
          <button>Explore</button>
        </div>

        <img src={petsImg} alt="Pets" />
      </div>
      <Footer/>
    </>
  );
}

export default AboutPage;
