class Footer extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback() {
    this.innerHTML =
      ` 
        <style>
          @import './components/Footer/styles.css';
        </style>
        <footer>
          <div class="contentFooter">
            <p>Copyright © 2021 <b>Jhon Choque</b> All rights reserved.</p>
          </div>
        </footer>
      `;
  }
}

window.customElements.define('comp-footer', Footer);