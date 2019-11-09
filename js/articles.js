/**
 * Dynamically creates an article given the right informations
 *
 * @param title The title the article should have. Required
 * @param content The main subject of the article. Required
 * @param picture The picture to use for the article. Optional
 * @param category The main category under which this article falls. Required
 * @param link The source link. Required
 * @return {Element} The article element, ready to be added
 */
function createArticle(title, content, picture, category, link) {
    if(link == null || title == null || content == null  || category == null){
        console.log("Missing required parameter to create article.");
        return null;
    }

    if(title === "" || content === "" || category === "" || link === ""){
        console.log("Missing required parameter to create article.");
        return null;
    }

    if(picture === "" || picture == null){
        picture = getPicByCateg(category);
    }

    //Creating li
    let mainElt = document.createElement("li");
    mainElt.setAttribute("class", "article");

    //Creating div
    let divElt = document.createElement("div");
    divElt.setAttribute("class","article_content");

    //Creating title h2
    let titleElt = document.createElement("h2");

    //Creating title <a>
    let titleLink = document.createElement("a");
    titleLink.setAttribute("href", link);
    titleLink.setAttribute("class", "title");
    let titleNode = document.createTextNode(title);
    titleLink.appendChild(titleNode);

    //Creating category <a>
    let categLink = document.createElement("a");
    categLink.setAttribute("href", category);
    categLink.setAttribute("class", "ref_cat");
    let categNode = document.createTextNode(category);
    categLink.appendChild(categNode);

    //Creating img
    let imgLink = document.createElement("img");
    imgLink.setAttribute("src", picture);
    imgLink.setAttribute("alt", "Article picture");

    //Creating p
    let articleText = document.createElement("p");

    content.split("\n").forEach(function (line) {
        line = line.trim();
        if(line){
            articleText.appendChild(document.createTextNode(line));
            articleText.appendChild(document.createElement("br"));
        }

    });

    //Adding in the right order
    titleElt.appendChild(titleLink);
    divElt.appendChild(titleElt);
    divElt.appendChild(categLink);
    divElt.appendChild(imgLink);
    divElt.appendChild(articleText);
    mainElt.appendChild(divElt);

    return mainElt;
}

/**
 * Adds an article at the top of the list
 *
 * @param article The article to add
 */
function addArticleTop(article) {
    let articleList = document.getElementsByClassName("article");
    if(articleList.length === 0){
        document.getElementById("article_list").appendChild(article)
    }else{
        document.getElementById("article_list").insertBefore(article, articleList.item(0))
    }
}

//TODO: get a default picture corresponding to each of the main category
/**
 * Returns the default picture of a category in case one wasn't given
 *
 * @param category The category to get the picture for
 * @returns {string} The link to the default picture
 */
function getPicByCateg(category) {
    if(category === "" || category == null){
        console.log("Missing required parameter to get default picture.");
        return "";
    }

    return "#";
}

//STUB
window.onload = function () {

    let lorem = "Projet d'ses morts";
    addArticleTop(createArticle("Article 4", lorem, null, "French Community", "http://www.google.fr"));
    addArticleTop(createArticle("Article 3", lorem, null, "News", "http://www.google.fr"));
    addArticleTop(createArticle("Article 2", lorem, null, "CERT", "http://www.google.fr"));
    addArticleTop(createArticle("Article 1", lorem, null, "Risks", "http://www.google.fr"));
};

/**
 * First looks up if the media query is met, then
 * applies an opacity of 0, which triggers the transition defined
 * in the css file
 */
function hideOnClick() {
    //Hiding the text
    if (document.getElementById("motto").style.opacity === "1"
        || document.getElementById("motto").style.opacity === "") {
        document.getElementById("motto").style.opacity='0';
    } else {
        document.getElementById("motto").style.opacity='1';
    }

    //Hiding the search bar if needed
    if(window.matchMedia("(max-width: 900px)").matches){
        if (document.getElementById("search-container").style.opacity === "1"
            || document.getElementById("search-container").style.opacity === "") {
            document.getElementById("search-container").style.opacity='0';
        } else {
            document.getElementById("search-container").style.opacity='1';
        }
    }
}

/**
 * Triggered when the search button is clicked
 */
function search() {
    console.log(document.getElementById("search-bar").value);
}