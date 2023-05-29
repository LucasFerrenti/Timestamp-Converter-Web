function init() {
    let d = new Date();

    let inp = g("ts2human_inp");
    let out = g("human2ts_inp");
    if (inp) {
        inp.value = Math.floor(d.getTime() / 1000);
    }
    if(out){
        out.value = d.toLocaleString().replace(",","");
    }
    if (inp && out) {
        ts2human();
        human2ts();
    }
}

function ts2human() {
    let ts = g("ts2human_inp").value;
    let dt = new Date(ts * 1000);
    g("ts2human_out_inp").value = "(U) " + subtractHours(dt, 3).toLocaleString().replace(",","") + " - (L) " + dt.toLocaleString().replace(",","");
}
function human2ts() {
    let di = g("human2ts_inp").value;
    di = formatHuman(di);
    let ts = Math.floor(Date.parse(di) / 1000);
    g("human2ts_out_inp").value = "(U) " + ts + " - (L) " + (ts-10800);
}

function formatHuman(value){
    let a = value.replace(",","");
    let arr = value.split(" ");
    let date = arr[0];
    let dateArr = date.split("/");
    let ret = dateArr[2] + "/" + dateArr[1] + "/" + dateArr[0] + " " + arr[1];
    return ret;
}

function g(id) {
    return document.getElementById(id);
}

function sH(id, h) {
    g(id).innerHTML = h;
}

function subtractHours(date, hours) {
    let ret = new Date(date.getTime());
    ret.setHours(ret.getHours() - hours);
    return ret;
  }