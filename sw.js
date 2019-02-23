/* global workbox:false */

self.importScripts('/assets/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/img/admin.jpg",
    "revision": "b606bce91f3c5e50fe06abc9ef186344"
  },
  {
    "url": "assets/img/albert-dera-397063-unsplash.jpg",
    "revision": "e9e28c1ea1230a420035f4d5c1c7f184"
  },
  {
    "url": "assets/img/anthony-delanoix-8509-unsplash.jpg",
    "revision": "e26cc90d9f36ebd6bd42c7b7d3f745bd"
  },
  {
    "url": "assets/img/brandon-holmes-199535-unsplash.jpg",
    "revision": "1a492af24c0320ef7b8e3730df9095c6"
  },
  {
    "url": "assets/img/david-rodrigo-470187-unsplash.jpg",
    "revision": "8d873c1b1614b0da7a2da85b31ebc15b"
  },
  {
    "url": "assets/img/f1.jpg",
    "revision": "9f17651c723592d087c295de59a24b19"
  },
  {
    "url": "assets/img/facebook.png",
    "revision": "c541960fbc49644850fb5bac7ac1964a"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-114x114.png",
    "revision": "129a9bbfcf6311d1e6f9ee4334c04a74"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-120x120.png",
    "revision": "6988a40e36ecff6b3f2e1ed47c249732"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-144x144.png",
    "revision": "79e1a9726dc62653509a9b821b5c7f85"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-152x152.png",
    "revision": "5d9c7a9e3305f4c47433d3f5ce6028b4"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-57x57.png",
    "revision": "2dc5caec2437a1932108c25a6da31217"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-60x60.png",
    "revision": "aacc9e0e54c66d57a47df60fbb956aa0"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-72x72.png",
    "revision": "6a31990331ea5262a6e16e8380908c56"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-76x76.png",
    "revision": "c72beb76ac50b26e0d110ad28b9c019d"
  },
  {
    "url": "assets/img/favicons/favicon-128.png",
    "revision": "de70db50730c4fbc9b36aec9201d6aa1"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "d590edb7762b431ff43d432d0794eed9"
  },
  {
    "url": "assets/img/favicons/favicon-196x196.png",
    "revision": "2fbfe3ae3520aaa51864b91e2a87e412"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "8f79c6863048f10b3568e66004fb4082"
  },
  {
    "url": "assets/img/favicons/favicon-96x96.png",
    "revision": "1414daacab4c16aa9b7442922ca2f73c"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "79e1a9726dc62653509a9b821b5c7f85"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "5ae18d48b29dec7b3c947ab2662a2dbf"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "f8302ad43d2466b73744ff5f58912bdb"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "be1b01debfc080b6418ccbaa9748df77"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "de70db50730c4fbc9b36aec9201d6aa1"
  },
  {
    "url": "assets/img/general-about-us-1.jpg",
    "revision": "4a3f770fd5132afbb8443d4e4a67838a"
  },
  {
    "url": "assets/img/general-about-us-2.jpg",
    "revision": "691c58c55d1d5607a7c6043c4ee28a66"
  },
  {
    "url": "assets/img/general-faq-1.jpg",
    "revision": "f55c1a47a02b181abc54edc8db0a5ad3"
  },
  {
    "url": "assets/img/general-faq-2.jpg",
    "revision": "41f76fe878be4b7b32b740b2eda16abd"
  },
  {
    "url": "assets/img/general-home-2.jpg",
    "revision": "b2e43b64c3154770734a8555349bfadd"
  },
  {
    "url": "assets/img/general-home-3.jpg",
    "revision": "8074f595a8e401f02a658b4491a77ef9"
  },
  {
    "url": "assets/img/general-home-4-mobile.jpg",
    "revision": "7fa0d6f4253bb68d90c7cd2d0ff5cce5"
  },
  {
    "url": "assets/img/general-home-4.jpg",
    "revision": "eecb225423e76ff76a413d6aab76fb96"
  },
  {
    "url": "assets/img/general-home-5.jpg",
    "revision": "f0baba56386e236008ce75eeb00f6ac4"
  },
  {
    "url": "assets/img/general-our-team-1.jpg",
    "revision": "f1009e89769891f3bf2b03e4ed9a03a9"
  },
  {
    "url": "assets/img/general-portfolio-1.jpg",
    "revision": "d93c15f3ee9fb8ff2ac44dbbfdfeac97"
  },
  {
    "url": "assets/img/general-portfolio-2.jpg",
    "revision": "9c623eaa2ca8878af2bf130b9102aaa7"
  },
  {
    "url": "assets/img/general-pricing-1.jpg",
    "revision": "6e203a9e3b20c51f2e6adb95911a856a"
  },
  {
    "url": "assets/img/general-pricing-2.jpg",
    "revision": "bc7ef4e5d8df51fb265e6b057bea3daa"
  },
  {
    "url": "assets/img/general-service-1.jpg",
    "revision": "6f10f8241955ea4c74487578c85422ed"
  },
  {
    "url": "assets/img/general-service-2.jpg",
    "revision": "a242c71f70923339a61dbd78a7bb3073"
  },
  {
    "url": "assets/img/general.jpg",
    "revision": "a5b1adc3bdbb3780f14a83a7556400be"
  },
  {
    "url": "assets/img/google.png",
    "revision": "54b30123af76bc6fe7759b3498002cb0"
  },
  {
    "url": "assets/img/igor-ovsyannykov-211542-unsplash.jpg",
    "revision": "5de56037c074dff9711f49afe4ea006a"
  },
  {
    "url": "assets/img/jess-watters-559478-unsplash.jpg",
    "revision": "fa4d48a4d563aca9e71cab58ae7d7ca7"
  },
  {
    "url": "assets/img/joshua-fuller-285070-unsplash.jpg",
    "revision": "e9aeeb1b8f3925f2d634a0a26d615523"
  },
  {
    "url": "assets/img/m1.jpg",
    "revision": "6698f6dc8fde1754ddbaf78d9bc24647"
  },
  {
    "url": "assets/img/m2.jpg",
    "revision": "f9a7badb451d5b20c5a64b33afc7caa8"
  },
  {
    "url": "assets/img/masaaki-komori-597700-unsplash.jpg",
    "revision": "feedb40eb88b75c82d8bdfd893f41fff"
  },
  {
    "url": "assets/img/matese-fields-233175-unsplash.jpg",
    "revision": "d33b10d04eaf060c0798991ea7758e3e"
  },
  {
    "url": "assets/img/microsoft.png",
    "revision": "c117a0bda103aeb25c145a71b0b8ac5a"
  },
  {
    "url": "assets/img/oscar-sutton-452242-unsplash.jpg",
    "revision": "408fbcce0cde9704a26d72e676f52d74"
  },
  {
    "url": "assets/img/pastel.jpg",
    "revision": "51d659b7a30f1c909d4ce669e4d96b32"
  },
  {
    "url": "assets/img/rawpixel-com-274860-unsplash-1.jpg",
    "revision": "b00741113c76cdd6ab708c7a8aa8eec9"
  },
  {
    "url": "assets/img/rawpixel-com-274860-unsplash-2.jpg",
    "revision": "69e3fb0d16b8c7d0560e2c1bc6bfc62e"
  },
  {
    "url": "assets/img/rawpixel-com-274860-unsplash-3.jpg",
    "revision": "d2cecf193412e06198948c470c398343"
  },
  {
    "url": "assets/img/rawpixel-com-274860-unsplash.jpg",
    "revision": "5a89d4f7ca86500469a9d5d85ccd9db1"
  },
  {
    "url": "assets/img/space.png",
    "revision": "a7aecbe08130c49f7235c1b1d0fe2678"
  },
  {
    "url": "assets/img/spencer-imbrock-496485-unsplash.jpg",
    "revision": "2261101f490bc44bb6130eeda2a26f36"
  },
  {
    "url": "assets/img/technoart-text.png",
    "revision": "8cc4003870ed06985a8abc313727435a"
  },
  {
    "url": "assets/img/technoart.png",
    "revision": "8c2c74763b5a2e0dd3ef0f50ce6849b0"
  },
  {
    "url": "assets/img/teddy-petrosky-430688-unsplash.jpg",
    "revision": "707a5a0f6aee7f0ee23984152eeccaec"
  },
  {
    "url": "assets/img/thomas-vimare-111199-unsplash.jpg",
    "revision": "b0da63ebd9ab228c4336d68a8aad85bd"
  },
  {
    "url": "assets/img/tom-barrett-525188-unsplash.jpg",
    "revision": "318d724fd4538a27cb91fbb76d963224"
  },
  {
    "url": "assets/js/docs.min.js",
    "revision": "8b00bce2eedff101b08382a48b517dec"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "c13e00dd5f11bbdbe66a55278aaef3c3"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "48f460cd4d1081a37afa962d26530617"
  },
  {
    "url": "assets/vendor/anchorjs/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/vendor/chart.js/Chart.bundle.min.js",
    "revision": "88a41ecd6743bfa85e37f4d936447054"
  },
  {
    "url": "assets/vendor/clipboard.js/clipboard.min.js",
    "revision": "3f3688138a1b9fc4ef669ce9056b6674"
  },
  {
    "url": "assets/vendor/font-awesome/css/font-awesome.css",
    "revision": "c495654869785bc3df60216616814ad1"
  },
  {
    "url": "assets/vendor/font-awesome/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "assets/vendor/font-awesome/fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "assets/vendor/rainbow/css/dark.css",
    "revision": "5a7506c994bf2a50a1b3ff7037ee886f"
  },
  {
    "url": "assets/vendor/rainbow/css/light.css",
    "revision": "c5c2751a3e66c2f41db7724c5ec25328"
  },
  {
    "url": "assets/vendor/rainbow/js/language/c.js",
    "revision": "9a3f98888ce900910fa92299db90a99b"
  },
  {
    "url": "assets/vendor/rainbow/js/language/coffeescript.js",
    "revision": "7eb5b56c3c74e9e1a3d9049cd021464c"
  },
  {
    "url": "assets/vendor/rainbow/js/language/csharp.js",
    "revision": "b20db477c1e28d1447a49653880d66ce"
  },
  {
    "url": "assets/vendor/rainbow/js/language/css.js",
    "revision": "2b85c51ad8681010728d70f5da2a2ecf"
  },
  {
    "url": "assets/vendor/rainbow/js/language/d.js",
    "revision": "a9ea2ad9f092a37343a7944fd7ea6fab"
  },
  {
    "url": "assets/vendor/rainbow/js/language/generic.js",
    "revision": "9d1b578f497a1c625b348df76a749cb8"
  },
  {
    "url": "assets/vendor/rainbow/js/language/go.js",
    "revision": "387f67dc751b4de0e512ede7372f1fd0"
  },
  {
    "url": "assets/vendor/rainbow/js/language/haskell.js",
    "revision": "3f6a0509a925d39d0d35c1e9e8481ef6"
  },
  {
    "url": "assets/vendor/rainbow/js/language/html.js",
    "revision": "f61a1db3a7f269d6f63195206473d2d8"
  },
  {
    "url": "assets/vendor/rainbow/js/language/java.js",
    "revision": "8ab958dfbe3540d44b03f9a50b0792af"
  },
  {
    "url": "assets/vendor/rainbow/js/language/javascript.js",
    "revision": "cc2728721997d2663ccb6dc0ee978b24"
  },
  {
    "url": "assets/vendor/rainbow/js/language/lua.js",
    "revision": "73652f99b4a7f709a663d2759f49c299"
  },
  {
    "url": "assets/vendor/rainbow/js/language/php.js",
    "revision": "b2945771993cf9f8fbc354e0ceedbaa0"
  },
  {
    "url": "assets/vendor/rainbow/js/language/python.js",
    "revision": "2b0a4d1e2f386a9ea028613aae88fa07"
  },
  {
    "url": "assets/vendor/rainbow/js/language/r.js",
    "revision": "02c9d1e2ad0dc0374edd59b8131436b5"
  },
  {
    "url": "assets/vendor/rainbow/js/language/ruby.js",
    "revision": "36d895a594eac4164162fdde8ecf7003"
  },
  {
    "url": "assets/vendor/rainbow/js/language/scheme.js",
    "revision": "7710ff810e4d673aa6d7ec1b03e73bc2"
  },
  {
    "url": "assets/vendor/rainbow/js/language/shell.js",
    "revision": "72aebb651c23a5d520086376eb9976ce"
  },
  {
    "url": "assets/vendor/rainbow/js/language/smalltalk.js",
    "revision": "290a4018add221d667c621f4339b1291"
  },
  {
    "url": "assets/vendor/rainbow/js/rainbow.min.js",
    "revision": "1576c21592c8834d7c2d3314998ccf9b"
  },
  {
    "url": "assets/vendor/syntax/syntax.css",
    "revision": "bb5ae2810b7bed63da1e9d0604db691c"
  },
  {
    "url": "assets/vendor/workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/technoart.css",
    "revision": "74860c8254e4b99b4e28190cb0a2c57a"
  },
  {
    "url": "dist/css/technoart.min.css",
    "revision": "5836eb8582736432be818828ff601740"
  },
  {
    "url": "dist/js/technoart.js",
    "revision": "b74183c984beb7583269b8bd1e8abc55"
  },
  {
    "url": "dist/js/technoart.min.js",
    "revision": "e1685adb6ae204a76498bc4b91b18b95"
  },
  {
    "url": "guide/id/index.html",
    "revision": "33e6102d953a15c9ae47f765448dd7f9"
  },
  {
    "url": "guide/index.html",
    "revision": "7c7dd59c1a6bf2a946cf7054aeb0217d"
  },
  {
    "url": "index.html",
    "revision": "fc710a7a7f4a5a866c27698cc87af931"
  },
  {
    "url": "redirects.json",
    "revision": "99914b932bd37a50b983c5e7c90ae93b"
  },
  {
    "url": "starter-template/admin/index.html",
    "revision": "9a7df382d13c6eb15565aaf3d3c5c1d2"
  },
  {
    "url": "starter-template/general/about-us-1/index.html",
    "revision": "749882b033e84bfe9dd1cb0e99851ea1"
  },
  {
    "url": "starter-template/general/about-us-2/index.html",
    "revision": "85fd85f07d0094ede928165868d00bd2"
  },
  {
    "url": "starter-template/general/cheatsheet/index.html",
    "revision": "d91d0df7a5c36110df1de9523f647400"
  },
  {
    "url": "starter-template/general/faq-1/index.html",
    "revision": "e705acf43b3a58db627850176fe303aa"
  },
  {
    "url": "starter-template/general/faq-2/index.html",
    "revision": "0793790c8001af8e6353c52dad050c99"
  },
  {
    "url": "starter-template/general/home-2/index.html",
    "revision": "f61f9473c2539bf2131afc53b24b411e"
  },
  {
    "url": "starter-template/general/home-3/index.html",
    "revision": "ff43e2a0b23c18a60944d52a55515934"
  },
  {
    "url": "starter-template/general/home-4/index.html",
    "revision": "4a390dd0797612b2b7c0355be7716b97"
  },
  {
    "url": "starter-template/general/home-5/index.html",
    "revision": "5bbe04b535689f931b9f0ef469b9972a"
  },
  {
    "url": "starter-template/general/index.html",
    "revision": "b7201960924e993b3cba743ce1aeb1a4"
  },
  {
    "url": "starter-template/general/our-team-1/index.html",
    "revision": "df1c8c6734df85cf68ba6b5955621fc3"
  },
  {
    "url": "starter-template/general/portfolio-1/index.html",
    "revision": "9c825289b5aa7b928662a93ec1f3de2a"
  },
  {
    "url": "starter-template/general/portfolio-2/index.html",
    "revision": "228518a53702be9885347f3852bf0040"
  },
  {
    "url": "starter-template/general/pricing-1/index.html",
    "revision": "2b6ee45926803928532955af5b2caa1c"
  },
  {
    "url": "starter-template/general/pricing-2/index.html",
    "revision": "e58c0925834ee5e941c4fdfee38df229"
  },
  {
    "url": "starter-template/general/service-1/index.html",
    "revision": "a4b4f0882520456de7c2489002172a80"
  },
  {
    "url": "starter-template/general/service-2/index.html",
    "revision": "32db800796307204c97e88f456fcb6f0"
  },
  {
    "url": "starter-template/index.html",
    "revision": "bbe97ee7056d61545633b8007e44d610"
  }
])
