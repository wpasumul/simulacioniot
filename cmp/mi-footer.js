class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Navarro Corona Alejandro IC52M.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
