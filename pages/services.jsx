import React from 'react';
import Image from 'next/image'; // Importe o componente Image do Next.js se você estiver usando o Next.js
import styles from '../styles';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, Menu } from '../sections';

const MinhaPagina = () => (
    <div>
      <Menu />
      <div className="background">
        <div className="meio">
          <h1 className="modelos">MODELOS</h1>
          <h1 className="do-corinthians">DO CORINTHIANS</h1>
          <h2 className="paragrafo">Novas cores, agora também disponível no tamanho dos homens</h2>
          <button class="botao">Novas coleção</button>
        </div>
      </div>

      <section className="cat">
        {/* Aqui vão os conteúdos da seção cat */}
        <div>
      <h1></h1>
      <div className="Container-card-1">
        <div className="cards">
          <img src="/img/modelo1.jpeg" alt="Modelo 1" />
        </div>
        <div className="cards">
          <img src="/img/modelo2.jpeg" alt="Modelo 2" />
        </div>
      </div>

      <div className="Container-card-1">
        <div className="cards">
          <img src="/img/modelo3.webp" alt="Modelo 3" />
        </div>
        <div className="cards">
          <img src="/img/modelo4.jpeg" alt="Modelo 4" />
        </div>
      </div>

      <div className="Container-card-1">
        <div className="cards">
          <img src="/img/modelo5.jpeg" alt="Modelo 5" />
        </div>
        <div className="cards">
          <img src="/img/modelo6.jpeg" alt="Modelo 6" />
        </div>
      </div>

      <div className="header">
        {/* Content before waves */}
        {/* Waves Container */}
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,0,0,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,0,0,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,0,0,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#111" />
            </g>
          </svg>
        </div>
        {/* Waves end */}
      </div>
    </div>
      </section>

      <section className="cta">
        {/* Aqui vão os conteúdos da seção cta */}
        <div class="text-cta">
            <h1 class="verao-venda">VERÃO A VENDA</h1>
            <h4 class="novas">NOVAS CHEGADAS</h4>
            <a href="#" class="btn">Compre agora</a>
        </div>
      </section>

      <section>
        {/* Aqui vão os conteúdos da próxima seção */}
        <div>
      <h1 className="h1-safado">ESTOQUE NOVOS</h1>
      <div className="Container-roupas">
        <div className="roupa">
          <img src="/img/camisa1.png" alt="Camisa Corinthians Oficial 2021" />
          <h1 className="text-corinthians">Camisa Corinthians Oficial 2021</h1>
          <h5>$188</h5>
          <ion-icon name="cart-outline"></ion-icon>
        </div>

        <div className="roupa">
          <img src="/img/camisa2.png" alt="Nike Corinthians II 2023/24 Torcedor" />
          <h1 className="text-corinthians2">Nike Corinthians II 2023/24 Torcedor</h1>
          <h5>$188</h5>
          <span><ion-icon name="cart-outline"></ion-icon></span>
        </div>

        <div className="roupa">
          <img src="/img/camisa3.png" alt="Corinthians Pré jogo 22/23 Preta e Branca" height="700" width="700" />
          <h1 className="text-corinthians3">Corinthians Pré jogo 22/23 Preta e Branca</h1>
          <h5>$188</h5>
          <ion-icon name="cart-outline"></ion-icon>
        </div>

        <div className="roupa">
          <img src="/img/japa.png" alt="Do Corinthians Nova Japão 22/23" height="700" width="700" />
          <h1 className="text-corinthians4">Do Corinthians Nova Japão 22/23</h1>
          <h5>$188</h5>
          <ion-icon name="cart-outline"></ion-icon>
        </div>
      </div>
    </div>
      </section>

      <section className="Contato" id="Contato">
        {/* Aqui vão os conteúdos da seção Contato */}
        <div class="meio-contato">
            <h3>Historia</h3>
            <h5>O Corinthians foi fundado em 1º de setembro de 1910 por um grupo de operários do bairro do Bom Retiro, em São Paulo. O clube foi inspirado por um time de futebol inglês chamado Corinthian FC, que visitou o Brasil naquela época.
                <br/>
                Primeiros anos: Nos primeiros anos, o Corinthians enfrentou dificuldades financeiras, mas conseguiu construir uma base de fãs leais. Em 1914, o clube conquistou seu primeiro título, o Campeonato Paulista.
                <br/>
                Estádio: Em 1938, o Corinthians inaugurou seu estádio, o Estádio do Pacaembu, que se tornou um local emblemático para o clube e para o futebol brasileiro.
            </h5>
            <div class="icons">
                <a href="#"><i class='bx bxl-facebook-square'></i></a>
                <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                <a href="#"><i class='bx bxl-twitter'></i></a>
            </div>
        </div>

        <div class="meio-contato">
          
        </div>

        <div class="meio-contato">
        <h3>Redes Sociais</h3>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Faceboock</a></li>
            <li><a href="#">Twitter </a></li>
            <li><a href="#">Whatsapp</a></li>
        </div>

        <div class="meio-contato">
           
        </div>
      </section>

      <div className="last-text">
        <p>Copyright © 2024 Bella Donna. All rights reserved.</p>
      </div>
    </div>
  );

export default MinhaPagina;
