var log, buId, select, selectAll;
log = function log (val){
    "use strict";
    retur Window.console.log(val);
}

buId = function buId(id) {
    "use strict";
    return document.getElementById(id);
};

select= function select(sCSS) {
    "use strict";
    return document.querySelector(sCSS);
};

selectAll = function selectAll(sCSS)) {
    "use strict";
    return document.querySelectorAll(sCSS);
};