e.prototype.setupQuoteCycle = function() {
  console.log('setup quote');
  var e = this, t = this.runQuoteCycle(0);
  i(".quotes .options .option").eq(0).addClass("active"),
    i(".quotes .options .option").on("click", function(n) {
      n.preventDefault();
      var r = i(".quotes .options .option").index(n.currentTarget);
      clearInterval(t),
        i(".quotes .quote").hide(),
        i(".quotes .options .option").removeClass("active"),
        i(".quotes .quote").eq(r).fadeIn("slow"),
        i(".quotes .options .option").eq(r).addClass("active"),
        t = e.runQuoteCycle(r)
    })
}
  ,
  e.prototype.runQuoteCycle = function(e) {
    var t = 5e3
      , n = i(".quotes .options .option").length;
    return setInterval(function() {
      i(".quotes .quote").hide(),
        i(".quotes .options .option").removeClass("active"),
        e == n - 1 ? e = 0 : e++,
        i(".quotes .quote").eq(e).fadeIn("slow"),
        i(".quotes .options .option").eq(e).addClass("active")
    }, t)
  }
