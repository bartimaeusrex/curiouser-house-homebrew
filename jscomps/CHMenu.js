
class CHMenu extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
   <!-- STICKY MENU BEGIN -->
    <div class="menu center-this">
    
    <div class="stickygrid">
      <a class="menu-home" href="index.html"><div>HOME</div></a>
      <a class="menu-merch" href="merch.html"><div>MERCH</div></a>
      <a class="menu-blog" href="blog.html"><div>BLOG</div></a>
    </div>
    <div class="stickygridmobile">
    <a class="menu-home" href="index.html"><div>HOME</div></a>
      <a class="menu-merch" href="merch.html"><div>MERCH</div></a>
      <a class="menu-blog" href="blog.html"><div>BLOG</div></a>
    </div>
    
    </div>
    <!-- STICKY MENU END -->
        `
        }
    }

    window.customElements.define("ch-menu", CHMenu)

