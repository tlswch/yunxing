{  //2022.6.13
    "author": "尤东风",
    "ua": "",
    "homeUrl": "https://www.366ys.cc/",
    "dcVipFlag": "true",
    "dcPlayUrl": "true",
    //"cateNode": "//div[contains(@class,'head_menu_a')]/ul[contains(@class, 'top_nav clearfix')]/li/a[contains(@href,'vodtype')]",
    //"cateName": "/text()",
    //"cateId": "/@href",
    "cateIdR": "/vodshow/(\\d+)/",
    "cateManual": {"国产剧": "13","港台剧": "14","日韩剧": "15","欧美剧": "16","综艺": "3","动漫": "4",
        "动作片": "6","爱情片": "8","喜剧片": "7", "科幻片": "9","恐怖片": "10","剧情片": "11","战争片": "12"},
    "cateUrl": "https://www.366ys.cc/vodshow/{cateId}--------{catePg}---.html",
    "cateVodNode": "//div[contains(@class, 'stui-pannel')]//a[@class='stui-vodlist__thumb lazyload']",
    "cateVodName": "/@title",
    "cateVodId": "//@href",
    "cateVodIdR": "/y/(\\w+).html",
    "cateVodImg": "//@data-original",
    "cateVodImgR": "\\S+(http\\S+)",
    "cateVodMark": "//span[@class='pic_text text_right']/text()",
    "dtUrl": "https://www.366ys.cc/y/{vid}.html",
    "dtNode": "//body",
    "dtName": "//div[@class='stui-content__thumb']/a[@class='pic']/@title",
    "dtImg": "//div[@class='stui-content__thumb']/a[@class='pic']/img/@data-original",
    "dtArea": "//p[contains(text(), '地区')][3]/text()",
	"dtAreaR": "",
    "dtYear": "//p[contains(text(), '年份')][4]/text()",
    "dtCate": "//p[contains(text(), '类型')][1]/text()",
    "dtDirector": "//p[contains(text(), '导演')]/following-sibling::a/text()",
    "dtActor": "//p[contains(text(), '主演')]/following-sibling::a/text()",
    "dtActorR": "\\S+主演：(\\S+)",
    //"dtMark": "//div[@class='video-info-item'][1]/text()",
    "dtDesc": "//p[@class='desc detail']/span[2]/text()",
    "dtFromNode": "//div[@class='stui-vodlist__head']//ul[contains(@class, 'nav nav-tabs  dpplay pull-right')]/li/a",
    "dtFromName": "/text()",
    "dtUrlNode": "//div[contains(@class, 'stui-vodlist__head')]//ul[contains(@class,'stui-content__playlist clearfix ')]",
    "dtUrlSubNode": "/li/a",
    "dtUrlId": "@href",
    "dtUrlIdR": "/k/(\\S+).html",
    "dtUrlName": "/text()",
    "dtUrlNameR": "",
    "playUrl": "https://www.366ys.cc/k/{playUrl}.html",
    "playUa": "",
    "searchUrl": "https://www.366ys.cc/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
    "scVodNode": "json:list",
    "scVodName": "name",
    "scVodId": "id",
    "scVodIdR": "",
    "scVodImg": "pic",
    "scVodMark": ""
}