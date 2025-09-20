

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class CHMiniBottomHalf extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `

    <img src="../images/fleuronhouse.png" class="h-2em fleuron center-this" />

        <footer class="center-this">
        <a href="https://bookshop.org/shop/curiouserhouse" target="_blank"><img class="h-2em multiply" src="../images/bookshop.png" /></a>
        <a href="https://bsky.app/profile/curiouser.house" target="_blank"><img class="h-2em multiply" src="../images/bsky.png" /></a>
        <a href="https://www.instagram.com/curiouserhouse" target="_blank"><img class="h-2em multiply" src="../images/instagram.png" /></a>
        <a href="https://www.tiktok.com/@curiouserhouse" target="_blank"><img class="h-2em multiply" src="../images/tiktok.jpg" /></a>
        <br />
            <a href="mailto:publisher@curiouser.house">
            <div class="emaildiv"></div>
        </a>
        </footer>

        `
        }
    }

    window.customElements.define("ch-minibottomhalf", CHMiniBottomHalf)

