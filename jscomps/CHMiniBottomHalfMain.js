
class CHMiniBottomHalfMain extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `

    <a href="./"><img src="images/fleuronhouse.png" class="h-2em fleuron center-this" title="decorative fleuron house" /></a>

        <footer class="center-this">
        <a href="https://bookshop.org/shop/curiouserhouse" target="_blank"><img class="h-2em multiply" src="images/bookshop.png" title="Curiouser House on Bookshop.org" /></a>
        <a href="https://bsky.app/profile/curiouser.house" target="_blank"><img class="h-2em multiply" src="images/bsky.png" title="Curiouser House on Bluesky" /></a>
        <a href="https://www.instagram.com/curiouserhouse" target="_blank"><img class="h-2em multiply" src="images/instagram.png" title="Curiouser House on Instagram" /></a>
        <a href="https://www.tiktok.com/@curiouserhouse" target="_blank"><img class="h-2em multiply" src="images/tiktok.jpg" title="Curiouser House on TikTok" /></a>
        <a href="https://oldcuriousershop.com" target="_blank"><img class="h-2em multiply" src="images/ocs_moonman.png" title="The Old Curiouser Shop" /></a>
        <br />
            <a href="mailto:publisher@curiouser.house">
            <div class="emaildiv" title="Publisher@Curiouser.House"></div></a>
            
        <div class="footertown multiply"></div>
        <div class="copyright"></div><!-- Copyright notice in CSS ::after -->
        </footer>

        `
        }
    }

    window.customElements.define("ch-minibottomhalfmain", CHMiniBottomHalfMain)

