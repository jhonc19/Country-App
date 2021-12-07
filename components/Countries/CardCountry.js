class CardCountry extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['nameCountry', 'capital', 'oficialName', 'population', 'continent', 'region', 'subregion', 'urlFlag'];
  }

  attributeChangedCallback(nameAtr, oldValue, newValue) {
  }

  connectedCallback() {
    const nameCountry = this.attributes.nameCountry.value || "1";
    const capital = this.attributes.capital.value || "2";
    const oficialName = this.attributes.oficialName.value || "3";
    const population = this.attributes.population.value || "4";
    const continent = this.attributes.continent.value || "5";
    const region = this.attributes.region.value || "6";
    const subregion = this.attributes.subregion.value || "7";
    const urlFlag = this.attributes.urlFlag.value || "https://flagcdn.com/w320/ke.png";

    this.innerHTML =
      ` 
        <style>
          @import './components/Countries/styles.css';
        </style>
        <div class="cardCountry">
          <div class="headerCardCountry">
            <div class="titleCardCountry">
              <h4 onclick="valuesModal('${nameCountry}', '${oficialName}', '${continent}', '${urlFlag}')">${nameCountry}</h4>
              <span>${oficialName}</span>
            </div>
            <img class="flagCardCountry" src=${urlFlag} alt="">
          </div>
          <ul class="featuresCardCountry">
            <li><b>Capital: </b>${capital}</li>
            <li><b>Población: </b>${new Intl.NumberFormat("en-US").format(population)}</li>
            <li><b>Continente: </b>${continent}</li>
            <li><b>Región: </b>${region}</li>
            <li><b>Sub Región: </b>${subregion}</li>
          </ul>
        </div>
      `;
  }
}

window.customElements.define('comp-card-country', CardCountry);