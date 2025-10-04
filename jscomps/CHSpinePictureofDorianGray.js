

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class CHSpinePictureofDorianGray extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
      <a href="pictureofdoriangray.html"><img src="../images/spine_horiz_dorian.png" /></a>
        `
        }
    }

    window.customElements.define("ch-spinepictureofdoriangray", CHSpinePictureofDorianGray)

