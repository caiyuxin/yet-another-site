var $ = require('cheerio');
var fs = require('fs');
var path = require('path');
var os = require('os');
var _ = require('underscore');
var iconv = require('iconv-lite');
var pinyin = require('pinyin');

function err_end(err) {
  console.error(err);
  process.exit(255);
}

function Member(vs) {
  //console.log(vs);
  this.name = vs[7];
  this.year = vs[9];
  this.pos = vs[vs.indexOf('就业单位') + 1];
  if (this.pos == '工作岗位')
    this.pos = undefined;
  this.email = vs[vs.indexOf('邮箱') + 1];
}

function cpIcon(path, type, member) {
  var local = "/images/team/" + member.year + "_" + pinyin(member.name, { style: 0 }) + "." + type;
  local = local.replace(/,/g, "_");
  //fs.createReadStream(path).pipe(fs.createWriteStream('public' + local));
  return local;
}

function parse(fp) {
  //console.log("Parsing: %s", fp);
  var html = fs.readFileSync(fp);
  html = iconv.decode(html, 'GBK');
  var spans = $('span', html);
  var vs = _.map(_.filter(spans, function (span) {
    var data = span.children[0].data;
    return data && !data.startsWith('!') && !data.startsWith('[');
  }), function (span) {
    return span.children[0].data;
  });
  return new Member(vs);
}

function detectIcon(base, m) {
  var icon_png = base + ".png";
  var icon_jpg = base + ".jpg";
  if (fs.existsSync(icon_jpg)) {
    return cpIcon(icon_jpg, "jpg", m)
  } else if (fs.existsSync(icon_png)) {
    return cpIcon(icon_png, "png", m)
  } else {
    return null;
  }
}

function scan(entry) {
  var abs_entry = path.resolve(entry);
  //console.log("Scanning: %s", abs_entry);
  var files = fs.readdirSync(abs_entry);
  return _.flatten(_.map(files, function (file) {
    var p = path.join(abs_entry, file);
    fs.stat(p, function (err, stat) {
      if (stat.isDirectory() && !p.endsWith('files')) {
        var ms = scan(p);
        //console.log('ms', p, ms);
        return ms;
      } else if (stat.isFile() && p.endsWith('htm') && !p.endsWith('header.htm')) {
        var m = parse(p);
        var icon = p.replace(".htm", ".files/image001");
        m.path = p.slice(-4);
        m.icon = detectIcon(icon, m);
        console.log(JSON.stringify(m), ",");
        return m;
      }
      else {
        return false;
      }
    })
  }));
}

var members = scan('/Users/nerdwizard/Downloads/team_members');
console.error(members.length);
