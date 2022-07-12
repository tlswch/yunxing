{
    "author": "Cherry",
    "ua": "",
    "homeUrl": "https://www.lkvod.cc",
    //"dcVipFlag": "true",
    //"pCfgJs": "https://www.lkvod.cc/static/js/playerconfig.js",
    //"pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
    //"dcShow2Vip": {},
    "dcPlayUrl": "true",
    "cateNode": "//ul[contains(@class,'nav-menu-items')]/li[contains(@class, 'nav-menu-item')]/a[contains(@href,'type')]",
    "cateName": "/@title",
    "cateId": "/@href",
    "cateIdR": "/type/(\\d+)/",
    "cateManual": {"大陆剧": "13","港台剧": "14","日韩剧": "15","欧美剧": "16","综艺": "3","动漫": "4",
        "动作片": "6","爱情片": "8","喜剧片": "7","科幻片": "9","恐怖片": "10", "剧情片": "11","战争片": "12"},
    "homeVodNode": "//div[@class='module-items']//div[@class='module-item-cover']",
    "homeVodName": "//div[@class='module-item-pic']/a/@title",
    "homeVodId": "//div[@class='module-item-pic']/a/@href",
    "homeVodIdR": "/detail/(\\w+).html",
    "homeVodImg": "//div[@class='module-item-pic']/img/@data-src",
    "homeVodImgR": "\\S+(http\\S+)",
    "homeVodMark": "//div[@class='module-item-caption right']/span/text()",
    "cateUrl": "  https://www.lkvod.cc/show/{cateId}--------{catePg}---.html",
    "cateVodNode": "//div[@class='module-items']//div[@class='module-item-cover']",
    "cateVodName": "//div[@class='module-item-pic']/a/@title",
    "cateVodId": "//div[@class='module-item-pic']/a/@href",
    "cateVodIdR": "/detail/(\\w+).html",
    "cateVodImg": "//div[@class='module-item-pic']/img/@data-src",
    "cateVodImgR": "\\S+(http\\S+)",
    "cateVodMark": "//div[@class='module-item-caption right']/span/text()",
    "dtUrl": "https://www.lkvod.cc/detail/{vid}.html",
    "dtNode": "//body",
    "dtName": "//div[@class='video-info-header']/h1/text()",
    "dtImg": "//div[@class='video-cover']/div/div/img/@data-src",
    "dtArea": "//a[@class='tag-link'][3]/text()",
    "dtDirector": "//div[@class='video-info-items'][1]/div/a/text()",
    "dtActor": "//div[@class='video-info-items'][2]/div/a/text()",
    "dtYear": "//div[@class='video-info-items'][3]/div/a/text()",
    "dtMark": "//div[@class='video-info-item'][1]/text()",
    "dtDesc": "//p[@class='zkjj_a']/text()",
    "dtFromNode": "//div[@class='module-tab module-player-tab']//div[@class='module-tab-items']//div[@class='module-tab-content']//div[contains(@class,'module-tab-item tab-item')]/span",
    "dtFromName": "/text()",
    "dtUrlNode": "//div[contains(@class, 'module-blocklist')]",
    "dtUrlSubNode": "/div/a",
    "dtUrlId": "@href",
    "dtUrlIdR": "/play/(\\S+).html",
    "dtUrlName": "/span/text()",
    "dtUrlNameR": "",
    "playUrl": "https://www.lkvod.cc/play/{playUrl}.html",
    "playUa": "",
    "searchUrl": "https://www.lkvod.cc/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
    "scVodNode": "json:list",
    "scVodName": "name",
    "scVodId": "id",
    "scVodIdR": "",
    "scVodImg": "pic",
    "scVodMark": ""
}