var categories = { all: "All", school: "School", resources: "Resources" };
var tabs = [categories.all, categories.school];

var linkWeights = [];
var infoWeights = [];

var resources = {
    links: [
        {
            link: "https://www.google.com",
            image: "",
            weightIndex: 0,
            categories: [categories.all, categories.resources],
        },
    ],
    info: [
        {
            type: "link",
            link: "",
            weightIndex: 0,
        },
        {
            type: "page",
            html: "",
            weightIndex: 1,
        }
    ]
}

function expand(button) {
    infoPullout = document.getElementById("info-pullout");
    if (infoPullout.classList.contains("pulled-out")) {
        infoPullout.classList.remove("pulled-out");
        button.classList.remove("selected");
    } else {
        infoPullout.classList.add("pulled-out")
        button.classList.add("selected")
    }
}

const linksArrow = document.getElementById("links-arrow");
document.getElementById("links-section").addEventListener("scroll", (event) => {
    linksArrow.classList.add("hidden")
})

function parseCookie(cookies) {
    let parsed = {};

    cookies = cookies.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        for (let j = 0; j < cookie.length; j++) {
            if (cookie[j] == "=") {
                let [cookieName, cookieVal] = [cookie.substring(0, j), cookie.substring(j + 1)];
                parsed[cookieName] = cookieVal;
                break;
            }
        }
    }
    return parsed;
}

function loadWeights() {
    let cookie = document.cookie;
    if (cookie == "") {
        linkWeights = [];
        infoWeights = [];
    } else {
        let parsedValues = parseCookie(cookie);
        linkWeights = parsedValues.linkWeights.split(",");
        infoWeights = parsedValues.infoWeights.split(",");
        for (i in linkWeights) { linkWeights[i] = Number(linkWeights[i]); }
        for (i in infoWeights) { infoWeights[i] = Number(infoWeights[i]); }
    }
}

function saveWeights() {
    document.cookie = `linkWeights=${linkWeights}; path=/`;
    document.cookie = `infoWeights=${infoWeights}; path=/`;
}

var categorySections = {}
for (let categoryID in categories) {
    categorySections[categories[categoryID]] = newSection = document.createElement("div");
    newSection.classList.add("links-full-container");
    newSection.style.visibility = "hidden";

    document.getElementById("links-section").appendChild(newSection);
}
categorySections[categories.all].style.visibility = "visible";

function addLink(linkObj, category) {
    lastRowContainer = categorySections[category].lastChild;
    lastRowIndex = categorySections[category].childNodes.length - 1;
    if (lastRowIndex == -1 || 
        (lastRowIndex == 0 && lastRowContainer.childNodes.length == 3) ||
        (lastRowIndex > 0  && lastRowContainer.childNodes.length == 4)) {
        lastRowContainer = document.createElement("div")
        lastRowContainer.classList.add("links-row-container")
        
        categorySections[category].appendChild(lastRowContainer)
    }
    newLinkBox = document.createElement("a");
    newLinkBox.href = linkObj.link;
    newLinkBox.classList.add("link-box")

    lastRowContainer.appendChild(newLinkBox);
}

function addLinks() {
    let highestWeightIndex = 0;
    for (let i in resources.links) {
        while (resources.links[i].weightIndex >= linkWeights.length) {
            linkWeights.push(0.5);
        }
        highestWeightIndex = Math.max(highestWeightIndex, resources.links[i].weightIndex);
    }
    while (linkWeights.length > highestWeightIndex + 1) { linkWeights.pop(); }
    resources.links.sort((a, b) => linkWeights[b.weightIndex] - linkWeights[a.weightIndex]);

    resources.links.forEach((linkObj) => {
        linkObj.categories.forEach((category) => {
            addLink(linkObj, category);
        })
    })

    for (let category in categorySections) {
        lastRow = categorySections[category].lastChild;
        lastRowIndex = categorySections[category].childNodes.length - 1;
        desiredColumns = lastRowIndex == -1 ? 0 : (lastRowIndex == 0 ? 3 : 4);

        while (lastRow && desiredColumns - lastRow.childNodes.length > 0) {
            newLinkBox = document.createElement("a");
            newLinkBox.classList.add("link-box");
            newLinkBox.style.visibility = "hidden";

            lastRow.appendChild(newLinkBox);
        }
    }
}

function setup() {
    loadWeights();
    addLinks();
    saveWeights();
}

setup();
