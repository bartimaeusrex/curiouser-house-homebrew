
class CHMiniTopHalf extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
      <div class="center-this multiply">
        <a href="../">
        <div><img src="../images/logo_blankbg.png" class="h-6em logo-header" title="Curiouser House Publishing logo" /></div>
        <img src="../images/chp_humane_negative_long.png" class="chp_humane_negative multiply center-this" title="Curiouser House Publishing" /></a><br />
        <div class="subtitlediv" title="Rediscovering classic and obscure literature." ></div>
        <img src="../images/fleuronhouse.png" class="h-2em fleuron center-this" title="decorative fleuron" />
        <br />
      </div>
        `
        }
    }

    window.customElements.define("ch-minitophalf", CHMiniTopHalf)

