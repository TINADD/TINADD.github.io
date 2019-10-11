/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1568271990912.png",
    "revision": "f9aa4c10ba6d20032d05592e876e6df4"
  },
  {
    "url": "1568273028418.png",
    "revision": "413e304d5fcfc63c9edc824dfc4fa636"
  },
  {
    "url": "1568386892889.png",
    "revision": "2b1768ab38a59213967c424462f7575a"
  },
  {
    "url": "1568387274171.png",
    "revision": "707f630b0e159df9731e2cd48a51deeb"
  },
  {
    "url": "1568791830331.png",
    "revision": "b62892feb8277423b899412cc2f616f1"
  },
  {
    "url": "1568791864716.png",
    "revision": "87eaadb4b3ca4186d5610f0ab8913af9"
  },
  {
    "url": "1568791888261.png",
    "revision": "e3883b5aa8ee834c9ba363d93e24ceaa"
  },
  {
    "url": "1568791905676.png",
    "revision": "88d81fb4eadacb8dbc7c0ec36f81612f"
  },
  {
    "url": "1568792444506.png",
    "revision": "1290bf340912bd55697480184a476c91"
  },
  {
    "url": "1570689038672.png",
    "revision": "be67cc45fb44a19d468b13da04e6d7d1"
  },
  {
    "url": "1570689152242.png",
    "revision": "89433239cf8d7c4a5ce8e4ab0285478b"
  },
  {
    "url": "1570689259555.png",
    "revision": "ab41a1f0df3314e9473105c1ee4826f0"
  },
  {
    "url": "1570690078955.png",
    "revision": "697be69db656e23a41b3dfa95ff2fc0b"
  },
  {
    "url": "1570690111889.png",
    "revision": "381b578e9f4b96585449712447c2a183"
  },
  {
    "url": "1570690162781.png",
    "revision": "4a3ad6b8f92eaf839a3cbbb84201c60d"
  },
  {
    "url": "1570690181868.png",
    "revision": "5eddc35c81b5f106c471f1b93ab642f7"
  },
  {
    "url": "1570690373281.png",
    "revision": "eb6ff8377d3e703b2175c8e0924b0e13"
  },
  {
    "url": "1570690416815.png",
    "revision": "9caea296b502ab16b886a07ad3fc16b2"
  },
  {
    "url": "1570690446321.png",
    "revision": "966fee7b9b7010aff068892196dc4a51"
  },
  {
    "url": "1570690486794.png",
    "revision": "e231bbc5840d963d9e4889628e264a0f"
  },
  {
    "url": "1570691085458.png",
    "revision": "9c27b66f0356eb6e65e5216799d56fa9"
  },
  {
    "url": "1570691555125.png",
    "revision": "671fa401c5be286a13659839e2fd3487"
  },
  {
    "url": "1570691611510.png",
    "revision": "51f7c12b9522523cdcb48d497d302363"
  },
  {
    "url": "404.html",
    "revision": "f73fea3db43c69d1384f4e9beb78b1e3"
  },
  {
    "url": "assets/css/0.styles.32abe013.css",
    "revision": "ae2fb1149ad4f46ced7d3f87042c7a39"
  },
  {
    "url": "assets/img/1568791830331.b62892fe.png",
    "revision": "b62892feb8277423b899412cc2f616f1"
  },
  {
    "url": "assets/img/1568791864716.87eaadb4.png",
    "revision": "87eaadb4b3ca4186d5610f0ab8913af9"
  },
  {
    "url": "assets/img/1568791888261.e3883b5a.png",
    "revision": "e3883b5aa8ee834c9ba363d93e24ceaa"
  },
  {
    "url": "assets/img/1568791905676.88d81fb4.png",
    "revision": "88d81fb4eadacb8dbc7c0ec36f81612f"
  },
  {
    "url": "assets/img/1568792444506.1290bf34.png",
    "revision": "1290bf340912bd55697480184a476c91"
  },
  {
    "url": "assets/img/chumenshow.c0760750.jpg",
    "revision": "c0760750012cb5bf09aec3bcc054766a"
  },
  {
    "url": "assets/img/home-bg.f5396e30.jpg",
    "revision": "f5396e308f85adecbf70b6f59918b5bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f41c97e0.js",
    "revision": "e830e9433a38fa7f51bd2a5f20820806"
  },
  {
    "url": "assets/js/10.d91ec914.js",
    "revision": "760e6ed47d6a6cf77b9a5901d753b436"
  },
  {
    "url": "assets/js/11.550449f0.js",
    "revision": "a0472cd58cc007870ff8d197fa9443cf"
  },
  {
    "url": "assets/js/12.25635e0d.js",
    "revision": "1d3fb67054cafcd342d5d3f2f6469aff"
  },
  {
    "url": "assets/js/13.8d53457a.js",
    "revision": "80de3eb742e3124bd0f0cbaf5f0705ec"
  },
  {
    "url": "assets/js/14.1a52212c.js",
    "revision": "0318209419d4f7f7f578d8bf53614491"
  },
  {
    "url": "assets/js/15.568ec84d.js",
    "revision": "2da047c3531ca37c0a59a0eb757cd952"
  },
  {
    "url": "assets/js/16.b7e3e311.js",
    "revision": "df37d07ef224a88e57d53e54935afc6e"
  },
  {
    "url": "assets/js/17.917cdf1c.js",
    "revision": "f44b164d60b21e763bc740890896a3f3"
  },
  {
    "url": "assets/js/18.358f4651.js",
    "revision": "c2f3a81d174589fb4e6a1189c13a8565"
  },
  {
    "url": "assets/js/19.964d1b37.js",
    "revision": "096c64684a22e18069b50c7a0de8c153"
  },
  {
    "url": "assets/js/20.3cb39a62.js",
    "revision": "d9d5b9a3a82dc148bc53611d359f0677"
  },
  {
    "url": "assets/js/21.dd03c019.js",
    "revision": "e1bfa5a531a9d19220751bca748f14cc"
  },
  {
    "url": "assets/js/22.04f00787.js",
    "revision": "b1236d8b454f1664ea942a2d706d80ff"
  },
  {
    "url": "assets/js/23.69030ecf.js",
    "revision": "5e09230a3841aabcd2778b1700c432d2"
  },
  {
    "url": "assets/js/24.6f80e0b7.js",
    "revision": "23bab53a5d8ad307d1e9f5dc63cad65a"
  },
  {
    "url": "assets/js/25.4efe4c2c.js",
    "revision": "584ef42bc7d21d1d331bf84d81af421f"
  },
  {
    "url": "assets/js/26.f3c1027b.js",
    "revision": "1b7c18cb9cd89b69567ae2d69e9c97e4"
  },
  {
    "url": "assets/js/27.ada57397.js",
    "revision": "3cd659d7b29bd4555e5a46b958eae27e"
  },
  {
    "url": "assets/js/28.e433c184.js",
    "revision": "615984554a6cc70fcc9e245acbea6180"
  },
  {
    "url": "assets/js/29.41956688.js",
    "revision": "65e476674774f8dfcf335e9179826b16"
  },
  {
    "url": "assets/js/30.f8aea55c.js",
    "revision": "1d3dda0e9a99c231bdb94a65249567f0"
  },
  {
    "url": "assets/js/31.ba3a4a42.js",
    "revision": "edd2cdd5be498da72f7176e4c1c54870"
  },
  {
    "url": "assets/js/32.ef5442ac.js",
    "revision": "f5cce4d05682624ecb8a3b083ba17156"
  },
  {
    "url": "assets/js/33.abb3d556.js",
    "revision": "6127575717b07bf1f504a1d4e2f0cb34"
  },
  {
    "url": "assets/js/34.c9d24849.js",
    "revision": "7cb389cf75b964163f8f1f1094158f2f"
  },
  {
    "url": "assets/js/35.fcde76ec.js",
    "revision": "636ed6dabd49ded9b540d6ecfeb5a482"
  },
  {
    "url": "assets/js/36.a52b02e1.js",
    "revision": "14bb3236fa245b7cc048b2c1c6bf1003"
  },
  {
    "url": "assets/js/37.a9af78bb.js",
    "revision": "f5859276e231076bd60d59afd9a4c11e"
  },
  {
    "url": "assets/js/38.3b48abf2.js",
    "revision": "07abf0f44652565a18e77e97becdfada"
  },
  {
    "url": "assets/js/39.2245d9e9.js",
    "revision": "323fd9ae42054fd7b853b8337f3af27f"
  },
  {
    "url": "assets/js/4.a2f23fc0.js",
    "revision": "e0b2d00791f1fa0225644bc37cecfb68"
  },
  {
    "url": "assets/js/40.1dbeb94d.js",
    "revision": "7e5935030ca95b04938da012ac7da0f3"
  },
  {
    "url": "assets/js/41.71eb90be.js",
    "revision": "2dab2a938f4747a5a781b1ae608f52ff"
  },
  {
    "url": "assets/js/42.aa5924d8.js",
    "revision": "ee8acd65f25a8f8dd2cc102d14884c8b"
  },
  {
    "url": "assets/js/43.1db5ea99.js",
    "revision": "26a6b15fa22e69aabc94661eaacc1b05"
  },
  {
    "url": "assets/js/44.f50e971f.js",
    "revision": "1709ddc105285aa849f6ee2fe1e6b8ac"
  },
  {
    "url": "assets/js/45.eb7bd2fd.js",
    "revision": "c94a6f505050550e981c850346c694dd"
  },
  {
    "url": "assets/js/5.4cc2d397.js",
    "revision": "6e8b509b2f54e42211a3140a8aa0ac9e"
  },
  {
    "url": "assets/js/6.847b890c.js",
    "revision": "6b042467d2c570c6a7a9ca07c623c612"
  },
  {
    "url": "assets/js/7.f77301b3.js",
    "revision": "4a068dcba51647b0a4db3a9ed23cc7d7"
  },
  {
    "url": "assets/js/8.4130173d.js",
    "revision": "ed07349d627fb0e3a56cf5c27633579f"
  },
  {
    "url": "assets/js/9.a7dc4e78.js",
    "revision": "2c17928f14a15bc07507821432e6f1b2"
  },
  {
    "url": "assets/js/app.aab2e043.js",
    "revision": "4d751e1d9e4a40f0f72b70f1ff0d420b"
  },
  {
    "url": "assets/js/vendors~flowchart.8b30b4f0.js",
    "revision": "0b8d6e9e00ced0ecd16c511d6f92acec"
  },
  {
    "url": "category/index.html",
    "revision": "f691305c25be1fff598d2ca0d438fce4"
  },
  {
    "url": "category/leetcode.html",
    "revision": "1ee4a831948c92d3413206268d3ce70e"
  },
  {
    "url": "category/启发式算法.html",
    "revision": "d5ef6a5a38629df08442ea97ee560cc5"
  },
  {
    "url": "category/外语.html",
    "revision": "b95b7a6c772ebf8973ef9ce882a9e701"
  },
  {
    "url": "category/电影.html",
    "revision": "fcabc99af3b7d7b905995a53cd16b49e"
  },
  {
    "url": "category/算法导论.html",
    "revision": "1a24d53cd88540edc21495a1a59f483f"
  },
  {
    "url": "category/经验.html",
    "revision": "b598adfb72b8f63221769afcc3f70be3"
  },
  {
    "url": "category/编程语言.html",
    "revision": "e5b84cd8ba9f1ebb399132ebffb026ad"
  },
  {
    "url": "category/美剧.html",
    "revision": "6aed3f333686cb578ab16f52c1e32780"
  },
  {
    "url": "category/论文排版.html",
    "revision": "83864f8b328ca296083e5b55b1f4d456"
  },
  {
    "url": "category/论文笔记.html",
    "revision": "773fce9cf645997a9fa846a0748b5398"
  },
  {
    "url": "category/读书.html",
    "revision": "f8e905efa4f3f5bbcb7f6bc1dbb7bb90"
  },
  {
    "url": "category/课程笔记.html",
    "revision": "8a5de5c2523a8d1f1cc74b4a39601cd4"
  },
  {
    "url": "category/面试.html",
    "revision": "ac1a4449100747e45a25d9fa3e31566e"
  },
  {
    "url": "chumenshow.jpg",
    "revision": "c0760750012cb5bf09aec3bcc054766a"
  },
  {
    "url": "head.png",
    "revision": "f4a1e17b51f629a293319b2d01a9f2cc"
  },
  {
    "url": "hero.png",
    "revision": "191f152823ae5e57f8c520b8d9fafaba"
  },
  {
    "url": "icons/android-chrome-192x192 .png",
    "revision": "f4a1e17b51f629a293319b2d01a9f2cc"
  },
  {
    "url": "icons/android-chrome-512x512 .png",
    "revision": "f4a1e17b51f629a293319b2d01a9f2cc"
  },
  {
    "url": "index.html",
    "revision": "d0096c6e5ef9a2f5d346dc0d7700c18d"
  },
  {
    "url": "tag/algorithms.html",
    "revision": "f66dfa15e79d0451475a674981ff57ce"
  },
  {
    "url": "tag/A星算法.html",
    "revision": "930909437f658ee1c4a538b7f292fc87"
  },
  {
    "url": "tag/books.html",
    "revision": "a17f5fb721b5daeaa4cad08f175dc3ad"
  },
  {
    "url": "tag/c++.html",
    "revision": "23689cbececae233d36418291dc5dc2d"
  },
  {
    "url": "tag/CCP.html",
    "revision": "9bc6c66f83d87fe2e965d01163b60614"
  },
  {
    "url": "tag/course.html",
    "revision": "7f6759f69224744e1d083f3111367bcd"
  },
  {
    "url": "tag/index.html",
    "revision": "1104cc97f885de3d85e7a782c2062d2b"
  },
  {
    "url": "tag/interview.html",
    "revision": "be7881c75bae964ab0546b1c31159738"
  },
  {
    "url": "tag/leetcode-cpp.html",
    "revision": "e7ff33dda758dc9759637b43c19c8b97"
  },
  {
    "url": "tag/leetcode-python.html",
    "revision": "c789592cac01a8ad0764f3831d95df6d"
  },
  {
    "url": "tag/leetcode.html",
    "revision": "cdb43078835576c55f4f522da69ce8b0"
  },
  {
    "url": "tag/paper.html",
    "revision": "015f84a6a1d612e53af5d34bc1ccaab5"
  },
  {
    "url": "tag/python.html",
    "revision": "090832faaf3c237f7543dc682c07dca4"
  },
  {
    "url": "tag/Tex.html",
    "revision": "eb47619b2e9549fc9b6ae6f5b5ddcfc2"
  },
  {
    "url": "tag/tips.html",
    "revision": "4d5e1323cebaa8d1834d3ff341490552"
  },
  {
    "url": "tag/words.html",
    "revision": "f9fae924a5dc734630fa5d000b75f5b0"
  },
  {
    "url": "tag/数据结构.html",
    "revision": "9cd1e1f47d1296a875e5055b521dc2ee"
  },
  {
    "url": "tag/电影.html",
    "revision": "e946574f66f3438cfdaf622cb78eb780"
  },
  {
    "url": "tag/美剧.html",
    "revision": "6911c80633f1ba82224f12c710af9d4a"
  },
  {
    "url": "timeLine/index.html",
    "revision": "58454ee4e8d96ce58037ca38d21c5921"
  },
  {
    "url": "views/guide.html",
    "revision": "aee03da4170df528ad6c3a6e4effd613"
  },
  {
    "url": "views/hust/paper/自适应禁忌搜索课程时间表-teacher.html",
    "revision": "0be5d0edae88f45ad73e6cc6178d730d"
  },
  {
    "url": "views/hust/带约束的聚类问题/容量约束聚类问题.html",
    "revision": "4fc8c5d88c6ec6ee1257137bd27f53bd"
  },
  {
    "url": "views/hust/计算智能.html",
    "revision": "b719da1eb985ee80d3c306ed5f8f90a5"
  },
  {
    "url": "views/hust/论文排版Tex/LaTex，pdflatex，xelatex，xetex等的区别和关系 - 副本.html",
    "revision": "fa8b087fb3d6e19b00815d453abdd24c"
  },
  {
    "url": "views/hust/论文排版Tex/LaTex入门.html",
    "revision": "b1632cabce74b4b17e1a0c6d7585ebd9"
  },
  {
    "url": "views/hust/论文排版Tex/LaTex字体设置.html",
    "revision": "4bff4d4327cb8eb64a7cbe6805f9d0e5"
  },
  {
    "url": "views/myfavo/books/墨菲定律.html",
    "revision": "e1db6695bf44e947e6697c8261fac39f"
  },
  {
    "url": "views/myfavo/movies/movies.html",
    "revision": "bdd5eeb1c9687689af1352ac2222a83f"
  },
  {
    "url": "views/myfavo/美剧/Dead to me.html",
    "revision": "e2fa9bc10999e9a3e3f145b03eff86bc"
  },
  {
    "url": "views/technology/c++/Effective C++.html",
    "revision": "9bce59b9dda2ad8eff30e382372e3417"
  },
  {
    "url": "views/technology/git.html",
    "revision": "6958cddb68cf57a2a2f7a59fb015c7cb"
  },
  {
    "url": "views/technology/leetcode/133. Clone Graph.html",
    "revision": "8ff3490a5d1a618aee5606be3f968ae1"
  },
  {
    "url": "views/technology/leetcode/24. Swap Nodes in Pairs-by cpp - 副本 (3).html",
    "revision": "afaf78ac3e14143515e441a9919a20b1"
  },
  {
    "url": "views/technology/leetcode/24. Swap Nodes in Pairs-by cpp.html",
    "revision": "77f68f999d154cfa5bb6eed2b7d754c8"
  },
  {
    "url": "views/technology/leetcode/24.SwapNodesinPairs_by py.html",
    "revision": "2ba5c611b5401c06ec07ee627942b28d"
  },
  {
    "url": "views/technology/leetcode/61.Rotate List-by cpp.html",
    "revision": "70f5495ca8409ee9e64f2d3bc283c6ec"
  },
  {
    "url": "views/technology/leetcode/61.Rotate List-by py.html",
    "revision": "6bac7835010601d72adee3d5b3b97cfe"
  },
  {
    "url": "views/technology/leetcode/92.ReverseListii-by cpp.html",
    "revision": "3bde9ac3ed678c7aba169733906224c5"
  },
  {
    "url": "views/technology/leetcode/reverseList - 副本.html",
    "revision": "89e0b8c9a990d7b9145a52534b7fce17"
  },
  {
    "url": "views/technology/leetcode/reverseList.html",
    "revision": "c330ec0df93215bede82918bc15c1413"
  },
  {
    "url": "views/technology/python/python_debug.html",
    "revision": "2215aa8deef42c99c47ef7a203e254b5"
  },
  {
    "url": "views/technology/python/python_time.html",
    "revision": "70c59d82a89d967fc86a0c9b36bf53ca"
  },
  {
    "url": "views/technology/python/python_函数传参.html",
    "revision": "2f179ebab4b54691bfc705780a1403b8"
  },
  {
    "url": "views/technology/python/python_异常处理.html",
    "revision": "cb5c2973551bebc59226748aca073ff0"
  },
  {
    "url": "views/technology/python/python.html",
    "revision": "1c759ebea6c0e5b3fced7b8255293971"
  },
  {
    "url": "views/technology/启发式算法/A星算法.html",
    "revision": "0297eac694f9817e71b55b5a3e85cf97"
  },
  {
    "url": "views/technology/算法导论/21.用于不相交集合的数据结构.html",
    "revision": "bb42326115359b428ea2457a3953f24d"
  },
  {
    "url": "views/technology/算法导论/Graph.html",
    "revision": "b4cdc5e3915bb5dbfdd9e5a37dcaa15f"
  },
  {
    "url": "views/外语/文献英语单词积累.html",
    "revision": "97befbfc2f457df006f8d0a0e4a36afa"
  },
  {
    "url": "views/技术杂谈/c++智能指针.html",
    "revision": "4a56ee0ec06baa18f564925bcd628045"
  },
  {
    "url": "views/技术杂谈/深拷贝浅拷贝.html",
    "revision": "348e5b61b691790333bab4120c276d46"
  },
  {
    "url": "views/技术杂谈/积累的小知识点.html",
    "revision": "5672678e7a27f5f14d2cb27b98d1d392"
  },
  {
    "url": "views/面试经验/Interviews.html",
    "revision": "c3d60505700b194aa3a617b5052b7a21"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
