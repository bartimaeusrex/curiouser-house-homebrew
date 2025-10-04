

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class CHSpinesHorizontal extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
    <div class="spine-images">
      <a href="book/pictureofdoriangray.html"><img src="images/spine_horiz_dorian.png" /></a>
      <a href="book/ludinthemist.html"><img src="images/spine_horiz_lud.png" /></a>
      <a href="book/vampyre.html"><img src="images/spine_horiz_vampyre.png" /></a>
      <a href="book/flowerphantoms.html"><img src="images/spine_horiz_flowerphantoms.png" /></a>
      <a href="book/madmanforerunnerprophet.html"><img src="images/spine_horiz_gibran.png" /></a>
      <a href="book/venusinfurs.html"><img src="images/spine_horiz_venus.png" /></a>
      <a href="book/mobydick.html"><img src="images/spine_horiz_moby.png" /></a>
    </div>
        `
        }
    }

    window.customElements.define("ch-spineshorizontal", CHSpinesHorizontal)

