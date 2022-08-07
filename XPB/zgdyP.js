{
    "author":"20220522",
    "ua": "",
    "homeUrl": "https://www.chinady.ga/",
    "dcVipFlag": "true",
    //"pCfgJs": "https://www.chinady.ga/static/js/playerconfig.js",
    //"pCfgJsR": "MacPlayerConfig.player_list=([\\w\\W]*?),MacPlayerConfig.downer_list=",
    //"dcShow2Vip": {},
    "dcPlayUrl": "true",
    "cateManual": {"电影": "dianying","电视剧": "dsj","综艺": "zy","动漫": "dm"},
    "homeVodNode": "//div[contains(@class,'module-item')]",
    "homeVodName": "//div[contains(@class, 'module-item-pic')]/a/@title",
    "homeVodId": "//div[contains(@class, 'module-item-pic')]/a/@href",
    "homeVodIdR": "/vod/(\\w+).html",
    "homeVodImg": "//div[contains(@class, 'module-item-pic')]/img/@data-src",
    "homeVodImgR": "\\S+(http\\S+)",
    "homeVodMark": "//div[contains(@class,'module-item-text')]/text()",
    "cateUrl": "https://www.chinady.ga/vodshow/{cateId}-----{catePg}-----.html",
    "cateVodNode": "//div[contains(@class, 'module-item')]",
    "cateVodName": "//div[contains(@class, 'module-item-pic')]/a/@title",
    "cateVodId": "//div[contains(@class, 'module-item-pic')]/a/@href",
    "cateVodIdR": "/vod/(\\w+).html",
    "cateVodImg": "//div[contains(@class, 'module-item-pic')]/img/@data-src",
    "cateVodImgR": "\\S+(http\\S+)",
    "cateVodMark": "/div[contains(@class,'module-item-text')]/text()",
  
    "dtUrl": "https://www.chinady.ga/vod/{vid}.html",
    "dtNode": "//body",
    "dtName": "//div[contains(@class,'video-info-header')]/h1[@class='page-title']/text()",
    "dtNameR": "",
    "dtImg": "//div[@class=('module-item-pic')]/img/@data-src",
    "dtImgR": "(http\\S+)",
    "dtCate": "//div[contains(@class,'tag-link')]/a/text()",
    "dtCateR": "",
    "dtYear": "//a[@class='tag-link'][1]/text()",
    "dtArea": "//a[@class='tag-link'][2]/text()",
    "dtAreaR": "",
    "dtDesc": "concat(//span[contains(text(), '剧情')]/parent::*/div/span/text())",
    "dtDescR": "",
    "dtActor": "concat(//span[contains(text(), '主演')]/parent::*/div/a/text())",
    "dtActorR": "",
    "dtDirector": "concat(//span[contains(text(), '导演')]/parent::*/div/a/text())",
    "dtDirectorR": "",
    
    "dtFromNode": "//div[contains(@class,'module-tab-items')]/div[2]/div/span",
    "dtFromName": "/text()",
    "dtFromNameR": "",
    "dtUrlNode": "//div[contains(@class,'module-blocklist')]//div[contains(@class,'scroll-content')]",
    "dtUrlSubNode": "/a",
    "dtUrlId": "/@href",
    "dtUrlIdR": "/vodplay/(\\S+).html",
    "dtUrlName": "/span/text()",
    "dtUrlNameR": "",
    "playUrl": "https://www.chinady.ga/vodplay/{playUrl}.html",
    "playUa": "",
    
    "searchUrl": "https://www.chinady.ga/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
    "scVodNode": "json:list",
    "scVodName": "name",
    "scVodId": "id",
    "scVodIdR": "",
    "scVodImg": "pic",
    "scVodMark": ""
  }