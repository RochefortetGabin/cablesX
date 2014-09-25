// ==UserScript==
// @name        cablesX
// @namespace   cablesX
// @include     http*://cable6.net/*/
// @include     http*://cable6.net/*/res/*
// @run-at      DOMContentLoaded
// @version     1
// @grant       none
// ==/UserScript==

function stickyMenu(){
    var m = document.querySelector("div.boardlist:nth-child(1)");
    m.style.position = "fixed";
    m.style.top = "0px";
    m.style.left = "0px";
    m.style.width = "100%";
    m.style.background = "rgba(255,255,255,0.7)";
    m.style.marginTop = "0px";
}

function quickReply(){
    console.log(document.querySelector("body > form:nth-child(6)"));
    var qr = document.body.insertBefore(document.querySelector("body > form:nth-child(6)"), document.body.firstChild.nextSibling);
    console.log("hello");
    qr.style.position = "fixed";
    qr.style.position.right = "0px";
    var style = document.createElement("style");
    style.innerHTML = "body > form:nth-child(1) > table:nth-child(6) th {display: none;}\n#qrtoggleoptions { display: none }";
    document.head.appendChild(style);
}

function quotes(){
    var links = document.querySelectorAll(".body a");
    for(var i = 0; i < links.length; i++){
        links[i].onclick = null;
        links[i].addEventListener("click", quoteIt);
    }
    links = document.querySelectorAll(".mentioned a");
    for(i = 0; i < links.length; i++){
        links[i].onclick = null;
        links[i].addEventListener("click", showReply);
    }
}

function quoteIt(e){
    var quote = document.getElementById("reply_" + e.target.innerHTML.substr("&gt;&gt;".length));
    quote.parentNode.removeChild(quote.nextSibling);
    e.target.parentNode.insertBefore(quote, e.target.nextSibling.nextSibling);
    quote.parentNode.insertBefore(document.createElement("br"), quote.nextSibling);
    return e.preventDefault();
}

function showReply(e){
    var reply = document.getElementById("reply_" + e.target.innerHTML.substr("&gt;&gt;".length));
    reply.parentNode.removeChild(reply.nextSibling);
    e.target.parentNode.parentNode.parentNode.insertBefore(reply, e.target.parentNode.parentNode.parentNode.lastChild);
    reply.parentNode.insertBefore(document.createElement("br"), reply.nextSibling);
    return e.preventDefault();
}

function onAJAXResult(e){
    if(e.target.readyState === 4){
        var XMLDoc = (new DOMParser()).parseFromString(e.target.responseText, "text/html");
        var postReplies = XMLDoc.getElementsByClassName("post reply");
        var currentReplies = document.getElementsByClassName("post reply");
        if(currentReplies.length < postReplies.length){
            for(var i = currentReplies.length; i < postReplies.length; i++){
                G.threadBody.insertBefore(postReplies[i], G.threadBody.lastChild);
                G.threadBody.insertBefore(document.createElement("br"), G.threadBody.lastChild);
            }
            new Notification("Cable6", {"body": "Nouvelle réponse au fil n°" + G.threadNumber, "icon": G.cableLogo });
        }
    }
}

function colorId(){
    var ids = document.getElementsByClassName("posteruid");
    for(var i = 0; i < ids.length; i++){
        ids[i].style.background = "#" + ids[i].innerHTML.substr(5,6);
        ids[i].style.borderRadius = "5px";
    }
}

function updateThread(e){
    var req = new XMLHttpRequest();
    req.onreadystatechange = onAJAXResult;
    req.open("POST", document.location);
    req.send(null);
}

Notification.requestPermission();

G = {
    "threadNumber": 0,
    "threadBody": null,
    "cableLogo": "data:image/png;base64,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",
};

G.threadNumber = document.location.pathname.substr(document.location.pathname.indexOf("/res/") + "/res/".length);
G.threadBody = document.getElementById("thread_" + G.threadNumber);

if(document.location.href.indexOf("/res/") != -1){
    G.updateInterval = setInterval(updateThread, 90000);
    quotes();
}

stickyMenu();
colorId();
