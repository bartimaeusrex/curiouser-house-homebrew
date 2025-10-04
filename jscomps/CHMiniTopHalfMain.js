

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class CHMiniTopHalfMain extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
      <div class="center-this multiply">
        <a href="index.html">
        <div><img src="images/logo_blankbg.png" class="h-6em logo-header" title="Curiouser House Publishing logo" /></div>
        <img src="images/chp_humane_negative_long.png" class="chp_humane_negative multiply center-this" title="Curiouser House Publishing" /></a><br />
        <div class="subtitlediv"></div>
        <img src="images/fleuronhouse.png" class="h-2em fleuron center-this" title="decorative fleuron house" />
        <br />
      </div>
        `
        }
    }

    window.customElements.define("ch-minitophalfmain", CHMiniTopHalfMain)

