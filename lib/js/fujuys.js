var rule={
    title:'宅腐影视',
    host:'https://www.fuju1.tv',
    url:'/vodshow/fyclass/fyfilter',
    //https://www.fuju1.tv/vodshow/Fuju/area/%E6%B3%B0%E5%9B%BD/by/time/class/%E6%A0%A1%E5%9B%AD/page/2.html
    //url: '/vodshow/fyclass-fyfilter',
    searchUrl:'/vodsearch**/page/fypage.html',
    class_name:'电影&腐剧&综艺&动漫',
    class_url:'BLdianying&Fuju&BLzongyi&BLdongman',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:1,//是否启用分类筛选,
    headers:{
        'User-Agent':'UC_UA',
    },
    // class_parse:'.fed-pops-navbar&&ul.fed-part-rows&&a.fed-part-eone:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    //class_parse:'.myui-header__menu&&li:gt(0):lt(6);a&&Text;a&&href;.*/(.*?).html',
    //cate_exclude: '专题',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.myui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.myui-vodlist li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
    二级:{"title":".myui-content__detail .title&&Text;.t-muted:eq(-1)&&Text","img":".myui-content__thumb&&.lazyload&&data-original","desc":";;.myui-content__detail p:eq(2)&&Text;.myui-content__detail p:eq(3)&&Text;.myui-content__detail p:eq(4)&&Text","content":".content&&Text","tabs":".nav-tabs:eq(0) li","lists":".myui-content__list:eq(#id) li"},
    搜索:'.myui-vodlist__media li;a&&title;*;*;a&&href;.text-muted:eq(-1)&&Text',
    //area/{{fl.地区}}/by/time/class/{{fl.剧情}}
    //filter_url:'{{fl.地区}}-{{fl.排序}}-{{fl.剧情}}-----fypage---{{fl.年份}}.html',
    filter_url:'area/{{fl.地区}}/by/{{fl.排序}}/class/{{fl.剧情}}/page/fypage/year/{{fl.年份}}.html',
    //filter:{'Fuju':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'悬疑','v':'悬疑'},{'n':'武侠','v':'武侠'},{'n':'科幻','v':'科幻'},{'n':'都市','v':'都市'},{'n':'爱情','v':'爱情'},{'n':'古装','v':'古装'},{'n':'战争','v':'战争'},{'n':'青春','v':'青春'},{'n':'偶像','v':'偶像'},{'n':'喜剧','v':'喜剧'},{'n':'家庭','v':'家庭'},{'n':'犯罪','v':'犯罪'},{'n':'奇幻','v':'奇幻'},{'n':'剧情','v':'剧情'},{'n':'乡村','v':'乡村'},{'n':'年份','v':'年份'},{'n':'警匪','v':'警匪'},{'n':'谍战','v':'谍战'},{'n':'冒险','v':'冒险'},{'n':'罪案','v':'罪案'},{'n':'宫廷','v':'宫廷'},{'n':'BL','v':'BL'}]},{'key':'年份','name':'按年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],'BLdianying':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'悬疑','v':'悬疑'},{'n':'武侠','v':'武侠'},{'n':'科幻','v':'科幻'},{'n':'都市','v':'都市'},{'n':'爱情','v':'爱情'},{'n':'古装','v':'古装'},{'n':'战争','v':'战争'},{'n':'青春','v':'青春'},{'n':'偶像','v':'偶像'},{'n':'喜剧','v':'喜剧'},{'n':'家庭','v':'家庭'},{'n':'犯罪','v':'犯罪'},{'n':'奇幻','v':'奇幻'},{'n':'剧情','v':'剧情'},{'n':'乡村','v':'乡村'},{'n':'年份','v':'年份'},{'n':'警匪','v':'警匪'},{'n':'谍战','v':'谍战'},{'n':'冒险','v':'冒险'},{'n':'罪案','v':'罪案'},{'n':'宫廷','v':'宫廷'},{'n':'BL','v':'BL'}]},{'key':'年份','name':'按年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],'16':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'悬疑','v':'悬疑'},{'n':'武侠','v':'武侠'},{'n':'科幻','v':'科幻'},{'n':'都市','v':'都市'},{'n':'爱情','v':'爱情'},{'n':'古装','v':'古装'},{'n':'战争','v':'战争'},{'n':'青春','v':'青春'},{'n':'偶像','v':'偶像'},{'n':'喜剧','v':'喜剧'},{'n':'家庭','v':'家庭'},{'n':'犯罪','v':'犯罪'},{'n':'奇幻','v':'奇幻'},{'n':'剧情','v':'剧情'},{'n':'乡村','v':'乡村'},{'n':'年份','v':'年份'},{'n':'警匪','v':'警匪'},{'n':'谍战','v':'谍战'},{'n':'冒险','v':'冒险'},{'n':'罪案','v':'罪案'},{'n':'宫廷','v':'宫廷'},{'n':'BL','v':'BL'}]},{'key':'年份','name':'按年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],'15':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'悬疑','v':'悬疑'},{'n':'武侠','v':'武侠'},{'n':'科幻','v':'科幻'},{'n':'都市','v':'都市'},{'n':'爱情','v':'爱情'},{'n':'古装','v':'古装'},{'n':'战争','v':'战争'},{'n':'青春','v':'青春'},{'n':'偶像','v':'偶像'},{'n':'喜剧','v':'喜剧'},{'n':'家庭','v':'家庭'},{'n':'犯罪','v':'犯罪'},{'n':'奇幻','v':'奇幻'},{'n':'剧情','v':'剧情'},{'n':'乡村','v':'乡村'},{'n':'年份','v':'年份'},{'n':'警匪','v':'警匪'},{'n':'谍战','v':'谍战'},{'n':'冒险','v':'冒险'},{'n':'罪案','v':'罪案'},{'n':'宫廷','v':'宫廷'},{'n':'BL','v':'BL'}]},{'key':'年份','name':'按年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],'2':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'悬疑','v':'悬疑'},{'n':'武侠','v':'武侠'},{'n':'科幻','v':'科幻'},{'n':'都市','v':'都市'},{'n':'爱情','v':'爱情'},{'n':'古装','v':'古装'},{'n':'战争','v':'战争'},{'n':'青春','v':'青春'},{'n':'偶像','v':'偶像'},{'n':'喜剧','v':'喜剧'},{'n':'家庭','v':'家庭'},{'n':'犯罪','v':'犯罪'},{'n':'奇幻','v':'奇幻'},{'n':'剧情','v':'剧情'},{'n':'乡村','v':'乡村'},{'n':'年份','v':'年份'},{'n':'警匪','v':'警匪'},{'n':'谍战','v':'谍战'},{'n':'冒险','v':'冒险'},{'n':'罪案','v':'罪案'},{'n':'宫廷','v':'宫廷'},{'n':'BL','v':'BL'}]},{'key':'地区','name':'按地区','value':[{'n':'全部','v':''},{'n':'内地','v':'内地'},{'n':'韩国','v':'韩国'},{'n':'香港','v':'香港'},{'n':'台湾','v':'台湾'},{'n':'美国','v':'美国'},{'n':'英国','v':'英国'},{'n':'巴西','v':'巴西'},{'n':'西班牙','v':'西班牙'},{'n':'泰国','v':'泰国'},{'n':'德国','v':'德国'},{'n':'法国','v':'法国'},{'n':'日本','v':'日本'},{'n':'荷兰','v':'荷兰'}]},{'key':'年份','name':'按年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],'3':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'真人秀','v':'真人秀'},{'n':'选秀','v':'选秀'},{'n':'竞演','v':'竞演'},{'n':'情感','v':'情感'},{'n':'访谈','v':'访谈'},{'n':'播报','v':'播报'},{'n':'旅游','v':'旅游'},{'n':'音乐','v':'音乐'},{'n':'美食','v':'美食'},{'n':'纪实','v':'纪实'},{'n':'曲艺','v':'曲艺'},{'n':'生活','v':'生活'},{'n':'游戏互动','v':'游戏互动'}]},{'key':'地区','name':'按地区','value':[{'n':'全部','v':''},{'n':'内地','v':'内地'},{'n':'香港','v':'香港'},{'n':'台湾','v':'台湾'},{'n':'韩国','v':'韩国'},{'n':'美国','v':'美国'}]},{'key':'年份','name':'按年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],'4':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'玄幻','v':'玄幻'},{'n':'武侠','v':'武侠'},{'n':'情感','v':'情感'},{'n':'科幻','v':'科幻'},{'n':'热血','v':'热血'},{'n':'推理','v':'推理'},{'n':'搞笑','v':'搞笑'},{'n':'冒险','v':'冒险'},{'n':'萝莉','v':'萝莉'},{'n':'校园','v':'校园'},{'n':'动作','v':'动作'},{'n':'机战','v':'机战'},{'n':'运动','v':'运动'},{'n':'战争','v':'战争'},{'n':'少年','v':'少年'},{'n':'少女','v':'少女'},{'n':'社会','v':'社会'},{'n':'亲子','v':'亲子'},{'n':'益智','v':'益智'},{'n':'励志','v':'励志'},{'n':'其他','v':'其他'}]},{'key':'地区','name':'按地区','value':[{'n':'全部','v':''},{'n':'国产','v':'国产'},{'n':'日本','v':'日本'},{'n':'美国','v':'美国'},{'n':'法国','v':'法国'},{'n':'其他','v':'其他'}]},{'key':'年份','name':'按年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],'20':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'悬疑','v':'悬疑'},{'n':'武侠','v':'武侠'},{'n':'科幻','v':'科幻'},{'n':'都市','v':'都市'},{'n':'爱情','v':'爱情'},{'n':'古装','v':'古装'},{'n':'战争','v':'战争'},{'n':'青春','v':'青春'},{'n':'偶像','v':'偶像'},{'n':'喜剧','v':'喜剧'},{'n':'家庭','v':'家庭'},{'n':'犯罪','v':'犯罪'},{'n':'奇幻','v':'奇幻'},{'n':'剧情','v':'剧情'},{'n':'乡村','v':'乡村'},{'n':'年份','v':'年份'},{'n':'警匪','v':'警匪'},{'n':'谍战','v':'谍战'},{'n':'冒险','v':'冒险'},{'n':'罪案','v':'罪案'},{'n':'宫廷','v':'宫廷'},{'n':'BL','v':'BL'}]},{'key':'年份','name':'按年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}],'21':[{'key':'剧情','name':'按剧情','value':[{'n':'全部','v':''},{'n':'悬疑','v':'悬疑'},{'n':'武侠','v':'武侠'},{'n':'科幻','v':'科幻'},{'n':'都市','v':'都市'},{'n':'爱情','v':'爱情'},{'n':'古装','v':'古装'},{'n':'喜剧','v':'喜剧'},{'n':'犯罪','v':'犯罪'},{'n':'奇幻','v':'奇幻'},{'n':'剧情','v':'剧情'}]},{'key':'年份','name':'按年份','value':[{'n':'全部','v':''},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'}]},{'key':'排序','name':'按排序','value':[{'n':'排序','v':''},{'n':'时间','v':'time'},{'n':'人气','v':'hits'},{'n':'评分','v':'score'}]}]},

      filter: {
'BLdianying':[
  {'key':'剧情','name':'按剧情','value':[
  {'n':'全部','v':''},
  {'n':'传记','v':'传记'},
  {'n':'剧情','v':'剧情'},
  {'n':'校园','v':'校园'},
  {'n':'喜剧','v':'喜剧'},
  {'n':'家庭','v':'家庭'},
  {'n':'运动','v':'运动'},
  {'n':'腐向','v':'腐向'},
  {'n':'奇幻','v':'奇幻'},
  {'n':'现代','v':'现代'},
  {'n':'惊悚','v':'惊悚'},
  {'n':'古装','v':'古装'},
  {'n':'犯罪','v':'犯罪'},
  {'n':'悬疑','v':'悬疑'},
  {'n':'HE','v':'HE'},
  {'n':'BE','v':'BE'},
  {'n':'小说改编','v':'小说改编'},
  {'n':'真实改编','v':'真实改编'},
  {'n':'微电影','v':'微电影'}]},

  {'key':'地区','name':'按地区','value':[
  {'n':'全部','v':''},
  {'n':'泰国','v':'泰国'},
  {'n':'内地','v':'内地'},
  {'n':'台湾','v':'台湾'},
  {'n':'香港','v':'香港'},
  {'n':'韩国','v':'韩国'},
  {'n':'英国','v':'英国'},
  {'n':'越南','v':'越南'},
  {'n':'日本','v':'日本'},
  {'n':'法国','v':'法国'},
  {'n':'意大利','v':'意大利'},
  {'n':'美国','v':'美国'},
  {'n':'西班牙','v':'西班牙'},
  {'n':'菲律宾','v':'菲律宾'},
  {'n':'其它地区','v':'其它地区'}]},
  
  {'key':'年份','name':'按年份','value':[
  {'n':'全部','v':''},
  {'n':'2022','v':'2022'},
  {'n':'2021','v':'2021'},
  {'n':'2020','v':'2020'},
  {'n':'2019','v':'2019'},
  {'n':'2018','v':'2018'},
  {'n':'2017','v':'2017'},
  {'n':'2016','v':'2016'},
  {'n':'2015','v':'2015'},
  {'n':'2014','v':'2014'},
  {'n':'2013','v':'2013'},
  {'n':'2012','v':'2012'},
  {'n':'2011','v':'2011'},
  {'n':'2010','v':'2010'},
  {'n':'2009','v':'2009'},
  {'n':'2008','v':'2008'},
  {'n':'2006','v':'2006'},
  {'n':'2005','v':'2005'},
  {'n':'2004','v':'2004'}]},
  
  {'key':'排序','name':'排序','value':[
  {'n':'时间','v':'time'},
  {'n':'人气','v':'hits'},
  {'n':'评分','v':'score'}]}],
  
'Fuju':[
  {'key':'剧情','name':'按剧情','value':[
  {'n':'全部','v':''},
  {'n':'校园','v':'校园'},
  {'n':'腐向','v':'腐向'},
  {'n':'喜剧','v':'喜剧'},
  {'n':'家庭','v':'家庭'},
  {'n':'运动','v':'运动'},
  {'n':'奇幻','v':'奇幻'},
  {'n':'惊悚','v':'惊悚'},
  {'n':'现代','v':'现代'},
  {'n':'古装','v':'古装'},
  {'n':'犯罪','v':'犯罪'},
  {'n':'悬疑','v':'悬疑'},
  {'n':'HE','v':'HE'},
  {'n':'BE','v':'BE'},
  {'n':'耽改','v':'耽改'},
  {'n':'小说改编','v':'小说改编'},
  {'n':'漫画改编','v':'漫画改编'}]},
  
  {'key':'地区','name':'按地区','value':[
  {'n':'全部','v':''},
  {'n':'泰国','v':'泰国'},
  {'n':'内地','v':'内地'},
  {'n':'台湾','v':'台湾'},
  {'n':'香港','v':'香港'},
  {'n':'韩国','v':'韩国'},
  {'n':'英国','v':'英国'},
  {'n':'越南','v':'越南'},
  {'n':'日本','v':'日本'},
  {'n':'法国','v':'法国'},
  {'n':'意大利','v':'意大利'},
  {'n':'美国','v':'美国'},
  {'n':'西班牙','v':'西班牙'},
  {'n':'菲律宾','v':'菲律宾'},
  {'n':'其它地区','v':'其它地区'}]},
  
  {'key':'年份','name':'按年份','value':[
  {'n':'全部','v':''},
  {'n':'2022','v':'2022'},
  {'n':'2021','v':'2021'},
  {'n':'2020','v':'2020'},
  {'n':'2019','v':'2019'},
  {'n':'2018','v':'2018'},
  {'n':'2017','v':'2017'},
  {'n':'2016','v':'2016'},
  {'n':'2015','v':'2015'},
  {'n':'2014','v':'2014'},
  {'n':'2013','v':'2013'},
  {'n':'2012','v':'2012'},
  {'n':'2011','v':'2011'},
  {'n':'2010','v':'2010'},
  {'n':'2009','v':'2009'},
  {'n':'2008','v':'2008'},
  {'n':'2006','v':'2006'},
  {'n':'2005','v':'2005'},
  {'n':'2004','v':'2004'}]},
  
  {'key':'排序','name':'排序','value':[
  {'n':'时间','v':'time'},
  {'n':'人气','v':'hits'},
  {'n':'评分','v':'score'}]}],


'BLzongyi':[
   {'key':'地区','name':'按地区','value':[
  {'n':'全部','v':''},
  {'n':'泰国','v':'泰国'},
  {'n':'内地','v':'内地'},
  {'n':'台湾','v':'台湾'},
  {'n':'香港','v':'香港'},
  {'n':'韩国','v':'韩国'},
  {'n':'英国','v':'英国'},
  {'n':'越南','v':'越南'},
  {'n':'日本','v':'日本'},
  {'n':'法国','v':'法国'},
  {'n':'意大利','v':'意大利'},
  {'n':'美国','v':'美国'},
  {'n':'西班牙','v':'西班牙'},
  {'n':'菲律宾','v':'菲律宾'},
  {'n':'其它地区','v':'其它地区'}]},
  
  {'key':'年份','name':'按年份','value':[
  {'n':'全部','v':''},
  {'n':'2022','v':'2022'},
  {'n':'2021','v':'2021'},
  {'n':'2020','v':'2020'},
  {'n':'2019','v':'2019'},
  {'n':'2018','v':'2018'},
  {'n':'2017','v':'2017'},
  {'n':'2016','v':'2016'},
  {'n':'2015','v':'2015'},
  {'n':'2014','v':'2014'},
  {'n':'2013','v':'2013'},
  {'n':'2012','v':'2012'},
  {'n':'2011','v':'2011'},
  {'n':'2010','v':'2010'},
  {'n':'2009','v':'2009'},
  {'n':'2008','v':'2008'},
  {'n':'2006','v':'2006'},
  {'n':'2005','v':'2005'},
  {'n':'2004','v':'2004'}]},
  
  {'key':'排序','name':'排序','value':[
  {'n':'时间','v':'time'},
  {'n':'人气','v':'hits'},
  {'n':'评分','v':'score'}]}],

'BLdongman':[
  {'key':'剧情','name':'按剧情','value':[
  {'n':'全部','v':''},
  {'n':'校园','v':'校园'},
  {'n':'喜剧','v':'喜剧'},
  {'n':'家庭','v':'家庭'},
  {'n':'运动','v':'运动'},
  {'n':'腐向','v':'腐向'},
  {'n':'奇幻','v':'奇幻'},
  {'n':'架空','v':'架空'},
  {'n':'惊悚','v':'惊悚'},
  {'n':'现代','v':'现代'},
  {'n':'古代','v':'古代'},
  {'n':'灵异','v':'灵异'},
  {'n':'犯罪','v':'犯罪'},
  {'n':'HE','v':'HE'},
  {'n':'BE','v':'BE'},
  {'n':'小说改编','v':'小说改编'},
  {'n':'漫画改编','v':'漫画改编'}]},
  
  {'key':'地区','name':'按地区','value':[
  {'n':'全部','v':''},
  {'n':'日本','v':'日本'},
  {'n':'韩国','v':'韩国'},
  {'n':'内地','v':'内地'},
  {'n':'台湾','v':'台湾'},
  {'n':'香港','v':'香港'},
  {'n':'英国','v':'英国'},
  {'n':'越南','v':'越南'},
  {'n':'泰国','v':'泰国'},
  {'n':'法国','v':'法国'},
  {'n':'意大利','v':'意大利'},
  {'n':'美国','v':'美国'},
  {'n':'西班牙','v':'西班牙'},
  {'n':'菲律宾','v':'菲律宾'},
  {'n':'其它地区','v':'其它地区'}]},
  
  {'key':'年份','name':'按年份','value':[
  {'n':'全部','v':''},
  {'n':'2022','v':'2022'},
  {'n':'2021','v':'2021'},
  {'n':'2020','v':'2020'},
  {'n':'2019','v':'2019'},
  {'n':'2018','v':'2018'},
  {'n':'2017','v':'2017'},
  {'n':'2016','v':'2016'},
  {'n':'2015','v':'2015'},
  {'n':'2014','v':'2014'},
  {'n':'2013','v':'2013'},
  {'n':'2012','v':'2012'},
  {'n':'2011','v':'2011'},
  {'n':'2010','v':'2010'},
  {'n':'2009','v':'2009'},
  {'n':'2008','v':'2008'},
  {'n':'2006','v':'2006'},
  {'n':'2005','v':'2005'},
  {'n':'2004','v':'2004'}]},
  
  {'key':'排序','name':'排序','value':[
  {'n':'时间','v':'time'},
  {'n':'人气','v':'hits'},
  {'n':'评分','v':'score'}]}]},
}