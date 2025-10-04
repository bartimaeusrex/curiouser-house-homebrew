

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class CHFullCatalog extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <a href="../catalog.html"><img src="../images/fullcatalog_transbg.png" /></a>  
        `
        }
    }

    window.customElements.define("ch-fullcatalog", CHFullCatalog)

