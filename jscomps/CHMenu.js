
class CHMenu extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
   <!-- STICKY MENU BEGIN -->
    <div class="menu center-this">
    
    <div class="stickygrid">
      <a class="menu-home" href="./"><div>HOME</div></a>
      <a class="menu-merch" href="./shop"><div>SHOP</div></a>
      <a class="menu-blog" href="./blog"><div>BLOG</div></a>
    </div>
    <div class="stickygridmobile">
    <a class="menu-home" href="./"><div>HOME</div></a>
      <a class="menu-merch" href="./shop"><div>SHOP</div></a>
      <a class="menu-blog" href="./blog"><div>BLOG</div></a>
    </div>
    
    </div>
    <!-- STICKY MENU END -->
        `
        }
    }

    window.customElements.define("ch-menu", CHMenu)

