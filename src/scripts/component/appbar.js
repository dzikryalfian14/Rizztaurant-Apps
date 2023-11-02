class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header">
        <a href="#" class="group-logo">
          <i class="fas fa-utensils fa-2x"></i>
          <span class="navbar_logo">Rizzto</span>
        </a>
        
        <button class="menu" id="menu" aria-label="button menu dropdown on mobile">☰</button>
        
        <nav class="navbar" id="drawer">
          <ul class="navbar_list">
            <li class="navbar_item"><a href="#/home">Home</a></li>
            <li class="navbar_item"><a href="#/favorite">Favorite</a></li>
            <li class="navbar_item"><a href="https://github.com/dzikryalfian14" target="_blank" rel="noopener">About Us</a></li>
          </ul>
        </nav>
      </header>
          `;
  }
}
customElements.define('app-bar', AppBar);
