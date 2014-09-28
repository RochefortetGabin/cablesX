// ==UserScript==
// @name        cablesX
// @namespace   cablesX
// @include     http*://cable6.net/*
// @run-at      DOMContentLoaded
// @version     0.2
// @grant       none
// @downloadURL https://github.com/RochefortetGabin/cablesX/raw/master/cablesX.user.js
// @icon        data:image/png;base64,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
// ==/UserScript==

//Applies CSS rules to the menu
function stickyMenu(){
    var m = document.querySelector("div.boardlist:nth-child(1)");
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
        elems[i].onclick = null;
        elems[i].addEventListener("click", showQuote);
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
    var r, g, b;
    r = parseInt(s.substring(4,7))+5;
    g = parseInt(s.substring(9,12))+5;
    b = parseInt(s.substring(14,17))+5;
    if(r > 255){
        r = 255;
    }
    if(g > 255){
        g = 255;
    }
    if(b > 255){
        b = 255;
    }
    if(r == 255 && g == 255 && b == 255){
        return false;
    }
    return "rgb("+r+", "+g+", "+b+")";
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

//Parses AJAX answers in order to find new posts.
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

//Gives an ID to every post that has one.
function colorId(){
    var ids = document.getElementsByClassName("posteruid");
    for(var i = 0; i < ids.length; i++){
        ids[i].style.background = "#" + ids[i].innerHTML.substr(5,6);
        ids[i].style.borderRadius = "5px";
    }
}

//Sends an ajax request to the current thread.
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

G.boardName = document.location.pathname.match("^/[a-z0-9]*/");

if(document.location.href.indexOf("/res/") != -1){
    G.threadNumber = document.location.pathname.substr(document.location.pathname.indexOf("/res/") + "/res/".length);
    G.threadBody = document.getElementById("thread_" + G.threadNumber);
    //G.updateInterval = setInterval(updateThread, 90000);
    quotes();
    document.title = G.boardName + " - Fil n°" + G.threadNumber;
}

stickyMenu();
colorId();
