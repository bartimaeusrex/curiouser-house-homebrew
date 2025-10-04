

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class CHFooter extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <!-- FOOTER! ACTUAL COPYRIGHT TEXT IN CSS FILE -->
        <div class="flex-menu"><div class="flex-menuitem footer">© <span id="year"></span> </div></div>
        `
        }
    }

    window.customElements.define("ch-footer", CHFooter)

