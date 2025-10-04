

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class CHCovers extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
  <div class="grid-covers">
      <a href="book/pictureofdoriangray.html"><div class="grid-cover"><img src="images/cover_dorian.jpg" /></div></a>
      <a href="book/ludinthemist.html"><div class="grid-cover"><img src="images/cover_lud.jpg" /></div></a>
    </div>
    <div class="grid-covers">
      <a href="book/vampyre.html"><div class="grid-cover"><img src="images/cover_vampyre.jpg" /></div></a>
      <a href="book/flowerphantoms.html"><div class="grid-cover"><img src="images/cover_flowerphantoms.jpg" /></div></a>
    </div>
    <div class="grid-covers">
      <a href="book/madmanforerunnerprophet.html"><div class="grid-cover"><img src="images/cover_kahlil.jpg" /></div></a>
      <a href="book/venusinfurs.html"><div class="grid-cover"><img src="images/cover_venus.jpg" /></div></a>
    </div>
    <div class="grid-covers">
      <a href="book/mobydick.html"><div class="grid-cover"><img src="images/cover_mobydick.jpg" /></div></a>
      <div class="grid-cover"><img src="images/placeholder_dulac2.jpg" /></div>
    </div>
        `
        }
    }

    window.customElements.define("ch-covers", CHCovers)

