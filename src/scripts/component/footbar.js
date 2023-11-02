class footBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer tabindex="0">
      <ul>
        <li><span class="copyright">&copy; Copyright 2023 - Rizzto</span></li>
      </ul>
    </footer>
    
    `;
  }
}
customElements.define('foot-bar', footBar);
