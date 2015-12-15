function Member(name, pos, email, icon) {
  this.name  = name;
  this.pos   = pos;
  this.email = email;
  this.icon  = icon;
}

var team_members = [
  {"name":"陈旭","year":"2007","pos":"湖南省公安厅交通管理局","email":"34607013@qq.com","path":".htm","icon":"/images/team/2007_chen_xu.jpg"} ,
  {"name":"思磊","year":"2010","pos":"军队","email":"silei862@gmail.com","path":".htm","icon":"/images/team/2010_si_lei.jpg"} ,
  {"name":"李裕宏","year":"2010","pos":"澳门大学","email":"daniel.yuhong@gmail.com","path":".htm","icon":"/images/team/2010_li_yu_hong.jpg"} ,
  {"name":"陈欢","year":"2010","pos":"展讯通信","email":"chenhuan734@163.com","path":".htm","icon":"/images/team/2010_chen_huan.jpg"} ,
  {"name":"黄威","year":"2009","pos":"东方财富网","email":"现居地","path":".htm","icon":"/images/team/2009_huang_wei.jpg"} ,
  {"name":"胡先莹","year":"2009","pos":"陕西移动","email":"13991135467@139.com","path":".htm","icon":"/images/team/2009.08_hu_xian_ying.png"} ,
  {"name":"郑凌","year":"2011","pos":"西安电子科技大学","email":"877328048@qq.com","path":".htm","icon":"/images/team/2011_zheng_ling.jpg"} ,
  {"name":"王剑","year":"2011","pos":"西安华为","email":"现居地","path":".htm","icon":"/images/team/2011_wang_jian.png"} ,
  {"name":"闫锐","year":"2012","pos":"中兴","email":"634420630@qq.com","path":".htm","icon":"/images/team/2012_yan_rui.jpg"} ,
  {"name":"王秀东","year":"2012","pos":"华为","email":"wandxd@163.com","path":".htm","icon":"/images/team/2012.09_wang_xiu_dong.jpg"} ,
  {"name":"王羽黛","year":"2012","pos":"IBM","email":"wangyudai@163.com","path":".htm","icon":"/images/team/2012_wang_yu_dai.png"} ,
  {"name":"孙庚泽","year":"2013","pos":"西安华为技术有限公司","email":"现居地","path":".htm","icon":"/images/team/2013_sun_geng_ze.png"} ,
  {"name":"武文晖","year":"2013","pos":"68216","email":"9431219@qq.com","path":".htm","icon":"/images/team/2013.7_wu_wen_hui.jpg"} ,
  {"name":"王国洗","year":"2013","pos":"腾讯","email":"318175542@qq.com","path":".htm","icon":"/images/team/2013.7_wang_guo_xi.jpg"} ,
  {"name":"刘媛","year":"2013","pos":"中兴","email":"13991263379@163.com","path":".htm","icon":"/images/team/2013_liu_yuan.jpg"} ,
  {"name":"彭希璐","year":"2013","pos":"华北计算技术研究所","email":"635594906@qq.com","path":".htm","icon":"/images/team/2013_peng_xi_lu.jpg"} ,
  {"name":"杨艳云","year":"2013","pos":"招银网络科技","email":"1208746537@qq.com","path":".htm","icon":"/images/team/2013.9_yang_yan_yun.jpg"} ,
  {"name":"薛丹","year":"2013","pos":"美团网","email":"794706047@qq.com","path":".htm","icon":"/images/team/2013_xue_dan.jpg"} ,
  {"name":"李志国","year":"2014","pos":"学校","email":"2500656541@qq.com","path":".htm","icon":"/images/team/2014_li_zhi_guo.jpg"} ,
  {"name":"杨文瀚","year":"2014","email":"现居地","path":".htm","icon":"/images/team/2014_yang_wen_han.png"} ,
  {"name":"张祎","year":"2014","email":"807304355@qq.com","path":".htm","icon":"/images/team/2014.7_zhang_yi.jpg"} ,
  {"name":"田媛美","year":"2014","email":"907447549@qq.com","path":".htm","icon":"/images/team/2014_tian_yuan_mei.jpg"} ,
  {"name":"管锁库","year":"2014","pos":"无","email":"现居地","path":".htm","icon":"/images/team/2014_guan_suo_ku.png"} ,
  {"name":"刘欢","year":"2015","pos":"无","email":"996037681@qq.com","path":".htm","icon":"/images/team/2015_liu_huan.jpg"} ,
  {"name":"张淑娥","year":"2015","pos":"在读","email":"现居地","path":".htm","icon":"/images/team/2015_zhang_shu_e.jpg"} ,
  {"name":"张笑","year":"2015","pos":"待定","email":"272434721@qq.com","path":".htm","icon":"/images/team/2015_zhang_xiao.jpg"} ,
];

module.exports = team_members;