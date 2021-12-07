class Header extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback() {
    this.innerHTML =
      ` 
        <style>
          @import './components/Header/styles.css';
        </style>
        <header>
          <nav class="navbar">
            <img src="../../assets/brand.png" alt="">
            <h1>Paises App</h1>
          </nav>
        </header>
      `;
  }
}

window.customElements.define('comp-header', Header);