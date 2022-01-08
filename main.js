function getLink(rawLink) {
    let cutLink = rawLink.slice(rawLink.indexOf(".com%2F")+7);
    let username = cutLink.slice(0, cutLink.indexOf("%2F"));
    cutLink = cutLink.slice(username.length);
    cutLink = cutLink.slice(11);

    let idPost = cutLink.slice(0, cutLink.indexOf("&"));

    const newLink = "https://facebook.com/" + username + "/posts/" + idPost;
    return newLink;
}