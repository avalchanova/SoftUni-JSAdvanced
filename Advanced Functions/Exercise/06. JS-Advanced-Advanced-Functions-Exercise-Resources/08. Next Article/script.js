function getArticleGenerator(articles) {
    let myArr = Array.from(articles);
    let content = document.getElementById('content');

    return () => {
        if (myArr.length === 0) { // a valid syntaxis is also this -> if(!myArr.length)...
            return;
        }
        let currentArticle = myArr.shift();
        content.innerHTML += `<article>${currentArticle}</article>`;
    };
}


