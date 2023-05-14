const request = require('supertest');
const express = require('express');
var dotenv = require('dotenv');
dotenv.config()
var app = 'localhost:'+process.env.LOCALHOSTPORT
 
//////////////////////////////////////////////////
////       TEST ALL STATIC HTML PAGES        //// 
////////////////////////////////////////////////

var siteIndex = [
  {
    "loc": "/"
  },
  {
    "loc": "/database"
  },
  {
    "loc": "/tools"
  },
  {
    "loc": "/shop"
  },
  {
    "loc": "/forms"
  },
  {
    "loc": "/configuration"
  },
  {
    "loc": "/assemblies"
  },
  {
    "loc": "/components"
  },
  {
    "loc": "/gamedata"
  },
  {
    "loc": "/gameform"
  },
  {
    "loc": "/semini/navigation"
  },
  {
    "loc": "/semini/view"
  },
  {
    "loc": "/issues/view"
  },
  {
    "loc": "/terms"
  },
  {
    "loc": "/Privacy"
  },
  {
    "loc": "/privacy"
  },
  {
    "loc": "/contact"
  },
  {
    "loc": "/database/docs"
  },
  {
    "loc": "/database/58da88e3db8ec8142c30e76b"
  },
  {
    "loc": "/database/58d2111ed9c22811c4df3a07"
  },
  {
    "loc": "/database/5903336fe39d634468d2b7d1"
  },
  {
    "loc": "/database/58fc4c037a525938d01fbd45"
  },
  {
    "loc": "/database/58fc4ad67a525938d01fbd3b"
  },
  {
    "loc": "/database/58f89dee6baa3a33ccff5273"
  },
  {
    "loc": "/database/58fb2593065ea331f0acf7c6"
  },
  {
    "loc": "/database/59008efb1f713b350cab33a2"
  },
  {
    "loc": "/database/59118ce6d766933418881e93"
  },
  {
    "loc": "/database/58d61ec07da56934d434b78d"
  },
  {
    "loc": "/database/591005ddd0c87d43a49513fc"
  },
  {
    "loc": "/database/5a51bb764e84af45d0cdb158"
  },
  {
    "loc": "/database/5b17b5a19d81344ba4548f4a"
  },
  {
    "loc": "/database/5910063fd0c87d43a4951406"
  },
  {
    "loc": "/database/5b17b6009d81344ba4548f4e"
  },
  {
    "loc": "/database/5b8437ec37b1907c442fec30"
  },
  {
    "loc": "/database/5de0ac33fc113706904cb11b"
  },
  {
    "loc": "/database/5de0b8e9fc113706904cb12c"
  },
  {
    "loc": "/database/5de0b999fc113706904cb136"
  },
  {
    "loc": "/database/59100a40d0c87d43a495141b"
  },
  {
    "loc": "/database/59100c5bd0c87d43a4951461"
  },
  {
    "loc": "/database/59100dd5d0c87d43a495149f"
  },
  {
    "loc": "/database/58feff2d73c642469cf8f382"
  },
  {
    "loc": "/database/58d61e657da56934d434b78c"
  },
  {
    "loc": "/database/5b221b66f355272850e86b81"
  },
  {
    "loc": "/database/5e2048f797797a2394b08b53"
  },
  {
    "loc": "/database/5a50a0c24e84af45d0cdb060"
  },
  {
    "loc": "/database/5a50a16e4e84af45d0cdb06a"
  },
  {
    "loc": "/database/5c4c0d6c76538e2870814fd0"
  },
  {
    "loc": "/database/5c4c188f76538e287081500b"
  },
  {
    "loc": "/database/5c4c18db76538e287081500e"
  },
  {
    "loc": "/database/5c4c0d8a76538e2870814fd1"
  },
  {
    "loc": "/database/5dc1bdb0d8f9bc25f8db3fe4"
  },
  {
    "loc": "/database/5cde42cb65d4f43574b2257e"
  },
  {
    "loc": "/database/5cdcdddc521ef13fe8810d58"
  },
  {
    "loc": "/database/5cdcdf93521ef13fe8810d6a"
  },
  {
    "loc": "/database/5cdcdf69521ef13fe8810d67"
  },
  {
    "loc": "/database/5cdcdec0521ef13fe8810d61"
  },
  {
    "loc": "/database/5cea11b1e586822b48045ddb"
  },
  {
    "loc": "/database/5cea11d7e586822b48045ddd"
  },
  {
    "loc": "/database/5b29ea97d16db96de8de3a8b"
  },
  {
    "loc": "/database/5b29efb4d16db96de8de3ab7"
  },
  {
    "loc": "/database/5cbeab170682dd4ff426c772"
  },
  {
    "loc": "/database/5cbeb0580682dd4ff426c77f"
  },
  {
    "loc": "/database/5dede0e11cb1214984de871c"
  },
  {
    "loc": "/database/5cbeab270682dd4ff426c773"
  },
  {
    "loc": "/database/5b29eab7d16db96de8de3a8c"
  },
  {
    "loc": "/database/5b29eaedd16db96de8de3a8e"
  },
  {
    "loc": "/database/5912cb8360259210489812de"
  },
  {
    "loc": "/database/5bc9613073226230e06567f0"
  },
  {
    "loc": "/database/5912cc7360259210489812e6"
  },
  {
    "loc": "/database/5912cbf960259210489812e2"
  },
  {
    "loc": "/database/5912cc1f60259210489812e4"
  },
  {
    "loc": "/database/5b6d3c1de57f0c68e0298182"
  },
  {
    "loc": "/database/5b6d3c2de57f0c68e0298183"
  },
  {
    "loc": "/database/5b2de5ccfe29101660d7e142"
  },
  {
    "loc": "/database/5b2de7f0fe29101660d7e3c8"
  },
  {
    "loc": "/database/5912cc9d60259210489812e8"
  },
  {
    "loc": "/database/5912cbae60259210489812df"
  },
  {
    "loc": "/database/5912ccdc60259210489812ec"
  },
  {
    "loc": "/database/5912cd2d60259210489812f0"
  },
  {
    "loc": "/database/58da8c116c196145e853955c"
  },
  {
    "loc": "/database/5902ced6d8bc512b40c9b166"
  },
  {
    "loc": "/database/58fb0f02a9d9042c4c56f8c1"
  },
  {
    "loc": "/database/59107459d0c87d43a4951547"
  },
  {
    "loc": "/database/591010c2d0c87d43a49514b4"
  },
  {
    "loc": "/database/59a7f2f0f453a71fb0f2f71c"
  },
  {
    "loc": "/database/5902ec93e39d634468d2b734"
  },
  {
    "loc": "/database/5902f9dfe39d634468d2b79b"
  },
  {
    "loc": "/database/59cf1875cf69853974efa392"
  },
  {
    "loc": "/database/590da1d96771cb3fd8651d1d"
  },
  {
    "loc": "/database/5900826a5f6dde2ce002e87c"
  },
  {
    "loc": "/database/58fdeae60c8b981ccc7c2442"
  },
  {
    "loc": "/database/58fdb67b0c8b981ccc7c2438"
  },
  {
    "loc": "/database/5a4c54ad5ffa1907489008eb"
  },
  {
    "loc": "/database/5b8e4a421f2b7c2fece13619"
  },
  {
    "loc": "/database/5a4c54e15ffa1907489008ed"
  },
  {
    "loc": "/database/58fc8f607272c0425864d8ce"
  },
  {
    "loc": "/database/5d7878319f6786458c302fb6"
  },
  {
    "loc": "/database/590468147ce01f21cc0c0799"
  },
  {
    "loc": "/database/5d788d839f6786458c302fbc"
  },
  {
    "loc": "/database/5d78cf009f6786458c303016"
  },
  {
    "loc": "/database/5d68ba21b1b1ef4a94b3cab0"
  },
  {
    "loc": "/database/5e78298891589e4c88c1c7dd"
  },
  {
    "loc": "/database/590449a9f588ab3c34e2678a"
  },
  {
    "loc": "/database/59044a5bf588ab3c34e26799"
  },
  {
    "loc": "/database/59044904f588ab3c34e2677f"
  },
  {
    "loc": "/database/59044883f588ab3c34e26771"
  },
  {
    "loc": "/database/58fc902e7272c0425864d8d2"
  },
  {
    "loc": "/database/590447f5f588ab3c34e26765"
  },
  {
    "loc": "/database/590445bef588ab3c34e26746"
  },
  {
    "loc": "/database/590d8fbf75b75f0d84bd4156"
  },
  {
    "loc": "/database/590345ffe39d634468d2b7fb"
  },
  {
    "loc": "/database/59034622e39d634468d2b7fc"
  },
  {
    "loc": "/database/5cdbab6413472b626cdf45b3"
  },
  {
    "loc": "/database/5dc272c1d8f9bc25f8db3ff8"
  },
  {
    "loc": "/database/5dc277a9d8f9bc25f8db4013"
  },
  {
    "loc": "/database/5a545842fe70a0470cf87bcb"
  },
  {
    "loc": "/database/5902ef61e39d634468d2b73f"
  },
  {
    "loc": "/database/59494e6965607e11acd0f51d"
  },
  {
    "loc": "/database/59494e7b65607e11acd0f51e"
  },
  {
    "loc": "/database/5a544fe694a70b3af4f39b1d"
  },
  {
    "loc": "/database/5ac988cadf6cb5384c2f6055"
  },
  {
    "loc": "/database/5ac988fedf6cb5384c2f6057"
  },
  {
    "loc": "/database/59102d6cd0c87d43a49514db"
  },
  {
    "loc": "/database/5910345cd0c87d43a4951511"
  },
  {
    "loc": "/database/5ac841fedf6cb5384c2f6017"
  },
  {
    "loc": "/database/5ac841a1df6cb5384c2f6013"
  },
  {
    "loc": "/database/5ac84527df6cb5384c2f6038"
  },
  {
    "loc": "/database/59102d9bd0c87d43a49514dc"
  },
  {
    "loc": "/database/5b8373691f0add80d8269fbf"
  },
  {
    "loc": "/database/59103418d0c87d43a495150e"
  },
  {
    "loc": "/database/5902ef8de39d634468d2b741"
  },
  {
    "loc": "/database/5902ef72e39d634468d2b740"
  },
  {
    "loc": "/database/5a51a2af4e84af45d0cdb0c8"
  },
  {
    "loc": "/database/5a51a5924e84af45d0cdb0e0"
  },
  {
    "loc": "/database/5a51a7414e84af45d0cdb0f5"
  },
  {
    "loc": "/database/5a51a94d4e84af45d0cdb105"
  },
  {
    "loc": "/database/5ab32b31f59fa6296498a1cc"
  },
  {
    "loc": "/database/5cde9b4d36e18656f04712dd"
  },
  {
    "loc": "/database/5a51aafc4e84af45d0cdb114"
  },
  {
    "loc": "/database/59103809d0c87d43a495151b"
  },
  {
    "loc": "/database/5a53053494a70b3af4f399cd"
  },
  {
    "loc": "/database/5cbeb0e60682dd4ff426c784"
  },
  {
    "loc": "/database/5cbec1830682dd4ff426c7af"
  },
  {
    "loc": "/database/5cbeb15b0682dd4ff426c78d"
  },
  {
    "loc": "/database/5cbeb11b0682dd4ff426c786"
  },
  {
    "loc": "/database/5d527b29dd47b70ef4919aea"
  },
  {
    "loc": "/database/5d527be3dd47b70ef4919af0"
  },
  {
    "loc": "/database/58fb1f92065ea331f0acf7a8"
  },
  {
    "loc": "/database/5949341665607e11acd0f476"
  },
  {
    "loc": "/database/594937cf65607e11acd0f49f"
  },
  {
    "loc": "/database/59494f8b65607e11acd0f52c"
  },
  {
    "loc": "/database/58fd946c0c8b981ccc7c240e"
  },
  {
    "loc": "/database/5949438765607e11acd0f4ed"
  },
  {
    "loc": "/database/5a4f4de24b8df750305f0ca5"
  },
  {
    "loc": "/database/58fdb1840c8b981ccc7c241b"
  },
  {
    "loc": "/database/58fb20c1065ea331f0acf7ab"
  },
  {
    "loc": "/database/594915e38cda6431945a2ff1"
  },
  {
    "loc": "/database/59493a4c65607e11acd0f4c5"
  },
  {
    "loc": "/database/594935ed65607e11acd0f48e"
  },
  {
    "loc": "/database/594938bd65607e11acd0f4ae"
  },
  {
    "loc": "/database/59492e8f8cda6431945a3004"
  },
  {
    "loc": "/database/59493ed365607e11acd0f4e4"
  },
  {
    "loc": "/database/5b20cd00c690ce5e4c0f7bf4"
  },
  {
    "loc": "/database/5cd3bbe79b0482120065a6f6"
  },
  {
    "loc": "/database/5b20cd17c690ce5e4c0f7bf5"
  },
  {
    "loc": "/database/5c4d9fa2813cfd10e88fcebe"
  },
  {
    "loc": "/database/5910168dd0c87d43a49514c1"
  },
  {
    "loc": "/database/5a608ef05a0a35194865e36e"
  },
  {
    "loc": "/database/591016d5d0c87d43a49514c2"
  },
  {
    "loc": "/database/5e8c590738cd903ce053a976"
  },
  {
    "loc": "/database/58f8a3dc6baa3a33ccff5295"
  },
  {
    "loc": "/database/59d74a9c71a0231fd8acad0c"
  },
  {
    "loc": "/database/59d74ad871a0231fd8acad0e"
  },
  {
    "loc": "/database/5bb4624fe8e8092114aea77f"
  },
  {
    "loc": "/database/5bb468d1e8e8092114aea798"
  },
  {
    "loc": "/database/5bb4625ee8e8092114aea780"
  },
  {
    "loc": "/tools/docs"
  },
  {
    "loc": "/tools/5cf7409fe42ba24de83c903a"
  },
  {
    "loc": "/tools/5d691aba3ac0a04a083b7a50"
  },
  {
    "loc": "/tools/5e7c24dbc16144a7d02c2d93"
  },
  {
    "loc": "/tools/5e79ce0991589e4c88c1c7f9"
  },
  {
    "loc": "/tools/5e7c2229c16144a7d02c2d91"
  },
  {
    "loc": "/tools/5e82cbdbfb346d43b85250d7"
  },
  {
    "loc": "/tools/5e77953a91589e4c88c1c7dc"
  },
  {
    "loc": "/tools/5e82cc40fb346d43b85250d9"
  },
  {
    "loc": "/tools/5d675029bbbea00e28e69318"
  },
  {
    "loc": "/tools/5d08638b801c9b2d40f163bf"
  },
  {
    "loc": "/tools/5eb2574ec4e3a22b48d691ee"
  },
  {
    "loc": "/tools/5e7c26289325e6a8943585b2"
  },
  {
    "loc": "/tools/5d085bed801c9b2d40f163bd"
  },
  {
    "loc": "/tools/5cf754087bfaf375a0542a23"
  },
  {
    "loc": "/tools/5cf7438a7bfaf375a0542a1b"
  },
  {
    "loc": "/tools/5e60f53224a5590ab8364696"
  },
  {
    "loc": "/tools/5cf74b187bfaf375a0542a1f"
  },
  {
    "loc": "/tools/5cfa0d607bfaf375a0543057"
  },
  {
    "loc": "/tools/5d0f011176b97b59107f5420"
  },
  {
    "loc": "/tools/5d0862e2801c9b2d40f163be"
  },
  {
    "loc": "/shop/docs"
  },
  {
    "loc": "/shop/591bceab23ccb623685baf82"
  },
  {
    "loc": "/shop/591bd48723ccb623685bafaa"
  },
  {
    "loc": "/shop/591bcee023ccb623685baf85"
  },
  {
    "loc": "/shop/591a8d41cb21ed397487c122"
  },
  {
    "loc": "/shop/5a2a1ada2e1c1330dc94eaba"
  },
  {
    "loc": "/shop/5cd41341a2a5383fd801495a"
  },
  {
    "loc": "/shop/5cd4115ea2a5383fd8014955"
  },
  {
    "loc": "/shop/591a8d4bcb21ed397487c123"
  },
  {
    "loc": "/shop/5a2a1ea62e1c1330dc94eada"
  },
  {
    "loc": "/shop/5a2a1ee42e1c1330dc94eadd"
  },
  {
    "loc": "/shop/5a2a1f0d2e1c1330dc94eadf"
  },
  {
    "loc": "/shop/5a55fc8f3229f0462088534d"
  },
  {
    "loc": "/shop/5a2a1f372e1c1330dc94eae1"
  },
  {
    "loc": "/shop/5a55f3fb3229f0462088533a"
  },
  {
    "loc": "/shop/5a55f4813229f0462088533c"
  },
  {
    "loc": "/shop/5a2a1f662e1c1330dc94eae3"
  },
  {
    "loc": "/shop/5a2a1f832e1c1330dc94eae4"
  },
  {
    "loc": "/shop/5a2a1fab2e1c1330dc94eae6"
  },
  {
    "loc": "/shop/5a2a1fc82e1c1330dc94eae8"
  },
  {
    "loc": "/shop/5ddf920efc113706904cb0f8"
  },
  {
    "loc": "/shop/5a437ca27f653f539c65ba04"
  },
  {
    "loc": "/shop/5a2a1fe02e1c1330dc94eaea"
  },
  {
    "loc": "/shop/5a2a200b2e1c1330dc94eaed"
  },
  {
    "loc": "/shop/5a2a1c132e1c1330dc94eac0"
  },
  {
    "loc": "/shop/5a2a1c322e1c1330dc94eac2"
  },
  {
    "loc": "/shop/5a2a2be92e1c1330dc94eaf1"
  },
  {
    "loc": "/shop/5a5498a49728ec03888c264b"
  },
  {
    "loc": "/shop/5bcf5eb66b1f164294a25db2"
  },
  {
    "loc": "/shop/5e3fd34387e5c539b89e9193"
  },
  {
    "loc": "/shop/5bcf5ede6b1f164294a25db3"
  },
  {
    "loc": "/shop/5a2a1c482e1c1330dc94eac3"
  },
  {
    "loc": "/shop/5a2a1a9a2e1c1330dc94eab8"
  },
  {
    "loc": "/shop/5a03f0c77403640828d7e1e9"
  },
  {
    "loc": "/shop/5a2a1c6c2e1c1330dc94eac5"
  },
  {
    "loc": "/shop/5a55f92c3229f04620885349"
  },
  {
    "loc": "/shop/5caddee7cf4cf1512808dc2d"
  },
  {
    "loc": "/shop/5b82bc93d66c227328cd0bcd"
  },
  {
    "loc": "/shop/5b82bcb7d66c227328cd0bce"
  },
  {
    "loc": "/shop/5dd7b526e363bf4554744f52"
  },
  {
    "loc": "/shop/5a2a2bd22e1c1330dc94eaef"
  },
  {
    "loc": "/shop/5ddfb90efc113706904cb108"
  },
  {
    "loc": "/shop/5ddfb92afc113706904cb109"
  },
  {
    "loc": "/shop/5a2a1ca52e1c1330dc94eac8"
  },
  {
    "loc": "/shop/5a2a1d152e1c1330dc94eace"
  },
  {
    "loc": "/shop/5a2a1d362e1c1330dc94ead0"
  },
  {
    "loc": "/shop/5a2a1d452e1c1330dc94ead1"
  },
  {
    "loc": "/shop/5abc69b3590c1a0178a752eb"
  },
  {
    "loc": "/shop/5abc69e2590c1a0178a752ed"
  },
  {
    "loc": "/shop/5a2a1d6a2e1c1330dc94ead2"
  },
  {
    "loc": "/shop/5a2a1d742e1c1330dc94ead3"
  },
  {
    "loc": "/shop/5a2a1d7f2e1c1330dc94ead4"
  },
  {
    "loc": "/shop/5e3fd8e787e5c539b89e91af"
  },
  {
    "loc": "/shop/5e3fda1587e5c539b89e91b2"
  },
  {
    "loc": "/shop/5a2a2bdf2e1c1330dc94eaf0"
  },
  {
    "loc": "/shop/5a2a1ac92e1c1330dc94eab9"
  },
  {
    "loc": "/shop/5b34bc00eb727f29f4421a7d"
  },
  {
    "loc": "/shop/5b34bc0feb727f29f4421a7e"
  },
  {
    "loc": "/shop/5a6071c35a0a35194865e34d"
  },
  {
    "loc": "/shop/5a6071fb5a0a35194865e34e"
  },
  {
    "loc": "/shop/5b29e2a7d16db96de8de3a7c"
  },
  {
    "loc": "/shop/5b29e2c3d16db96de8de3a7e"
  },
  {
    "loc": "/shop/5a2a1d8f2e1c1330dc94ead5"
  },
  {
    "loc": "/shop/5a53354c94a70b3af4f39a20"
  },
  {
    "loc": "/shop/5a5334b094a70b3af4f39a1e"
  },
  {
    "loc": "/shop/5a2a1db92e1c1330dc94ead7"
  },
  {
    "loc": "/shop/5a52fe1594a70b3af4f399b3"
  },
  {
    "loc": "/shop/5a52feef94a70b3af4f399b6"
  },
  {
    "loc": "/shop/5a2a1dc72e1c1330dc94ead8"
  },
  {
    "loc": "/shop/5a4e36b44b8df750305f0c6c"
  },
  {
    "loc": "/shop/5b0d3a884dbfa62894d30014"
  },
  {
    "loc": "/shop/5b0d3a9b4dbfa62894d30015"
  },
  {
    "loc": "/shop/5b0d3ab94dbfa62894d30017"
  },
  {
    "loc": "/forms/docs"
  },
  {
    "loc": "/forms/58ff3c3b21acae2b40b09b29"
  },
  {
    "loc": "/forms/58ff3c5721acae2b40b09b2a"
  },
  {
    "loc": "/forms/5e782a3c91589e4c88c1c7df"
  },
  {
    "loc": "/forms/5e782a6c91589e4c88c1c7e0"
  },
  {
    "loc": "/forms/58fc49d97a525938d01fbd32"
  },
  {
    "loc": "/forms/58fc49ae7a525938d01fbd31"
  },
  {
    "loc": "/forms/5909ca4b545fa738c45954e3"
  },
  {
    "loc": "/forms/5902f5bce39d634468d2b777"
  },
  {
    "loc": "/forms/58fc8e217272c0425864d8bc"
  },
  {
    "loc": "/forms/590d8ed475b75f0d84bd4150"
  },
  {
    "loc": "/forms/5a4f5a6f4b8df750305f0cc9"
  },
  {
    "loc": "/forms/5a505de94192b84e04b5d56a"
  },
  {
    "loc": "/forms/5a509e574e84af45d0cdb036"
  },
  {
    "loc": "/forms/5a5199284e84af45d0cdb084"
  },
  {
    "loc": "/forms/5a53429e94a70b3af4f39a59"
  },
  {
    "loc": "/forms/5a53587d94a70b3af4f39a7e"
  },
  {
    "loc": "/forms/5a535c9094a70b3af4f39a96"
  },
  {
    "loc": "/forms/5a53601894a70b3af4f39ab7"
  },
  {
    "loc": "/forms/5a54425f94a70b3af4f39ac9"
  },
  {
    "loc": "/forms/5a544cc794a70b3af4f39b08"
  },
  {
    "loc": "/forms/5a545d72fe70a0470cf87bf6"
  },
  {
    "loc": "/forms/5a55feb73229f04620885350"
  },
  {
    "loc": "/forms/5949112e8cda6431945a2fb8"
  },
  {
    "loc": "/forms/5a546007fe70a0470cf87c09"
  },
  {
    "loc": "/forms/5a5348c494a70b3af4f39a66"
  },
  {
    "loc": "/forms/58fc4a2b7a525938d01fbd34"
  },
  {
    "loc": "/forms/5bb43f91e8e8092114aea6fb"
  },
  {
    "loc": "/forms/5a4cba8c6f44d54584a5fb8d"
  },
  {
    "loc": "/forms/58fdb46e0c8b981ccc7c2421"
  },
  {
    "loc": "/forms/5902cffbd8bc512b40c9b174"
  },
  {
    "loc": "/forms/5bb43ff7e8e8092114aea700"
  },
  {
    "loc": "/forms/5bb4401ce8e8092114aea701"
  },
  {
    "loc": "/forms/5bb44031e8e8092114aea702"
  },
  {
    "loc": "/forms/5902f73ee39d634468d2b778"
  },
  {
    "loc": "/forms/5bb45d06e8e8092114aea76d"
  },
  {
    "loc": "/forms/5bb4617ee8e8092114aea778"
  },
  {
    "loc": "/forms/5bcc5fb06b1f164294a25da0"
  },
  {
    "loc": "/forms/5dc16cb2d8f9bc25f8db3fd7"
  },
  {
    "loc": "/forms/5dc28902d8f9bc25f8db4048"
  },
  {
    "loc": "/forms/5e3fdcd787e5c539b89e91be"
  },
  {
    "loc": "/forms/58fd82e51c0a2b0708f9cf22"
  },
  {
    "loc": "/forms/5902d574e39d634468d2b71f"
  },
  {
    "loc": "/forms/5902d5aae39d634468d2b720"
  },
  {
    "loc": "/forms/5a5061d64192b84e04b5d579"
  },
  {
    "loc": "/forms/5a50524324e7d44ab8aaead3"
  },
  {
    "loc": "/forms/5a50525624e7d44ab8aaead4"
  },
  {
    "loc": "/forms/5a5835b78fea2b391cff4c7a"
  },
  {
    "loc": "/forms/5a5835cc8fea2b391cff4c7b"
  },
  {
    "loc": "/forms/58fd832e1c0a2b0708f9cf24"
  },
  {
    "loc": "/forms/58fd83101c0a2b0708f9cf23"
  },
  {
    "loc": "/forms/58fd8b26096af63efc2a104f"
  },
  {
    "loc": "/forms/5ac84710df6cb5384c2f6046"
  },
  {
    "loc": "/forms/58e87ef5186e7b0ad4a7c5a1"
  },
  {
    "loc": "/forms/58fb229f065ea331f0acf7b4"
  },
  {
    "loc": "/forms/59118cd2d766933418881e92"
  },
  {
    "loc": "/forms/59008f0c1f713b350cab33a3"
  },
  {
    "loc": "/forms/59033333e39d634468d2b7ce"
  },
  {
    "loc": "/forms/58fc4bcb7a525938d01fbd42"
  },
  {
    "loc": "/forms/58fc4af27a525938d01fbd3c"
  },
  {
    "loc": "/forms/58f896126baa3a33ccff5268"
  },
  {
    "loc": "/forms/58fb25cc065ea331f0acf7c8"
  },
  {
    "loc": "/forms/5d0db1a776b97b59107f5403"
  },
  {
    "loc": "/forms/58f8a2c36baa3a33ccff5286"
  },
  {
    "loc": "/forms/5a50a0e74e84af45d0cdb062"
  },
  {
    "loc": "/forms/5a50a0fd4e84af45d0cdb063"
  },
  {
    "loc": "/forms/5a50a17c4e84af45d0cdb06b"
  },
  {
    "loc": "/forms/5b221b1cf355272850e86b7d"
  },
  {
    "loc": "/forms/5e204eb3cde64127b00f6338"
  },
  {
    "loc": "/forms/58feff6f73c642469cf8f385"
  },
  {
    "loc": "/forms/59100582d0c87d43a49513f8"
  },
  {
    "loc": "/forms/58feff8673c642469cf8f386"
  },
  {
    "loc": "/forms/59100c46d0c87d43a4951460"
  },
  {
    "loc": "/forms/59100de2d0c87d43a49514a0"
  },
  {
    "loc": "/forms/59100a0cd0c87d43a4951418"
  },
  {
    "loc": "/forms/5910062fd0c87d43a4951405"
  },
  {
    "loc": "/forms/5a51bb8b4e84af45d0cdb159"
  },
  {
    "loc": "/forms/5de0b3bafc113706904cb11c"
  },
  {
    "loc": "/forms/5c4c0db476538e2870814fd3"
  },
  {
    "loc": "/forms/5c4c0dd376538e2870814fd4"
  },
  {
    "loc": "/forms/5c4c187076538e287081500a"
  },
  {
    "loc": "/forms/5c4c18b276538e287081500d"
  },
  {
    "loc": "/forms/5cdcdedc521ef13fe8810d63"
  },
  {
    "loc": "/forms/5cdcdef3521ef13fe8810d64"
  },
  {
    "loc": "/forms/5cdcdf79521ef13fe8810d68"
  },
  {
    "loc": "/forms/5cdcdf88521ef13fe8810d69"
  },
  {
    "loc": "/forms/5cde42e265d4f43574b2257f"
  },
  {
    "loc": "/forms/5cea120fe586822b48045ddf"
  },
  {
    "loc": "/forms/5dc1be78d8f9bc25f8db3fe6"
  },
  {
    "loc": "/forms/5dc2738ed8f9bc25f8db3ffa"
  },
  {
    "loc": "/forms/5dc27795d8f9bc25f8db4012"
  },
  {
    "loc": "/forms/5b29eb78d16db96de8de3a90"
  },
  {
    "loc": "/forms/5b29ebbbd16db96de8de3a94"
  },
  {
    "loc": "/forms/5b29eb8fd16db96de8de3a91"
  },
  {
    "loc": "/forms/5b29f06ed16db96de8de3ac8"
  },
  {
    "loc": "/forms/5902ee9ce39d634468d2b73a"
  },
  {
    "loc": "/forms/59494dcb65607e11acd0f515"
  },
  {
    "loc": "/forms/59494dff65607e11acd0f517"
  },
  {
    "loc": "/forms/5902eeb0e39d634468d2b73b"
  },
  {
    "loc": "/forms/5a51a7624e84af45d0cdb0f6"
  },
  {
    "loc": "/forms/59103818d0c87d43a495151c"
  },
  {
    "loc": "/forms/5a51a5554e84af45d0cdb0de"
  },
  {
    "loc": "/forms/5a51a2ce4e84af45d0cdb0ca"
  },
  {
    "loc": "/forms/5a51a79c4e84af45d0cdb0fa"
  },
  {
    "loc": "/forms/5a51a9604e84af45d0cdb106"
  },
  {
    "loc": "/forms/5a51ab2b4e84af45d0cdb115"
  },
  {
    "loc": "/forms/5a53055294a70b3af4f399ce"
  },
  {
    "loc": "/forms/5ab32b47f59fa6296498a1cd"
  },
  {
    "loc": "/forms/5cdcdf27521ef13fe8810d65"
  },
  {
    "loc": "/forms/5cdcdf3a521ef13fe8810d66"
  },
  {
    "loc": "/forms/5cde9d5036e18656f04712de"
  },
  {
    "loc": "/forms/5ac98917df6cb5384c2f6058"
  },
  {
    "loc": "/forms/59102dc9d0c87d43a49514de"
  },
  {
    "loc": "/forms/5910336cd0c87d43a495150b"
  },
  {
    "loc": "/forms/5910346ad0c87d43a4951512"
  },
  {
    "loc": "/forms/5ac84515df6cb5384c2f6037"
  },
  {
    "loc": "/forms/5ac84215df6cb5384c2f6018"
  },
  {
    "loc": "/forms/5ac841d8df6cb5384c2f6016"
  },
  {
    "loc": "/forms/5ac98952df6cb5384c2f605f"
  },
  {
    "loc": "/forms/5ac98986df6cb5384c2f6062"
  },
  {
    "loc": "/forms/5ac98961df6cb5384c2f6060"
  },
  {
    "loc": "/forms/5b2de622fe29101660d7e146"
  },
  {
    "loc": "/forms/5b2de635fe29101660d7e147"
  },
  {
    "loc": "/forms/5b6d3c53e57f0c68e0298185"
  },
  {
    "loc": "/forms/5bc9617473226230e06567f3"
  },
  {
    "loc": "/forms/58fc90b27272c0425864d8d6"
  },
  {
    "loc": "/forms/5904661a7ce01f21cc0c0777"
  },
  {
    "loc": "/forms/5904452df588ab3c34e26737"
  },
  {
    "loc": "/forms/590d8fd875b75f0d84bd4157"
  },
  {
    "loc": "/forms/58fc90d07272c0425864d8d7"
  },
  {
    "loc": "/forms/590449b5f588ab3c34e2678b"
  },
  {
    "loc": "/forms/59044911f588ab3c34e26780"
  },
  {
    "loc": "/forms/59044a63f588ab3c34e2679a"
  },
  {
    "loc": "/forms/590447a7f588ab3c34e2675f"
  },
  {
    "loc": "/forms/5904485af588ab3c34e2676e"
  },
  {
    "loc": "/forms/5d68ba65b1b1ef4a94b3cab1"
  },
  {
    "loc": "/forms/5d78aaa29f6786458c302fbe"
  },
  {
    "loc": "/forms/5d79bb0b0ea8064570b2f234"
  },
  {
    "loc": "/forms/590345b3e39d634468d2b7f8"
  },
  {
    "loc": "/forms/590345e0e39d634468d2b7f9"
  },
  {
    "loc": "/forms/5a5457ecfe70a0470cf87bc8"
  },
  {
    "loc": "/forms/5cdbabeb13472b626cdf45b5"
  },
  {
    "loc": "/forms/5d527b80dd47b70ef4919aeb"
  },
  {
    "loc": "/forms/5d527b99dd47b70ef4919aec"
  },
  {
    "loc": "/forms/58fb214e065ea331f0acf7ae"
  },
  {
    "loc": "/forms/59493e9e65607e11acd0f4e1"
  },
  {
    "loc": "/forms/59492e568cda6431945a3001"
  },
  {
    "loc": "/forms/594938ce65607e11acd0f4af"
  },
  {
    "loc": "/forms/594937d965607e11acd0f4a0"
  },
  {
    "loc": "/forms/5949338c65607e11acd0f46f"
  },
  {
    "loc": "/forms/58fdb1680c8b981ccc7c2419"
  },
  {
    "loc": "/forms/59494c8865607e11acd0f50b"
  },
  {
    "loc": "/forms/594935ff65607e11acd0f48f"
  },
  {
    "loc": "/forms/594939aa65607e11acd0f4bf"
  },
  {
    "loc": "/forms/5949350f65607e11acd0f480"
  },
  {
    "loc": "/forms/58fb2339065ea331f0acf7b8"
  },
  {
    "loc": "/forms/5949436865607e11acd0f4ec"
  },
  {
    "loc": "/forms/58fd94a30c8b981ccc7c240f"
  },
  {
    "loc": "/forms/5a4f4e2b4b8df750305f0ca8"
  },
  {
    "loc": "/forms/5949153d8cda6431945a2fe7"
  },
  {
    "loc": "/forms/5b20cd4fc690ce5e4c0f7bf7"
  },
  {
    "loc": "/forms/5b20cd68c690ce5e4c0f7bf8"
  },
  {
    "loc": "/forms/5c4d9d78813cfd10e88fceb5"
  },
  {
    "loc": "/forms/5cd3bc139b0482120065a6f7"
  },
  {
    "loc": "/forms/5910172bd0c87d43a49514c5"
  },
  {
    "loc": "/forms/5a608f0e5a0a35194865e36f"
  },
  {
    "loc": "/forms/59101739d0c87d43a49514c6"
  },
  {
    "loc": "/forms/5bb46289e8e8092114aea782"
  },
  {
    "loc": "/forms/5bb46297e8e8092114aea783"
  },
  {
    "loc": "/forms/5bb46a08e8e8092114aea79c"
  },
  {
    "loc": "/forms/58fb21e7065ea331f0acf7b0"
  },
  {
    "loc": "/forms/5b8e4a631f2b7c2fece1361a"
  },
  {
    "loc": "/forms/5902cd37d8bc512b40c9b160"
  },
  {
    "loc": "/forms/58fb1049a9d9042c4c56f8c6"
  },
  {
    "loc": "/forms/59107434d0c87d43a4951544"
  },
  {
    "loc": "/forms/59101116d0c87d43a49514b6"
  },
  {
    "loc": "/forms/59a7f31ff453a71fb0f2f71d"
  },
  {
    "loc": "/forms/5902ec49e39d634468d2b731"
  },
  {
    "loc": "/forms/5a4c55c15ffa1907489008f1"
  },
  {
    "loc": "/forms/5e8c598338cd903ce053a978"
  },
  {
    "loc": "/forms/5902f9f2e39d634468d2b79c"
  },
  {
    "loc": "/forms/59cf18abcf69853974efa394"
  },
  {
    "loc": "/forms/59d74bce71a0231fd8acad11"
  },
  {
    "loc": "/forms/590da0e36771cb3fd8651d15"
  },
  {
    "loc": "/forms/58f8a3316baa3a33ccff528c"
  },
  {
    "loc": "/forms/5900821f5f6dde2ce002e879"
  },
  {
    "loc": "/forms/58fdead60c8b981ccc7c2441"
  },
  {
    "loc": "/forms/58fdb61d0c8b981ccc7c2434"
  },
  {
    "loc": "/forms/5b46d3d99be2513e68c56ca1"
  },
  {
    "loc": "/forms/5b46d4049be2513e68c56ca3"
  },
  {
    "loc": "/forms/58df40ff48e76c2c1894d709"
  },
  {
    "loc": "/forms/58df42390cef901b8c1bb46d"
  },
  {
    "loc": "/forms/58fb1067a9d9042c4c56f8c7"
  },
  {
    "loc": "/forms/58e87f3f186e7b0ad4a7c5a3"
  },
  {
    "loc": "/forms/5b0d3b4f4dbfa62894d30019"
  },
  {
    "loc": "/forms/5a60721b5a0a35194865e350"
  },
  {
    "loc": "/forms/5a5498cc9728ec03888c264d"
  },
  {
    "loc": "/forms/5a5301e594a70b3af4f399bb"
  },
  {
    "loc": "/forms/5a43456a7f653f539c65b983"
  },
  {
    "loc": "/forms/5a53357494a70b3af4f39a21"
  },
  {
    "loc": "/forms/5a52f38494a70b3af4f3998d"
  },
  {
    "loc": "/forms/5d691b1a3ac0a04a083b7a52"
  },
  {
    "loc": "/forms/5d691b373ac0a04a083b7a53"
  },
  {
    "loc": "/forms/5eb257a0c4e3a22b48d691f0"
  },
  {
    "loc": "/configuration/docs"
  },
  {
    "loc": "/configuration/5ac846d3df6cb5384c2f6043"
  },
  {
    "loc": "/configuration/5ac846e5df6cb5384c2f6044"
  },
  {
    "loc": "/configuration/5a50550f4192b84e04b5d54f"
  },
  {
    "loc": "/configuration/5a5055224192b84e04b5d551"
  },
  {
    "loc": "/configuration/5a50930cf0cac83fe49d8890"
  },
  {
    "loc": "/configuration/5a5835408fea2b391cff4c76"
  },
  {
    "loc": "/configuration/5a5835738fea2b391cff4c79"
  },
  {
    "loc": "/configuration/5a5835558fea2b391cff4c77"
  },
  {
    "loc": "/configuration/5a519a694e84af45d0cdb094"
  },
  {
    "loc": "/configuration/5a5054af39da3236d859ce8a"
  },
  {
    "loc": "/configuration/5ccbcb3546daa34ebcb4dd7f"
  },
  {
    "loc": "/configuration/58aa74140b9d3241280ecf17"
  },
  {
    "loc": "/configuration/5abf31b1b6aede19c4774e3e"
  },
  {
    "loc": "/configuration/5cf74091e42ba24de83c9039"
  },
  {
    "loc": "/assemblies/docs"
  },
  {
    "loc": "/assemblies/5b869a0a1f2b7c2fece13601"
  },
  {
    "loc": "/assemblies/5b869e191f2b7c2fece13602"
  },
  {
    "loc": "/assemblies/5e830a4bfb346d43b85250db"
  },
  {
    "loc": "/assemblies/5e830a6efb346d43b85250dc"
  },
  {
    "loc": "/assemblies/5aab48926d6576006813ce4d"
  },
  {
    "loc": "/assemblies/5aab48a86d6576006813ce4e"
  },
  {
    "loc": "/assemblies/5bf3880f27116b42c09fcb5b"
  },
  {
    "loc": "/assemblies/5bc9b45773226230e0656809"
  },
  {
    "loc": "/assemblies/5eb146ebf8f7e55518600d22"
  },
  {
    "loc": "/assemblies/5bc9b49173226230e065680c"
  },
  {
    "loc": "/assemblies/5eb149eab9163d303c411318"
  },
  {
    "loc": "/assemblies/5eb14a0b7364684a84b52708"
  },
  {
    "loc": "/assemblies/5eb14a6ed026e233e09e412b"
  },
  {
    "loc": "/assemblies/5eb14c26977cba6404e0afa6"
  },
  {
    "loc": "/assemblies/5eb14cfc977cba6404e0afa7"
  },
  {
    "loc": "/assemblies/5eb15d9c977cba6404e0afbf"
  },
  {
    "loc": "/assemblies/5eb14d13977cba6404e0afa8"
  },
  {
    "loc": "/assemblies/5eb15cf9977cba6404e0afb5"
  },
  {
    "loc": "/assemblies/5eb14bda7146b27d18ecc3d7"
  },
  {
    "loc": "/assemblies/5eb14d46977cba6404e0afaa"
  },
  {
    "loc": "/assemblies/5eb14a217364684a84b52709"
  },
  {
    "loc": "/assemblies/5bc9b4f273226230e0656811"
  },
  {
    "loc": "/assemblies/5bc9b4da73226230e065680f"
  },
  {
    "loc": "/assemblies/5cadafa4e974af4940bb65be"
  },
  {
    "loc": "/assemblies/5cadb34fcf4cf1512808db6b"
  },
  {
    "loc": "/assemblies/5bc9b4b173226230e065680e"
  },
  {
    "loc": "/assemblies/5dd223237718ec420cf7742a"
  },
  {
    "loc": "/assemblies/5dd223827718ec420cf7742e"
  },
  {
    "loc": "/assemblies/5e5352627874973ad8cfde7e"
  },
  {
    "loc": "/assemblies/5e5353cd7874973ad8cfde81"
  },
  {
    "loc": "/assemblies/5e53549c7874973ad8cfde89"
  },
  {
    "loc": "/assemblies/5e5354bf7874973ad8cfde8b"
  },
  {
    "loc": "/assemblies/5bc9b4fb73226230e0656812"
  },
  {
    "loc": "/assemblies/5e5354677874973ad8cfde86"
  },
  {
    "loc": "/assemblies/5e53548e7874973ad8cfde88"
  },
  {
    "loc": "/assemblies/5e5353ea7874973ad8cfde83"
  },
  {
    "loc": "/assemblies/5e5355157874973ad8cfde8d"
  },
  {
    "loc": "/assemblies/5e5355277874973ad8cfde8e"
  },
  {
    "loc": "/assemblies/5eb146a5f8f7e55518600d21"
  },
  {
    "loc": "/assemblies/5bb041485042ab4d48e634fa"
  },
  {
    "loc": "/assemblies/5bb0416f5042ab4d48e634fb"
  },
  {
    "loc": "/assemblies/5b07b56af16c8e15dcd7dc68"
  },
  {
    "loc": "/assemblies/5b07b578f16c8e15dcd7dc69"
  },
  {
    "loc": "/assemblies/5c4c0ae12050653fac10e4a4"
  },
  {
    "loc": "/assemblies/5c4c0b2d2050653fac10e4a6"
  },
  {
    "loc": "/assemblies/5ddfb460fc113706904cb102"
  },
  {
    "loc": "/assemblies/5c4c41192030792aec4cea1b"
  },
  {
    "loc": "/assemblies/5ddfb46bfc113706904cb103"
  },
  {
    "loc": "/assemblies/5a3cccb9e0e8302ef410f099"
  },
  {
    "loc": "/assemblies/5bcc78af6b1f164294a25db1"
  },
  {
    "loc": "/assemblies/5d50f258dd47b70ef4919ae4"
  },
  {
    "loc": "/assemblies/5a33c532798966054c962353"
  },
  {
    "loc": "/assemblies/5d577a9de5bd213570a5bd3b"
  },
  {
    "loc": "/assemblies/5d577a8be5bd213570a5bd3a"
  },
  {
    "loc": "/assemblies/5d577ab6e5bd213570a5bd3d"
  },
  {
    "loc": "/assemblies/5d577abee5bd213570a5bd3e"
  },
  {
    "loc": "/assemblies/5a51b6de4e84af45d0cdb147"
  },
  {
    "loc": "/assemblies/5a51b5634e84af45d0cdb12d"
  },
  {
    "loc": "/assemblies/5b3765c7eb727f29f4421a91"
  },
  {
    "loc": "/assemblies/5b375f41eb727f29f4421a8a"
  },
  {
    "loc": "/assemblies/5b21f0c0f355272850e86a37"
  },
  {
    "loc": "/assemblies/5c4c0af92050653fac10e4a5"
  },
  {
    "loc": "/assemblies/5c4c4ec5efaa5f06c4cb45d2"
  },
  {
    "loc": "/assemblies/5cf5edf5dc748662f04b3d03"
  },
  {
    "loc": "/assemblies/5cf5edd3dc748662f04b3d02"
  },
  {
    "loc": "/assemblies/5b21efcbf355272850e86a36"
  },
  {
    "loc": "/assemblies/5b79463813d827aaa83446d8"
  },
  {
    "loc": "/assemblies/5b794c9b13d827aaa83446e2"
  },
  {
    "loc": "/assemblies/5bcfe62e6b1f164294a25dc2"
  },
  {
    "loc": "/assemblies/5b79462e13d827aaa83446d7"
  },
  {
    "loc": "/assemblies/5b7947b813d827aaa83446dd"
  },
  {
    "loc": "/assemblies/5b794be413d827aaa83446df"
  },
  {
    "loc": "/assemblies/5b794c1a13d827aaa83446e0"
  },
  {
    "loc": "/assemblies/5b79462713d827aaa83446d6"
  },
  {
    "loc": "/assemblies/5b376621eb727f29f4421a95"
  },
  {
    "loc": "/assemblies/5b79461213d827aaa83446d4"
  },
  {
    "loc": "/assemblies/5b794ce113d827aaa83446e4"
  },
  {
    "loc": "/assemblies/5b794cf213d827aaa83446e6"
  },
  {
    "loc": "/assemblies/5b7e8943343a732a2cf741b1"
  },
  {
    "loc": "/components/docs"
  },
  {
    "loc": "/components/5909c682545fa738c45954df"
  },
  {
    "loc": "/components/5e830c2dfb346d43b85250df"
  },
  {
    "loc": "/components/5b6f4bed41b8b4274c3bac9d"
  },
  {
    "loc": "/components/5aab484c6d6576006813ce4b"
  },
  {
    "loc": "/components/5a51b3d04e84af45d0cdb12a"
  },
  {
    "loc": "/components/5909c9af545fa738c45954e1"
  },
  {
    "loc": "/components/5a53426694a70b3af4f39a56"
  },
  {
    "loc": "/components/5a53427894a70b3af4f39a57"
  },
  {
    "loc": "/components/58fc4cec7a525938d01fbd4e"
  },
  {
    "loc": "/components/58fc4d137a525938d01fbd4f"
  },
  {
    "loc": "/components/5d0efffb76b97b59107f541a"
  },
  {
    "loc": "/components/5a50a0434e84af45d0cdb05a"
  },
  {
    "loc": "/components/5a50a0704e84af45d0cdb05d"
  },
  {
    "loc": "/components/5902cfb6d8bc512b40c9b171"
  },
  {
    "loc": "/components/5a55ff0f3229f04620885351"
  },
  {
    "loc": "/components/5bb305d8e8e8092114aea6f2"
  },
  {
    "loc": "/components/5bb45cf3e8e8092114aea76c"
  },
  {
    "loc": "/components/5bb308e5e8e8092114aea6fa"
  },
  {
    "loc": "/components/5902cfc1d8bc512b40c9b172"
  },
  {
    "loc": "/components/5a4cba3f6f44d54584a5fb89"
  },
  {
    "loc": "/components/5dc16c81d8f9bc25f8db3fd5"
  },
  {
    "loc": "/components/5bb307d1e8e8092114aea6f9"
  },
  {
    "loc": "/components/5bb3079ee8e8092114aea6f8"
  },
  {
    "loc": "/components/5902fa49e39d634468d2b7a3"
  },
  {
    "loc": "/components/58fdb5100c8b981ccc7c242c"
  },
  {
    "loc": "/components/5dc28931d8f9bc25f8db4049"
  },
  {
    "loc": "/components/5bcc5f966b1f164294a25d9f"
  },
  {
    "loc": "/components/5bb46735e8e8092114aea795"
  },
  {
    "loc": "/components/58fc8f007272c0425864d8ca"
  },
  {
    "loc": "/components/5cfb39417bfaf375a0543084"
  },
  {
    "loc": "/components/5cfb384c7bfaf375a0543077"
  },
  {
    "loc": "/components/5cfb38ab7bfaf375a054307e"
  },
  {
    "loc": "/components/59044d82f588ab3c34e267b1"
  },
  {
    "loc": "/components/5cfb388b7bfaf375a054307c"
  },
  {
    "loc": "/components/5cfb37fb7bfaf375a0543071"
  },
  {
    "loc": "/components/5cfb38d27bfaf375a0543080"
  },
  {
    "loc": "/components/5cfb38c37bfaf375a054307f"
  },
  {
    "loc": "/components/5cfb38087bfaf375a0543072"
  },
  {
    "loc": "/components/5cfb38997bfaf375a054307d"
  },
  {
    "loc": "/components/5cfb35a37bfaf375a054305f"
  },
  {
    "loc": "/components/58fc8ec17272c0425864d8c7"
  },
  {
    "loc": "/components/5cfb39597bfaf375a0543086"
  },
  {
    "loc": "/components/5cfb38137bfaf375a0543073"
  },
  {
    "loc": "/components/5cfb38e87bfaf375a0543081"
  },
  {
    "loc": "/components/5cfb391f7bfaf375a0543083"
  },
  {
    "loc": "/components/5cfb35f37bfaf375a0543062"
  },
  {
    "loc": "/components/5a5363c494a70b3af4f39ac8"
  },
  {
    "loc": "/components/5a5357ed94a70b3af4f39a7a"
  },
  {
    "loc": "/components/5a5357cf94a70b3af4f39a79"
  },
  {
    "loc": "/components/5a53582f94a70b3af4f39a7c"
  },
  {
    "loc": "/components/5a5198e24e84af45d0cdb081"
  },
  {
    "loc": "/components/5aab53db6d6576006813ce7c"
  },
  {
    "loc": "/components/5a545e14fe70a0470cf87bfb"
  },
  {
    "loc": "/components/5a53490394a70b3af4f39a68"
  },
  {
    "loc": "/components/5aab4baa6d6576006813ce6b"
  },
  {
    "loc": "/components/5a5198fe4e84af45d0cdb082"
  },
  {
    "loc": "/components/5e3fdc9a87e5c539b89e91bd"
  },
  {
    "loc": "/components/5a433bc50834ff4698ba2f8c"
  },
  {
    "loc": "/components/5a505c8c4192b84e04b5d566"
  },
  {
    "loc": "/components/59490f528cda6431945a2fb3"
  },
  {
    "loc": "/components/5a4f5a254b8df750305f0cc7"
  },
  {
    "loc": "/components/594910fc8cda6431945a2fb6"
  },
  {
    "loc": "/components/5a4468117f653f539c65ba10"
  },
  {
    "loc": "/components/5a544cb094a70b3af4f39b07"
  },
  {
    "loc": "/components/5a433bef0834ff4698ba2f8e"
  },
  {
    "loc": "/gamedata/docs"
  },
  {
    "loc": "/gamedata/5efeb4ea4b1765ba3ceb44a5"
  },
  {
    "loc": "/gamedata/5efb0302645b2e27045965dc"
  },
  {
    "loc": "/gamedata/5eec9cbb20296272f45fc7ac"
  },
  {
    "loc": "/gamedata/5eec9d3520296272f45fc7ad"
  },
  {
    "loc": "/gameform/docs"
  },
  {
    "loc": "/gameform/5efeea3139dee8dd74f42a3f"
  },
  {
    "loc": "/gameform/5efc42279912ac3d5c003c55"
  },
  {
    "loc": "/gameform/5efc4cb3c107d531646e322d"
  },
  {
    "loc": "/gameform/5efeb4bc4b1765ba3ceb44a4"
  },
  {
    "loc": "/issues/view/semini"
  },
  {
    "loc": "/semini/newcollection"
  },
  {
    "loc": "/issues/view/post"
  },
  {
    "loc": "/issues/view/get"
  },
  {
    "loc": "/issues/view/issuesview"
  },
  {
    "loc": "/issues/view/userlist"
  },
  {
    "loc": "/issues/view/viewallajax"
  },
  {
    "loc": "/issues/view/viewall"
  },
  {
    "loc": "/issues/view/standalonenewpage"
  },
  {
    "loc": "/issues/view/sitewide"
  },
  {
    "loc": "/issues/view/editassembly"
  },
  {
    "loc": "/issues/view/5bb4625ee8e8092114aea780"
  },
  {
    "loc": "/issues/view/5cde9b4d36e18656f04712dd"
  },
  {
    "loc": "/issues/view/homepage"
  },
  {
    "loc": "/issues/view/oldsite"
  },
  {
    "loc": "/issues/view/"
  },
  {
    "loc": "/issues/view/customprofile"
  },
  {
    "loc": "/issues/view/58da88e3db8ec8142c30e76b"
  },
  {
    "loc": "/issues/view/58d2111ed9c22811c4df3a07"
  },
  {
    "loc": "/issues/view/viewgroupajax"
  },
  {
    "loc": "/database/Blank"
  },
  {
    "loc": "/database/www.ringspann.co.za"
  },
  {
    "loc": "/database/www.demagcranes.com"
  },
  {
    "loc": "/database/Health%20,%20Safety%20and%20the%20Environment"
  },
  {
    "loc": "/database/AATC000170"
  }
]
 
  
 
var testlist=[]
for (var i = 0; i < siteIndex.length; i++) {
	testlist.push(siteIndex[i].loc)	
}

describe.skip("End point testing of sitemap", () => {
  test.each(testlist)(
    "given %p endpoint should return a 200.",
    async (firstArg,done) => {
    request(app)
      .get(firstArg)
      .expect('Content-Type', /charset=utf-8/)
      .expect(200, done);
    }
  );
});


