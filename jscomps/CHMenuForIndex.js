
class CHMenuForIndex extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
    <div class="flex-menu">
      <a href="./catalog"><div class="flex-menuitem">BOOKS<em>!</em></div></a>
      <a href="./story"><div class="flex-menuitem">OUR STORY</div></a>
      <a href="./blog"><div class="flex-menuitem">WHAT'S NEW<em>?</em></div></a>
      <!-- <a href="./shop"><div class="flex-menuitem">SHOP<em>!</em></div></a> -->
    <!--   <a href="./"><div class="flex-menulogo"><img src="images/logo_red.png" /></div></a> -->
    </div>
        `
        }
    }

    window.customElements.define("ch-menuforindex", CHMenuForIndex)

