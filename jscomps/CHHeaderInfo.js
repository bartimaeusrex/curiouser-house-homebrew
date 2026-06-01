

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class CHHeaderInfo extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="minimalist.css" rel="stylesheet" />
    <link href="basics.css" rel="stylesheet" />
    <link href="styles.css" rel="stylesheet" />
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">

    <script defer src="jscomps/CHMiniTopHalfMain.js"></script>
    <script defer src="jscomps/CHMiniBottomHalfMain.js"></script>
    <script defer src="jscomps/CHMenu.js"></script>
    <script defer src="jscomps/CHMerch.js"></script>
    <script defer src="jscomps/CHShopifyProducts.js"></script>
    <script defer src="jscomps/CHHeaderInfo.js"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Anton&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Della+Respira&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Goudy+Bookletter+1911&family=Grenze+Gotisch:wght@100..900&family=Oswald:wght@200..700&family=Press+Start+2P&family=Schoolbell&family=WindSong:wght@400;500&display=swap" rel="stylesheet">

        `
        }
    }

    window.customElements.define("ch-headerinfo", CHHeaderInfo)

