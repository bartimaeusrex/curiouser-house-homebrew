

// I DON'T THINK THIS WORKED ANYWAY, BUT I'M SWITCHING REINHARTBOOKS TO CURIOUSER HOUSE MYSHOPIFY WHICH MIGHT EFFECT SOME OF THE LINKS, POSSIBLY MAYBE

class CHShopifyProducts extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `

      <div class="multiply grid-merch center-this">



<div id='product-component-1759584152519'></div>
<script type="text/javascript">
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'reinhartbooks.myshopify.com',
      storefrontAccessToken: '610a7b442285ee789349562e9f45512f',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6870388998196',
        node: document.getElementById('product-component-1759584152519'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Crimson Text, serif"
      },
      "price": {
        "font-weight": "bold"
      },
      "compareAt": {
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Crimson Text"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      }
    }
  },
  "option": {},
  "cart": {},
  "toggle": {}
},
      });
    });
  }
})();
/*]]>*/
</script>

      </div>

        `
        }
    }

    window.customElements.define("ch-shopifyproducts", CHShopifyProducts)

