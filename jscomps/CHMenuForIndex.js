
class CHMenuForIndex extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
    <div class="flex-menu">
      <a href="catalog.html"><div class="flex-menuitem">BOOKS<em>!</em></div></a>
      <a href="story.html"><div class="flex-menuitem">OUR STORY</div></a>
      <a href="blog.html"><div class="flex-menuitem">WHAT'S NEW<em>?</em></div></a>
      <!-- <a href="merch.html"><div class="flex-menuitem">MERCH<em>!</em></div></a> -->
    <!--   <a href="index.html"><div class="flex-menulogo"><img src="images/logo_red.png" /></div></a> -->
    </div>
        `
        }
    }

    window.customElements.define("ch-menuforindex", CHMenuForIndex)

