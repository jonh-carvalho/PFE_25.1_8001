import styled from 'styled-components';
import Usuario from './Usuario';

const BotaoEstilizado = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

function Hero() {
    return (
      <section className="hero">
        <div className="container">
          <h1>Welcome to Our Product</h1>
          <p>Discover the best solution for your needs with our cutting-edge product.</p>
          <a href="#signup" className="cta-button">Get Started</a>
          <br />
          <br />
          <BotaoEstilizado>Get Started</BotaoEstilizado>
          <BotaoEstilizado>Get Started</BotaoEstilizado>

          <h1>Lista de Usuários</h1>
          <Usuario nome="Alice" idade={28} />
          <Usuario nome="Carlos" idade={34} />
        </div>
      </section>
    );
  }
  
  export default Hero;