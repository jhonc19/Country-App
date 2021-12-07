class ModalCountry extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =
      ` 
      <style>
        @import './components/ModalCountry/styles.css';
      </style>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <div class="titleModalCountry">
            <h4>País</h4>
            <span>Nombre oficial</span>
          </div> 
          <h4 class="continentModalCountry"><b>Continente: </b>Africa</h4>
          <img class="flagModalCountry" src="https://flagcdn.com/w320/ke.png" alt="">
        </div>    
      </div>
      `;
  }
}

window.customElements.define('comp-modal-country', ModalCountry);