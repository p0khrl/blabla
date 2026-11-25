(function(){"use strict";var d=document;
d.addEventListener("contextmenu",function(e){e.preventDefault()});
d.addEventListener("dragstart",function(e){e.preventDefault()});
d.addEventListener("keydown",function(e){var k=(e.key||"").toLowerCase(),c=e.ctrlKey||e.metaKey;
if(e.keyCode===123||k==="f12"||(c&&k==="u")||(c&&e.shiftKey&&(k==="i"||k==="j"||k==="c"))||(e.metaKey&&e.altKey&&(k==="i"||k==="u"||k==="j"||k==="c"))){e.preventDefault();e.stopPropagation();return false}},true);
})();