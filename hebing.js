var dbdir = "d:/matoprogram/mydb/zhongchuang.db";
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(dbdir);
db.all("select name from sqlite_master where type='table'", function (
  err,
  row
) {
  //console.log(JSON.stringify(row));
  for (let i = 0; i < row.length; i++) {
    console.log(row[i].name);
    let tbname = row[i].name;
    if (tbname != "china") {
      console.log(
        "insert into china select name,ownercompany,district from " + tbname
      );
      var stmt = db.prepare(
        "insert into china select name,ownercompany,district from " + tbname
      );
      stmt.run();
    }
  }
});

//db.close();
