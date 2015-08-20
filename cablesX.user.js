// ==UserScript==
// @name        cablesX
// @namespace   cablesX
// @include     http*://cable6.net/*
// @run-at      DOMContentLoaded
// @version     0.16
// @grant       GM_xmlhttpRequest
// @downloadURL https://github.com/RochefortetGabin/cablesX/raw/master/cablesX.user.js
// @icon        data:image/png;base64,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
// ==/UserScript==

//Applies CSS rules to the menu
function stickyMenu(){
    var m = document.querySelector("div.boardlist:nth-child(1)");
    document.querySelector(".banner").style.marginTop = m.scrollHeight + "px";
    m.style.position = "fixed";
    m.style.top = "0px";
    m.style.left = "0px";
    m.style.width = "100%";
    m.style.background = "rgba(255,255,255,0.7)";
    m.style.marginTop = "0px";
}

//Prepares the quotes. Adds event listeners on links and create classes in order for the quote to go lighter when they're inside another post.
function quotes(){
    var elems = document.querySelectorAll(".body a");
    for(var i = 0; i < elems.length; i++){
        if(elems[i].innerHTML.substr(0,8) == "&gt;&gt;" && elems[i].innerHTML.substr(8,4) != "&gt;") {
            elems[i].onclick = null;
            elems[i].addEventListener("click", showQuote);
        }
    }
    elems = document.querySelectorAll(".mentioned a");
    for(i = 0; i < elems.length; i++){
        elems[i].onclick = null;
        elems[i].addEventListener("click", showReply);
    }
    elems = document.getElementsByClassName("post reply");
    for(i = 0; i < elems.length; i++){
        elems[i].className += " depth-0";
    }
    var style;
    var depthColor = window.getComputedStyle(elems[0]).backgroundColor;
    i = 1;
    while((depthColor = lighter(depthColor))){
        style = document.createElement("style");
        style.innerHTML = "div.reply.post.depth-"+i+"{ background: "+depthColor+" }";
        document.head.appendChild(style);
        i++;
    }
    G.maxPostDepth = i;
}

//Returns a lighter color than the one that's given as parameter.
function lighter(s){
    var color = asRGB(s);
    if(!color)
        return false;
    color.r += 5;
    color.g += 5;
    color.b += 5;
    if(color.r > 255){
        color.r = 255;
    }
    if(color.g > 255){
        color.g = 255;
    }
    if(color.b > 255){
        color.b = 255;
    }
    if(color.r == 255 && color.g == 255 && color.b == 255){
        return false;
    }
    return "rgb("+color.r+", "+color.g+", "+color.b+")";
}

function asRGB(color){
    return asRGBFromHex(color) || asRGBFromRGB(color) || asRGBFromRGBA(color) || asRGBFromName(color);
}

function asRGBFromRGB(color) {
    color = color.match(/([0-9]{1,3})/g);
    if (color.length >= 3) {
        return {'r': parseInt(color[0]),
                'g': parseInt(color[1]),
                'b': parseInt(color[2]),
                "original": color};
    }
    return null;
}

function asRGBFromRGBA(color) {
    if (color.match("^rgba\\(([0-9]{1,3},){3}(1|0(\\.[0-9]{1,256}){0,1})\\)$")) {
        color = color.match(/([0-9]{1,3}),/g);
        return asRGBFromRGB("rgb(" + color[0] + ',' + color[1] + ',' + color[2] + ")");
    } else {
        return null;
    }
}

function asRGBFromHex(color) {
    if (color.match("^#[0-9a-fA-F]{3}$") !== null)
        color = "#" + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
    if (color.match("^#[0-9a-fA-F]{6}$") !== null)
        return {'r': parseInt(color.substr(1, 2), 16),
                'g': parseInt(color.substr(3, 2), 16),
                'b': parseInt(color.substr(5, 2), 16),
                "original": color};
    else
        return null;
}

function asRGBFromName(color) {
    color = ({ "AliceBlue": "#F0F8FF", "AntiqueWhite": "#FAEBD7", "Aqua": "#00FFFF", "Aquamarine": "#7FFFD4", "Azure": "#F0FFFF", "Beige": "#F5F5DC", "Bisque": "#FFE4C4", "Black": "#000000", "BlanchedAlmond": "#FFEBCD", "Blue": "#0000FF", "BlueViolet": "#8A2BE2", "Brown": "#A52A2A", "BurlyWood": "#DEB887", "CadetBlue": "#5F9EA0", "Chartreuse": "#7FFF00", "Chocolate": "#D2691E", "Coral": "#FF7F50", "CornflowerBlue": "#6495ED", "Cornsilk": "#FFF8DC", "Crimson": "#DC143C", "Cyan": "#00FFFF", "DarkBlue": "#00008B", "DarkCyan": "#008B8B", "DarkGoldenRod": "#B8860B", "DarkGray": "#A9A9A9", "DarkGreen": "#006400", "DarkKhaki": "#BDB76B", "DarkMagenta": "#8B008B", "DarkOliveGreen": "#556B2F", "Darkorange": "#FF8C00", "DarkOrchid": "#9932CC", "DarkRed": "#8B0000", "DarkSalmon": "#E9967A", "DarkSeaGreen": "#8FBC8F", "DarkSlateBlue": "#483D8B", "DarkSlateGray": "#2F4F4F", "DarkTurquoise": "#00CED1", "DarkViolet": "#9400D3", "DeepPink": "#FF1493", "DeepSkyBlue": "#00BFFF", "DimGray": "#696969", "DodgerBlue": "#1E90FF", "Feldspar": "#D19275", "FireBrick": "#B22222", "FloralWhite": "#FFFAF0", "ForestGreen": "#228B22", "Fuchsia": "#FF00FF", "Gainsboro": "#DCDCDC", "GhostWhite": "#F8F8FF", "Gold": "#FFD700", "GoldenRod": "#DAA520", "Gray": "#808080", "Green": "#008000", "GreenYellow": "#ADFF2F", "HoneyDew": "#F0FFF0", "HotPink": "#FF69B4", "IndianRed": "#CD5C5C", "Indigo": "#4B0082", "Ivory": "#FFFFF0", "Khaki": "#F0E68C", "Lavender": "#E6E6FA", "LavenderBlush": "#FFF0F5", "LawnGreen": "#7CFC00", "LemonChiffon": "#FFFACD", "LightBlue": "#ADD8E6", "LightCoral": "#F08080", "LightCyan": "#E0FFFF", "LightGoldenRodYellow": "#FAFAD2", "LightGrey": "#D3D3D3", "LightGreen": "#90EE90", "LightPink": "#FFB6C1", "LightSalmon": "#FFA07A", "LightSeaGreen": "#20B2AA", "LightSkyBlue": "#87CEFA", "LightSlateBlue": "#8470FF", "LightSlateGray": "#778899", "LightSteelBlue": "#B0C4DE", "LightYellow": "#FFFFE0", "Lime": "#00FF00", "LimeGreen": "#32CD32", "Linen": "#FAF0E6", "Magenta": "#FF00FF", "Maroon": "#800000", "MediumAquaMarine": "#66CDAA", "MediumBlue": "#0000CD", "MediumOrchid": "#BA55D3", "MediumPurple": "#9370D8", "MediumSeaGreen": "#3CB371", "MediumSlateBlue": "#7B68EE", "MediumSpringGreen": "#00FA9A", "MediumTurquoise": "#48D1CC", "MediumVioletRed": "#C71585", "MidnightBlue": "#191970", "MintCream": "#F5FFFA", "MistyRose": "#FFE4E1", "Moccasin": "#FFE4B5", "NavajoWhite": "#FFDEAD", "Navy": "#000080", "OldLace": "#FDF5E6", "Olive": "#808000", "OliveDrab": "#6B8E23", "Orange": "#FFA500", "OrangeRed": "#FF4500", "Orchid": "#DA70D6", "PaleGoldenRod": "#EEE8AA", "PaleGreen": "#98FB98", "PaleTurquoise": "#AFEEEE", "PaleVioletRed": "#D87093", "PapayaWhip": "#FFEFD5", "PeachPuff": "#FFDAB9", "Peru": "#CD853F", "Pink": "#FFC0CB", "Plum": "#DDA0DD", "PowderBlue": "#B0E0E6", "Purple": "#800080", "Red": "#FF0000", "RosyBrown": "#BC8F8F", "RoyalBlue": "#4169E1", "SaddleBrown": "#8B4513", "Salmon": "#FA8072", "SandyBrown": "#F4A460", "SeaGreen": "#2E8B57", "SeaShell": "#FFF5EE", "Sienna": "#A0522D", "Silver": "#C0C0C0", "SkyBlue": "#87CEEB", "SlateBlue": "#6A5ACD", "SlateGray": "#708090", "Snow": "#FFFAFA", "SpringGreen": "#00FF7F", "SteelBlue": "#4682B4", "Tan": "#D2B48C", "Teal": "#008080", "Thistle": "#D8BFD8", "Tomato": "#FF6347", "Turquoise": "#40E0D0", "Violet": "#EE82EE", "VioletRed": "#D02090", "Wheat": "#F5DEB3", "White": "#FFFFFF", "WhiteSmoke": "#F5F5F5", "Yellow": "#FFFF00", "YellowGreen": "#9ACD32"})[color];
    return color ? asRGBFromHex(color) : null;
}

//Moves the quote inside the post that is quoting it
function showQuote(e){
    var quote = document.getElementById("reply_" + e.target.innerHTML.substr("&gt;&gt;".length));
    if(quote !== null){
        preparePost(quote);
        if(quote.openedIn == e.target){
            getBack(quote);
        } else {
            if(quote.openedIn !== null){
                quote.parentNode.removeChild(quote.nextSibling);
            }
            quote.openedIn = e.target;
            e.target.parentNode.insertBefore(quote, e.target.nextSibling.nextSibling);
            quote.parentNode.insertBefore(document.createElement("br"), quote.nextSibling);
            var depth = parseInt(quote.parentNode.getAttribute("class").match("[0-9]{0,}$")[0]) + 1;
            if(depth >= G.maxPostDepth){
                depth = G.maxPostDepth;
            }
            quote.className = "reply post depth-" + depth;
        }
    }
    return e.preventDefault();
}

//Moves the reply inside the post it is replying to
function showReply(e){
    var reply = document.getElementById("reply_" + e.target.innerHTML.substr("&gt;&gt;".length));
    if(reply !== null){
        preparePost(reply);
        if(reply.openedIn == e.target){
            getBack(reply);
        } else {
            if(reply.openedIn !== null){
                reply.parentNode.removeChild(reply.nextSibling);
            }
            reply.openedIn = e.target;
            e.target.parentNode.parentNode.parentNode.insertBefore(reply, e.target.parentNode.parentNode.parentNode.lastChild);
            reply.parentNode.insertBefore(document.createElement("br"), reply.nextSibling);
            var depth = parseInt(reply.parentNode.getAttribute("class").match("[0-9]{0,}$")[0]) + 1;
            if(depth >= G.maxPostDepth){
                depth = G.maxPostDepth;
            }
            reply.className = "reply post depth-" + depth;
        }
    }
    return e.preventDefault();
}

//Prepares a post before it is moved with showReply/showQuote
function preparePost(post){
    if(post.prepared === true){
        return;
    }
    post.prepared = true;
    post.openedIn = null;
    post.originalBr = post.nextSibling;
    post.originalBr.style.display = "none";
    post.originalClassNames = post.getAttribute("class");
}

//Moves the post back where it originally was.
function getBack(post){
    post.openedIn = null;
    post.parentNode.removeChild(post.nextSibling);
    post.originalBr.parentNode.insertBefore(post, post.originalBr);
    post.originalBr.style.display = "block";
    post.className = post.originalClassNames;
}

function showPostById(e){
    var posts = document.getElementsByClassName(e.target.className);
    var div = document.createElement("div");
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "X";
    closeButton.style.position = "fixed";
    closeButton.style.right = "0px";
    closeButton.addEventListener("click", function(e){
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    });
    div.appendChild(closeButton);
    for(var i = 0; i < posts.length; i++){
        div.appendChild(posts[i].parentNode.parentNode.parentNode.cloneNode(true));
    }
    div.style.position = "fixed";
    div.style.right = "0px";
    div.style.top = "0px";
    div.style.width = "40%";
    div.style.height = "100%";
    div.style.overflow = "auto";
    div.style.background = "rgba(255,255,255,0.7)";
    document.body.appendChild(div);
}

//Gives an ID to every post that has one.
function colorId(){
    var ids = document.getElementsByClassName("posteruid");
    var styleElems = {};
    for(var i = 0; i < ids.length; i++){
        ids[i].addEventListener("click", showPostById);
        if (styleElems[ids[i].classList[1]])
            continue;
        styleElems[ids[i].classList[1]] = document.createElement("style");
        color = ids[i].innerHTML.match(/([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i);
        styleElems[ids[i].classList[1]].innerHTML = "." + ids[i].classList[1] + " {\ncolor: " + (parseInt(color[1], 16) + parseInt(color[2], 16) + parseInt(color[3], 16) > 425 ? "black" : "white") + ";\nbackground: #" + ids[i].innerHTML.substr(5,6) + ";\nborder-radius: 5px;\n}";
        document.head.appendChild(styleElems[ids[i].classList[1]]);
    }
}

//Sets the title
function setTitle(){
    G.subject = document.getElementsByClassName("subject")[0];
    if(G.subject){
        G.subject = G.subject.textContent;
    } else {
        G.subject = document.getElementsByClassName("post op")[0].firstChild.nextSibling;
        if(G.subject.innerHTML === ""){
            G.subject = document.querySelector('label[for="delete_' + G.threadNumber + '"] > .name').textContent;
        } else {
            var subject = G.subject.innerHTML.match(/^[^>]*<br>/);
            if(subject){
                G.subject = subject[0].replace(/<[^>]*>/g, "").replace("&gt;", ">").replace("&lt;", "<"); 
            } else {
                G.subject = G.subject.textContent;
            }
            if(G.subject.length > 50){
                G.subject = G.subject.substring(0,50) + "...";
            }
        }
    }
    document.title = G.boardName + " - " + G.subject;
}

//Mouseover
function mouseEnter(e){
    e.target.imgHover = document.createElement("img");
    e.target.imgHover.src = e.target.parentNode.href;
    e.target.imgHover.style.position = "fixed";
    document.body.appendChild(e.target.imgHover);
}

function mouseMove(e){
    e.target.imgHover.style.left = (e.clientX+10) + "px";
    e.target.imgHover.style.top = (e.clientY+10) + "px";
}

function mouseLeave(e){
    document.body.removeChild(e.target.imgHover);
}

function managePopupListeners(fn){
    var elems = document.getElementsByClassName("post-image");
    for(var i = 0; i < elems.length; i++){
        fn.call(elems[i], "mouseenter", mouseEnter);
        fn.call(elems[i], "mousemove", mouseMove);
        fn.call(elems[i], "mouseleave", mouseLeave);
    }
}

//setings
function settings(){
    var section = document.createElement("div");
    section.class = "setting_part";

    var title = document.createElement("h2");
    title.innerHTML = "cablesX";
    section.appendChild(title);

    var div = document.createElement("div");
    div.class = "setting_part";
    var label = document.createElement("label");
    var input = document.createElement("input");
    input.type = "checkbox";
    input.checked = GM_getValue("popup_on_mouseover");
    input.addEventListener("change", function(e){
        GM_setValue("popup_on_mouseover", e.target.checked);
        if(e.target.checked){
            managePopupListeners(HTMLImageElement.prototype.addEventListener);
        } else {
            managePopupListeners(HTMLImageElement.prototype.removeEventListener);
        }
    });
    label.appendChild(input);
    label.appendChild(document.createTextNode("Popup on mouseover"));
    div.appendChild(label);
    section.appendChild(div);

    document.getElementById("settingsScreen").appendChild(section);
}

function onAjaxEvent(evt) {
    if (evt.target.readyState == 4) {
        var url = evt.target.responseURL;
        if (localStorage.getItem(url) != evt.target.responseText) {
            localStorage.setItem(url, evt.target.responseText);
            if (evt.target.board != G.boardName) {
                localStorage.setItem(evt.target.board, true);
                alertBoardChanged(evt.target.board);
            }
        }
    }
}

function alertBoardChanged(boardName) {
    if (boardName) {
        document.querySelector("a[href='" + boardName + "']").innerHTML += "!";
        return;
    }
    for (var i = 0; i < availableBoards.length; i++) {
        if (localStorage.getItem(availableBoards[i]) === "true")
            document.querySelector("a[href='" + availableBoards[i] + "']").innerHTML += "!";
    }
}

function getSubmitReplyButton() {
    var elems = document.querySelectorAll("input[type=submit]");
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].value == "Poster")
            return elems[i];
    }
}

function onPost() {
    localStorage.setItem("lastPost", new Date());
}

function youtubeify() {
    var links = document.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.match(/http(s{0,1}):\/\/(www\.){0,1}youtu((\.be\/)|(be\.com\/watch\?))/)) {
            if (G.youtubeLinks[links[i]]) {
                appendYoutubeTitle(G.youtubeLinks[links[i]], links[i]);
            } else {
                GM_xmlhttpRequest ( {
                    method:     "GET",
                    url:        links[i].href,
                    onload:     onYoutubeAnswer(links[i])
                });
            }
        }
    }
}

function onYoutubeAnswer(elem) {
    return (function (response) {
        var doc;
        if (response.responseXML !== null) {
            doc = response.responseXML;
        } else {
            doc = document.createElement("div");
            doc.innerHTML = response.responseText;
        }
        G.youtubeLinks[elem.href] = doc.getElementsByClassName("watch-title")[0].textContent.trim();
        appendYoutubeTitle(G.youtubeLinks[elem.href], elem);
    });
}

function appendYoutubeTitle(title, elem) {
    var titleElem = document.createElement("a");
    titleElem.textContent = title;
    titleElem.href = getEmbedURL(elem.href);
    titleElem.addEventListener("click", onYoutubeTitleClick);
    elem.parentNode.insertBefore(titleElem, elem.nextSibling);
    elem.parentNode.insertBefore(document.createTextNode(" - "), titleElem);
}

function onYoutubeTitleClick(evt) {
    var elem = evt.target;
    if (elem.opened)
        elem.parentNode.removeChild(elem.iframe);
    else {
        if (!elem.iframe) {
            var iframe = document.createElement("iframe");
            elem.iframe = iframe;
            iframe.width = 560;
            iframe.height = 315;
            iframe.src = elem.href;
        }
        elem.parentNode.insertBefore(elem.iframe, elem.nextSibling);
    }
    elem.opened = !elem.opened;
    return evt.preventDefault();
}

function getEmbedURL(url) {
    try {
        var baseURL = "https://www.youtube.com/embed/";
        if (url.match(new RegExp("youtube\.com/watch\?")))
            return baseURL + url.match(new RegExp("v=[a-zA-Z0-9_-]{6,}"))[0].substr(2);
        else if (url.match(/youtu\.be\//))
            return baseURL + url.match(new RegExp("\.be/[a-zA-Z0-9_-]{6,}"))[0].substr(4);
    } catch(Exception){}
}

function updateCooldownIndicator () {
    if (!localStorage.getItem("lastPost"))
        return clearInterval(cooldownIndicatorInterval);

    var t = parseInt((new Date() - new Date(localStorage.getItem("lastPost"))) / 1000);
    if (t < 10) {
        submitReplyButton.value = 10 - t;
    } else {
        submitReplyButton.value = "Poster";
        clearInterval(cooldownIndicatorInterval);
    }
}

availableBoards = ['/f/', '/g/', '/int/', '/ac/', '/av/', '/bd/', '/j/', '/6/'];

for (var i = 0; i < availableBoards.length; i++) {
    var req = new XMLHttpRequest();
    req.addEventListener("load", onAjaxEvent);
    req.board = availableBoards[i];
    req.open("GET", "https://cable6.net" + availableBoards[i]);
    req.send();
}

G = {
    "threadNumber": 0,
    "threadBody": null,
    "youtubeLinks": JSON.parse(localStorage.getItem("youtubeLinks")) || {}
};

G.boardName = document.location.pathname.match("^/[a-z0-9]*/");

localStorage.setItem(G.boardName, false);

alertBoardChanged();

if(document.location.href.indexOf("/res/") != -1){
    G.threadNumber = document.location.pathname.substr(document.location.pathname.indexOf("/res/") + "/res/".length);
    G.threadBody = document.getElementById("thread_" + G.threadNumber);
    quotes();
    setTitle();
}
stickyMenu();
colorId();
setTimeout(settings, 1000);
submitReplyButton = getSubmitReplyButton();
youtubeify();
setTimeout(function() {
    submitReplyButton.addEventListener("click", onPost);
    cooldownIndicatorInterval = setInterval(updateCooldownIndicator, 1000);
}, 1000);

window.onbeforeunload = function() {
    localStorage.setItem("youtubeLinks", JSON.stringify(G.youtubeLinks));
};
