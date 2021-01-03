// ini kode countdown (batas waktu untuk pelanggan)
var items = document.querySelectorAll('#countdown');
    for (var i = 0, len = items.length; i < len; i++) {(

        function() {
            var e, n = parseInt("3"), t = parseInt(""), o = parseInt(""),
                a = 36e5 * (isNaN(n) ? 0 : n) + 6e4 * (isNaN(t) ? 0 : t) + 1e3 * (isNaN(o) ? 0 : o);
                e = 0 == a ? new Date("").getTime() + a : (new Date).getTime() + a;
                            
                var s = this.querySelector("[js=countdown]"),
                    d = this.querySelector("[js=countdown-endtext]"),
                    i = this.querySelector("[js=countdown-day]"),
                    l = this.querySelector("[js=countdown-hour]"),
                    r = this.querySelector("[js=countdown-minute]"),
                    u = this.querySelector("[js=countdown-second]"),
                    c = this.gjs_countdown_interval;
                    c && c && clearInterval(c);
                            
                var f = function(e, n, t, o) {
                        l.innerHTML = e < 10 ? "0" + e : e, l.innerHTML = n < 10 ? "0" + n : n, r.innerHTML = t < 10 ? "0" + t : t, u.innerHTML = o < 10 ? "0" + o : o
                },
                        
                p = function() {
                    var n = (new Date).getTime(),
                        t = e - n,
                        o = Math.floor(t / 864e5),
                        a = Math.floor(o * 24 + t % 864e5 / 36e5),
                        i = Math.floor(t % 36e5 / 6e4),
                        l = Math.floor(t % 6e4 / 1e3);
                        f(o, a, i, l), t < 0 && (clearInterval(v), d.innerHTML = "EXPIRED", s.style.display = "none", d.style.display = "")
                };

                if (e) {
                    var v = setInterval(p, 1e3);
                    this.gjs_countdown_interval = v, d.style.display = "none", s.style.display = "", p()
                } else f(0, 0, 0, 0)
        }.bind(items[i])

    )();}