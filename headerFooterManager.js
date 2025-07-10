class SpecialHeader extends HTMLElement {
    ConnectedCallback() {
        this.innerHTML = `
        <div id="container">
            <input id="holder" type="text" placeholder="Search">
            <p id="containerText">GENIUS WITHIN</p>
            <a id="geniuses" href="http://127.0.0.1:5500/aboutpage.html">
                <button class="genius-button">About The Geniuses</button>
            </a>
            <div class="makingOf-button">
                <a class="headerLinks" id="makingOf" href="http://127.0.0.1:5500/aboutpage.html"> The making of </a>
            </div>
        </div>
        `
    }
}

customElements.define('special-header', SpecialHeader)