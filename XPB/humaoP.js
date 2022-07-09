{//尤东风于2022.6.18:有首页视频才有分类视频出现 
  "author": "尤东风",
  "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
  "homeUrl": "http://vv.humaoweb.com/",
  "dcVipFlag": "true",
  "dcPlayUrl": "true",
  "cateNode": "//div[contains(@class, 'library-box library-box-first scroll-box')]/div/div[@class=('library-list')]/a[contains(@href, 'vodshow')]",
  "cateName": "/text()",
  "cateId": "/@href",
  "cateIdR": "/vodshow/(\\S+)---",
  "cateManual": {"4K片": "27","大陆剧": "13","港台剧": "14","日韩剧": "15","欧美剧": "16","综艺": "3","动漫": "4","动作片": "6",
            "爱情片": "8","喜剧片": "7","科幻片": "9","恐怖片": "10","剧情片": "11","战争片": "12","直播": "24"},
  "homeVodNode": "//div[@class='module-item']",
  "homeVodName": "//div[@class='module-item-titlebox']/a/text()",
  "homeVodId": "//div[@class='module-item-titlebox']/a/@href",
  "homeVodIdR": "/voddetail/(\\w+)",
  "homeVodImg": "//img/@data-src",
  "homeVodImgR": "",
  "homeVodMark": "//div[@class='module-item-text']/text()",
  "cateUrl": "http://vv.humaoweb.com/vodshow/{cateId}-{area}-{by}---{letter}---{catePg}---{year}/",
  "cateVodNode": "//div[@class='module-item']",
  "cateVodName": "//div[@class='module-item-titlebox']/a/text()",
  "cateVodId": "//div[@class='module-item-titlebox']/a/@href",
  "cateVodIdR": "/voddetail/(\\w+)/",
  "cateVodImg": "//img/@data-src",
  "cateVodImgR": "",
  "cateVodMark": "//div[@class='module-item-text']/text()",
  "dtUrl": "http://vv.humaoweb.com/voddetail/{vid}",
  "dtNode": "//body",
  "dtName": "//div[contains(@class,'video-info-header')]/h1[@class='page-title']/text()",
  "dtImg": "//div[@class=('module-item-pic')]/img/@data-src",
  "dtImgR": "(http\\S+)",
  "dtCate": "//div[contains(@class,'tag-link')]/a/text()",
  "dtYear": "//a[@class='tag-link'][2]/text()",
  "dtArea": "//a[@class='tag-link'][3]/text()",
  "dtDirector": "concat(//span[contains(text(), '导演')]/parent::*/div/a/text())",
  "dtActor": "concat(//span[contains(text(), '主演')]/parent::*/div/a/text())",
  "dtDesc": "//span[contains(text(), '剧情')]/parent::*/div/text()",
  "dtFromNode": "//div[contains(@class, 'module-tab-content')]/div[contains(@class, 'module-tab-item')]/span",
  "dtFromName": "/text()",
  "dtUrlNode": "//div[contains(@class, 'module-blocklist')]",
  "dtUrlSubNode": "/div/a",
  "dtUrlId": "/@href",
  "dtUrlIdR": "/vodplay/(\\S+)",
  "dtUrlName": "/span/text()",
  "playUrl": "http://vv.humaoweb.com/vodplay/{playUrl}",
  "playUa": "",
  "searchUrl": "http://vv.humaoweb.com/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
  "scVodNode": "json:list",
  "scVodName": "name",
  "scVodId": "id",
  "scVodIdR": "",
  "scVodImg": "pic",
  "scVodMark": ""
}