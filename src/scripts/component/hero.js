class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero_inner">
            <h1 class="hero_tittle"><span class="hero_bold">Welcome to <span class="rizz">Rizzto</span></span></h1>
            <p class="hero_tagline">Romantic dinner places with a beautiful views and over rating you can also Confeess your crush with some elegant Rizz on it, interested?</p>
            <a href="#main-content" class="hero_button">Check it Out!</a>
        </div>
      </div>
          `;
  }
}
customElements.define('hero-element', Hero);
