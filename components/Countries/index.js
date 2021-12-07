class Countries extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const countries = await this.getContries();
    let cardRender = '';
    countries.forEach((country) => cardRender = cardRender + this.renderCard(country));

    this.innerHTML =
      ` 
        <style>
          @import './components/Countries/styles.css';
        </style>

        <div class="contentCountries">                    
          ${cardRender}
        </div>
      `;
  }

  renderCard(country) {
    const { capital, region, subregion, translations, population, flags, continents } = country;
    const card =
      `
      <comp-card-country
        nameCountry = "${translations.spa.common}"
        capital = "${capital[0]}"
        oficialName = "${translations.spa.official}"
        population = "${population}"
        continent = "${continents[0]}"
        region = "${region}"
        subregion = "${subregion}"
        urlFlag = "${flags.png}"
      >
      </comp-card-country>`

    return card;
  }

  async getContries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data.slice(0, 12);
  }
}

window.customElements.define('comp-countries', Countries);