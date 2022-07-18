var myVar = setInterval(function() {
    myTimer()
}, 1000);
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("devnguyen-hour").innerHTML = t;
}
n = new Date();
if (n.getTimezoneOffset() == 0) t = n.getTime() + (7 * 60 * 60 * 1000);
else t = n.getTime();
n.setTime(t);
var dn = new Array("Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7");
d = n.getDay();
m = n.getMonth() + 1;
y = n.getFullYear()
var date = dn[d] + ", " + (n.getDate() < 10 ? "0" : "") + n.getDate() + "/" + (m < 10 ? "0" : "") + m + "/" + y;
document.getElementById("devnguyen-date").innerHTML = date;