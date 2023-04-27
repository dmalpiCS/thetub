var categories = { 
    all: "All", 
    tide: "TIDE", 
    tideInClass: "In-Class Tools",
    tidePresentation: "Presentation Material",
    tideGrammar: "Grammar",
    tideMathScience: "Math/Science",
    tideSpanish: "Spanish",
    foothill: "Foothill", 
    hotlines: "Mental Health", 
    resources: "Academic Resources", 
    resourcesGoogle: "Google",
    schedules: "Schedules", 
    college: "College Applications", 
};
var tabs = [
    [categories.all, []],
    [categories.tide, [
        categories.tideInClass, 
        categories.tidePresentation, 
        categories.tideGrammar, 
        categories.tideMathScience, 
        categories.tideSpanish]],
    [categories.foothill, []],
    // [categories.hotlines, []],
    [categories.resources, [
        categories.resourcesGoogle]],
    [categories.college, []],
];
var selectedCategory;
var categoryButtons = {};

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
        tags: ["Formative", "formative"]
    },
    {
        link: "https://sequoia.instructure.com/",
        image: "tide_canvas.png",
        weightIndex: 0,
        categories: [categories.all, categories.tide],
    },
    {
        link: "https://www.tideacademy.org/",
        image: "https://www.tideacademy.org/images/logo.png",
        weightIndex: 1,
        categories: [categories.all, categories.tide],
    },
    {
        link: "https://auth.edgenuity.com/Login/Login/Student",
        image: "https://courseware-login.edgelms-prod.edgenuityapp.com/static/b952492d23615d63c6d37b88f3f17e2d.svg",
        weightIndex: 2,
        categories: [categories.all, categories.tide, categories.tideInClass],
    },
    {
        link: "https://ic.seq.org",
        image: "https://www.worthschools.net/userfiles/2022-08/db790598-8faf-42e0-98d0-725e0ded28b7.png?width=600",
        weightIndex: 3,
        categories: [categories.all, categories.tide, categories.college],
    },
    {
        link: "https://myportal.fhda.edu/uPortal/f/home/normal/render.uP/",
        image: "https://ssoshib.fhda.edu/idp/images/logo_district.png",
        weightIndex: 4,
        categories: [categories.all, categories.foothill],
    },
    {
        link: "https://docs.google.com/presentation/u/0/?tgif=d",
        image: "https://www.dignited.com/wp-content/uploads/2021/03/Google-Slides-720x340-1.png",
        weightIndex: 5,
        categories: [categories.all, categories.tide, categories.tidePresentation, categories.resources, categories.resourcesGoogle],
    },
    {
        link: "https://drive.google.com/?authuser=0",
        image: "https://cdn.arstechnica.net/wp-content/uploads/2021/07/Google-Drive.jpg",
        weightIndex: 6,
        categories: [categories.all, categories.resources, categories.resourcesGoogle],
    },
    {
        link: "https://apstudents.collegeboard.org/",
        image: "https://schools.dickinsonisd.org/upload/page/0171/widgets/image/039660/ap%20classroom.png",
        weightIndex: 7,
        categories: [categories.all, categories.tide, categories.tideMathScience],
    },
    {
        link: "https://www.vhlcentral.com/home",
        image: "https://i.ytimg.com/vi/gBT3EYvreQA/maxresdefault.jpg",
        weightIndex: 8,
        categories: [categories.all, categories.tide, categories.tideSpanish],
    },
    {
        link: "https://quizlet.com/",
        image: "https://www.generalatlantic.com/wp-content/uploads/2020/05/quizlet-logo-indigo-rgb.jpg",
        weightIndex: 9,
        categories: [categories.all, categories.tide, categories.tideSpanish],
    },
    {
        link: "https://quizlet.com/live",
        image: "https://kplacido.files.wordpress.com/2016/04/quizlet-live.png",
        weightIndex: 10,
        categories: [categories.all, categories.tide, categories.tideInClass],
    },
    {
        link: "https://kahoot.it/",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kahoot_Logo.svg/2560px-Kahoot_Logo.svg.png",
        weightIndex: 11,
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
        weightIndex: 12,
        categories: [categories.all, categories.tide, categories.tideMathScience],
    },
    {
        link: "https://app.peardeck.com/join",
        image: "https://assets-global.website-files.com/631b4e8b76f34c510003cdb8/635c45f3a2af5f58d66d0cae_PearDeck%20-%20OpenGraphImage.png",
        weightIndex: 13,
        categories: [categories.all, categories.tide, categories.tideInClass],
    },
    {
        link: "https://mail.google.com/mail/u/0/#inbox",
        image: "https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg",
        weightIndex: 14,
        categories: [categories.all, categories.resources, categories.resourcesGoogle],
    },
    {
        link: "https://www.collegeboard.org/",
        image: "https://lhsepic.com/wp-content/uploads/2018/05/CB-Big_7.jpeg",
        weightIndex: 15,
        categories: [categories.all, categories.college],
    },
    {
        link: "https://www.canva.com/",
        image: "https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png",
        weightIndex: 16,
        categories: [categories.all, categories.tide, categories.tidePresentation],
    },
    {
        link: "https://foothillcollege.instructure.com/",
        image: "foothill_canvas.png",
        weightIndex: 17,
        categories: [categories.all, categories.foothill],
    },
    {
        link: "https://www.mybib.com/#/",
        image: "https://www.mybib.com/images/mybib.png",
        weightIndex: 18,
        categories: [categories.all, categories.tide, categories.tideGrammar],
    },
    {
        link: "https://www.easybib.com/",
        image: "http://s3.amazonaws.com/libapps/accounts/20130/images/logo-easybib-chegg.png",
        weightIndex: 19,
        categories: [categories.all, categories.tide, categories.tideGrammar],
    },
    {
        link: "https://paper.co/",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Paper_Education_Company_logo2020.png",
        weightIndex: 20,
        categories: [categories.all, categories.resources],
    },
    {
        link: "https://www.khanacademy.org/",
        image: "https://cdn.kastatic.org/images/khan-logo-dark-background-2.png",
        weightIndex: 21,
        categories: [categories.all, categories.resources],
    },
    {
        link: "https://www.desmos.com/calculator",
        image: "https://uploads.desmos.com/activitybuilder/145be86c1cc6c5a0b9f6a87b69d21346",
        weightIndex: 22,
        categories: [categories.all, categories.tide, categories.tideMathScience],
    },
    {
        link: "https://www.merriam-webster.com/",
        image: "https://guardian.ng/wp-content/uploads/2020/06/Merriam-Webster-Dictionary.jpg",
        weightIndex: 23,
        categories: [categories.all, categories.tide, categories.tideGrammar],
    },
    {
        link: "https://www.thesaurus.com/",
        image: "https://mma.prnewswire.com/media/1313959/Thesauraus_com_logo.jpg?p=facebook",
        weightIndex: 24,
        categories: [categories.all, categories.tide, categories.tideGrammar],
    },
    {
        link: "https://www.grammarly.com/",
        image: "https://images.ctfassets.net/1e6ajr2k4140/2MnBIaklgnmba5jr8FHh6g/20fd06afe62738a2e41b29e84febd89e/Group_869.png",
        weightIndex: 25,
        categories: [categories.all, categories.tide, categories.tideGrammar],
    },
    {
        link: "https://www.etymonline.com/",
        image: "https://cdn.etymonline.com/web/logo.png",
        weightIndex: 26,
        categories: [categories.all, categories.tide, categories.tideGrammar],
    },
    {
        link: "https://www.slidescarnival.com/",
        image: "https://www.slidescarnival.com/wp-content/uploads/2019/08/slidescarnival-logotype.png",
        weightIndex: 27,
        categories: [categories.all, categories.tide, categories.tidePresentation],
    },
    {
        link: "https://app.scoir.com/student/dashboard",
        image: "https://www.clarksvilleschools.org/wp-content/uploads/2019/09/SCOIR-logo2.png",
        weightIndex: 28,
        categories: [categories.all, categories.college],
    },
    {
        link: "https://apply.commonapp.org/dashboard",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Common_Application_2019_Logo.svg/640px-Common_Application_2019_Logo.svg.png",
        weightIndex: 29,
        categories: [categories.all, categories.college],
    },
    {
        link: "https://apply.universityofcalifornia.edu/my-application/login",
        image: "https://www.stocktonusd.net/cms/lib/CA01902791/Centricity/Domain/4001/ucal-fb-image.png",
        weightIndex: 30,
        categories: [categories.all, categories.college],
    },
    {
        link: "https://www.calstate.edu/apply",
        image: "https://www.logosvgpng.com/wp-content/uploads/2021/03/csu-the-california-state-university-logo-vector.png",
        weightIndex: 31,
        categories: [categories.all, categories.college],
    },
    {
        link: "https://sequoiauhsd.gethelphss.com/Login/landing",
        image: "https://images.squarespace-cdn.com/content/v1/5a87093f1f318d75fe8016f2/1626200149039-MQLJ21SH5PV2WFF26YH1/TechSupport_Icon_Navy.png",
        weightIndex: 32,
        categories: [categories.all, categories.resources, categories.tide],
    },
    {
        link: "https://foothill.edu/",
        image: "https://foothill.edu/_resources/images/logo.png",
        weightIndex: 33,
        categories: [categories.all, categories.foothill],
    },
    ],
    info: [
        {
            type: "link",
            text: "Bell Schedule",
            link: "https://www.tideacademy.org/About/Bell-Schedule/index.html",
            image: "https://cdn.icon-icons.com/icons2/1514/PNG/512/bellalarmsymbol_105038.png",
            weightIndex: 0,
        },
        {
            type: "link",
            text: "Bus Schedule",
            link: "https://www.tideacademy.org/Students/Bus-Schedule/index.html",
            // image: "https://cdn-icons-png.flaticon.com/512/5706/5706988.png",  
            image: "https://cdn-icons-png.flaticon.com/512/1164/1164673.png",
            weightIndex: 1,
        },
        {
            type: "link",
            text: "Class Schedule",
            link: "https://ic.seq.org/campus/nav-wrapper/student/portal/student/schedule",
            image: "https://cdn-icons-png.flaticon.com/512/55/55281.png",  
            weightIndex: 2,
        },
        {
            type: "page",
            text: "Mental Health Hotlines",
            html: "<div>asodfaosufhsou</div>",
            image: "https://www.iconpacks.net/icons/1/free-phone-icon-14-thumb.png",
            weightIndex: 3,
        },
        {
            type: "page",
            text: "Local Teen Clinics",
            html: "Health",
            image: "https://cdn-icons-png.flaticon.com/512/710/710137.png",
            weightIndex: 4,
        },
        {
            type: "link",
            text: "Staff Directory",
            link: "https://www.tideacademy.org/About/Staff-Directory/index.html",
            image: "https://cdn-icons-png.flaticon.com/512/33/33308.png",
            weightIndex: 5,
        }
    ]
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

    [[resources.links, linkWeights], [resources.info, infoWeights]].forEach(([buttons, weights]) => {
        let highestWeightIndex = 0;
        for (let i in buttons) {
            while (buttons[i].weightIndex >= weights.length) {
                weights.push(0.5);
            }
            highestWeightIndex = Math.max(highestWeightIndex, buttons[i].weightIndex);
        }
        while (weights.length > highestWeightIndex + 1) { weights.pop(); }
        buttons.sort((a, b) => weights[b.weightIndex] - weights[a.weightIndex]);
    })
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
    newLinkBox.ondragstart = () => { return false; };
    newLinkBox.href = linkObj.link;
    newLinkBox.target = "_blank"
    newLinkBox.classList.add("link-box");
    newLinkBox.style.backgroundImage = `url("${linkObj.image}")`;

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
    if (selectedCategory) {
        document.getElementById("links-section").removeChild(categorySections[selectedCategory]);
        categoryButtons[selectedCategory].classList.remove("selected");
    }
    document.getElementById("links-section").appendChild(categorySections[newCategory]);
    categoryButtons[newCategory].classList.add("selected");
    selectedCategory = newCategory;
}

function addLinks() {
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
    for (let tabIndex in tabs) {
        // if (i > 0) {
        //     let spacer = document.createElement("div");
        //     spacer.classList.add("spacer")
        //     categoryBar.appendChild(spacer);
        // }
        let [categoryName, subcategories] = tabs[tabIndex];

        let categoryButtonWrapper = document.createElement("div");
        categoryButtonWrapper.classList.add("category-button-wrapper");

        let categoryButton = document.createElement("div");
        categoryButton.classList.add("category-button");

        categoryButton.innerHTML = categoryName;
        categoryButtons[categoryName] = categoryButton;
        categoryButton.categoryName = categoryName;
        categoryButton.onclick = function() { changeCategory(this.categoryName) };
        
        categoryButtonWrapper.appendChild(categoryButton);
        
        // categoryButton.onmouseover = function() {};
        // categoryButton.onmouseout = function() {};

        if (subcategories.length > 0) {
            let dropdownWrapper = document.createElement("div");
            dropdownWrapper.classList.add("dropdown-wrapper");
            dropdownWrapper.style.setProperty("--subcategory-count", subcategories.length)

            for(let subcategoryIndex in subcategories) {
                let subcategoryName = subcategories[subcategoryIndex]
                let subcategoryButton = document.createElement("div");
                subcategoryButton.classList.add("subcategory-button");

                subcategoryButton.innerHTML = subcategoryName;
                categoryButtons[subcategoryName] = subcategoryButton;
                subcategoryButton.categoryName = subcategoryName;
                subcategoryButton.onclick = function() { changeCategory(this.categoryName) };

                dropdownWrapper.appendChild(subcategoryButton);

            }
            

            categoryButtonWrapper.appendChild(dropdownWrapper);
        }

        categoryBar.appendChild(categoryButtonWrapper);
    }
}

function expand(button) {
    infoPullout = document.getElementById("info-pullout");
    if (infoPullout.classList.contains("pulled-out")) {
        infoPullout.classList.remove("pulled-out");
        button.classList.remove("selected");
    } else {
        infoPullout.innerHTML = button.pageHTML;
        infoPullout.classList.add("pulled-out")
        button.classList.add("selected")
    }
}

function addInfo() {
    infoContainer = document.getElementById("info-full-container");
    resources.info.forEach((infoObj) => {
        let infoBox = document.createElement("a");
        infoBox.classList.add("info-box");
        if (infoObj.type == "page") {
            infoBox.classList.add("info-page-button");
            infoBox.onclick = function() { expand(this) };
            infoBox.pageHTML = infoObj.html;
        } else if (infoObj.type == "link") {
            infoBox.classList.add("info-link-button");
            infoBox.href = infoObj.link;
            infoBox.target = "_blank";
            infoBox.ondragstart = () => { return false; };
        }

        let infoImage = document.createElement("img");
        infoImage.classList.add("info-image");
        infoImage.src = infoObj.image;
        infoBox.appendChild(infoImage);


        let infoText = document.createElement("div");
        infoText.classList.add("info-text");
        let size = Math.min(3, -0.125 * (infoObj.text.length - 14) + 3);
        infoText.style.fontSize = `${size}vw`;
        infoText.innerHTML = infoObj.text;
        infoBox.appendChild(infoText);

        infoContainer.appendChild(infoBox);
    })
}

var search_box = document.getElementById("search-input");
search_box.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        search();
    }
})

/**

for every link:
    for every word in the user's search: (use search.split(" ") or something)
        for every keyword in the link:
            for every letter in the current word (not keyword):
                if that letter does not equal the corresponding letter in the keyword, continue to next keyword in user's search
            if for loop ended without going to next keyword, continue to next word in user's search
        if for loop ended without going to next word, continue to next link
    if for loop ended without continuing to next link, add link to shown links
        
^^^ i have no idea if this'll work lol but it seems like it might
 */

function search() {
    search_input = search_box.innerHTML;
    shownLinks = [];
    resources.links.forEach((resource_Obj) => {
        resource_Obj.tags.forEach((tag) => {
            if (tag == search_input) {
                shownLinks.append(resource_Obj)
            }
        })
    })
    /** Make shownLinks appear on website */
}

function setup() {
    loadWeights();
    addLinks();
    addInfo();
    addCategorySelectors();
    changeCategory(categories.all);

    saveWeights();
}

setup();
