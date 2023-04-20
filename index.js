var categories = { 
    all: "All", 
    tide: "TIDE", 
    tideInClass: "In-Class Tools",
    tidePresentation: "Presentation Material",
    tideGrammar: "Grammar",
    tideMathScience: "Math/Science",
    tideSpanish: "Spanish",
    foothill: "Foothill", 
    hotlines: "Mental Health Hotlines", 
    resources: "Academic Support Resources", 
    resourcesGoogle: "Google Applications",
    schedules: "Schedules", 
    college: "College Applications", 
};
var tabs = categories;

var selectedCategory = categories.all

var linkWeights = [];
var infoWeights = [];

var resources = {
    links: [/* 
    {
        link: "",
        image: "",
        weightIndex: 0,
        categories: [categories.all],
    },
    */
    {
        link: "https://app.formative.com/",
        image: "https://www.eschoolnews.com/files/2015/11/icon-formative.png",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.tideInClass],
    },
    {
        link: "https://sequoia.instructure.com/",
        image: "t_canvas.png",
        weightIndex: 0,
        categories: [categories.all, categories.tide],
    },
    {
        link: "https://auth.edgenuity.com/Login/Login/Student",
        image: "https://courseware-login.edgelms-prod.edgenuityapp.com/static/b952492d23615d63c6d37b88f3f17e2d.svg",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.tideInClass],
    },
    {
        link: "https://ic.seq.org",
        image: "https://www.worthschools.net/userfiles/2022-08/db790598-8faf-42e0-98d0-725e0ded28b7.png?width=600",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.college],
    },
    {
        link: "https://myportal.fhda.edu/uPortal/f/home/normal/render.uP/",
        image: "https://ssoshib.fhda.edu/idp/images/logo_district.png",
        weightIndex: 0,
        categories: [categories.all, categories.foothill],
    },
    {
        link: "https://docs.google.com/presentation/u/0/?tgif=d",
        image: "https://www.dignited.com/wp-content/uploads/2021/03/Google-Slides-720x340-1.png",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.tidePresentation, categories.resources, categories.resourcesGoogle],
    },
    {
        link: "https://drive.google.com/?authuser=0",
        image: "https://cdn.arstechnica.net/wp-content/uploads/2021/07/Google-Drive.jpg",
        weightIndex: 0,
        categories: [categories.all, categories.resources, categories.resourcesGoogle],
    },
    {
        link: "https://apstudents.collegeboard.org/",
        image: "https://schools.dickinsonisd.org/upload/page/0171/widgets/image/039660/ap%20classroom.png",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.tideMathScience],
    },
    {
        link: "https://www.vhlcentral.com/home",
        image: "https://i.ytimg.com/vi/gBT3EYvreQA/maxresdefault.jpg",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.tideSpanish],
    },
    {
        link: "https://quizlet.com/",
        image: "https://www.generalatlantic.com/wp-content/uploads/2020/05/quizlet-logo-indigo-rgb.jpg",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.tideSpanish],
    },
    {
        link: "https://quizlet.com/live",
        image: "https://kplacido.files.wordpress.com/2016/04/quizlet-live.png",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.tideInClass],
    },
    {
        link: "https://kahoot.it/",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kahoot_Logo.svg/2560px-Kahoot_Logo.svg.png",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.tideInClass],
    },
    {
        link: "https://quizizz.com/join",
        image: "https://content.schoolinsites.com/api/download/?id=0b46de7577ef4c5dbb5f33244fe57635",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.tideInClass],
    },
    {
        link: "https://im.kendallhunt.com/HS/teachers/2/index.html",
        image: "https://mms.businesswire.com/media/20190115005557/en/663574/5/IM_Logo-01_copy_3.jpg",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.tideMathScience],
    },
    {
        link: "https://app.peardeck.com/join",
        image: "https://assets-global.website-files.com/631b4e8b76f34c510003cdb8/635c45f3a2af5f58d66d0cae_PearDeck%20-%20OpenGraphImage.png",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.tideInClass],
    },
    {
        link: "https://mail.google.com/mail/u/0/#inbox",
        image: "https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg",
        weightIndex: 0,
        categories: [categories.all, categories.resources, categories.resourcesGoogle],
    },
    {
        link: "https://www.collegeboard.org/",
        image: "https://lhsepic.com/wp-content/uploads/2018/05/CB-Big_7.jpeg",
        weightIndex: 0,
        categories: [categories.all, categories.college],
    },
    {
        link: "https://www.canva.com/",
        image: "https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png",
        weightIndex: 0,
        categories: [categories.all, categories.tide, categories.tidePresentation],
    },
    {
        link: "https://foothillcollege.instructure.com/",
        image: "f_canvas.png",
        weightIndex: 0,
        categories: [categories.all, categories.foothill],
    },
    ],
    info: [
        {
            type: "link",
            text: "",
            link: "",
            weightIndex: 0,
        },
        {
            type: "page",
            text: "",
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
}

document.getElementById("links-section").appendChild(categorySections[selectedCategory]);

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
    newLinkBox.target = "_blank"
    newLinkBox.classList.add("link-box");
    newLinkBox.style.backgroundImage = `url('${linkObj.image}')`;

    // let img = document.createElement('img');
    // img.src = linkObj.image;
    // img.crossOrigin = "anonymous";
    // let canvas = document.createElement('canvas');
    // canvas.width = w = img.width;
    // canvas.height = h = img.height;
    // let ctx = canvas.getContext("2d");
    // ctx.drawImage(img, 0, 0);
    // let imgData = ctx.getImageData(0, 0, 1, 1);
    // console.log(imgData)


    lastRowContainer.appendChild(newLinkBox);
}
function changeCategory(newCategory) {
    if (newCategory == selectedCategory) { return; }
    document.getElementById("links-section").removeChild(categorySections[selectedCategory]);
    document.getElementById("links-section").appendChild(categorySections[newCategory]);
    selectedCategory = newCategory;
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

function addCategorySelectors() {
    categoryBar = document.getElementById("category-bar");
    for (let categoryID in tabs) {
        categoryName = categories[categoryID];

        categoryButton = document.createElement("div");
        categoryButton.innerHTML = categoryName;

        categoryButton.classList.add("category-selector");
        categoryBar.appendChild(categoryButton);

        categoryButton.onclick = function() { changeCategory(categoryName); }
    }
}

function setup() {
    loadWeights();
    addLinks();
    saveWeights();
    addCategorySelectors();
}

setup();
