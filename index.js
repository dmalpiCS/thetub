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
var categorySectionShowing;
var categoryButtons = {};

var linkWeights = [];
var infoWeights = [];

var resources = {
    links: [
        {
            link: "https://sequoia.instructure.com/",
            image: "pics/tide_canvas.png",
            weightIndex: 34,
            categories: [categories.all, categories.tide],
            tags: "tide canvas sequoia instructure assignments homework"
        },
        {
            link: "https://www.tideacademy.org/",
            image: "pics/tide.png",
            weightIndex: 1,
            categories: [categories.all, categories.tide],
            tags: "tide academy website T.I.D.E. homepage"
        },
        {
            link: "https://app.formative.com/",
            image: "pics/formative.png",
            weightIndex: 0,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "english formative instructions class assignments homework"
        },
        {
            link: "https://auth.edgenuity.com/Login/Login/Student",
            image: "pics/edgenuity.svg",
            weightIndex: 2,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "PE P.E. physical education edgenuity lessons educational assignments"
        },
        {
            link: "https://ic.seq.org",
            image: "pics/ic.png",
            weightIndex: 3,
            categories: [categories.all, categories.tide, categories.college],
            tags: "sequoia tide infinite campus ic portal myportal student information schedule grades gradebook calendar attendance transcript",
            backgroundColor: "#81cc31"
        },
        {
            link: "https://myportal.fhda.edu/uPortal/f/home/normal/render.uP/",
            image: "pics/foothill_myportal.png",
            weightIndex: 4,
            categories: [categories.all, categories.foothill],
            tags: "foothill fhda de anza myportal portal"
        },
        {
            link: "https://docs.google.com/presentation/u/0/?tgif=d",
            image: "pics/slides.png",
            weightIndex: 5,
            categories: [categories.all, categories.tide, categories.tidePresentation, categories.resources, categories.resourcesGoogle],
            tags: "google slides slideshows presentations"
        },
        {
            link: "https://drive.google.com/?authuser=0",
            image: "pics/drive.png",
            weightIndex: 6,
            categories: [categories.all, categories.resources, categories.resourcesGoogle],
            tags: "google drive files documents folders",
            imageCoversFullBox: true
        },
        {
            link: "https://apstudents.collegeboard.org/",
            image: "pics/ap_classroom.png",
            weightIndex: 7,
            categories: [categories.all, categories.tide, categories.tideMathScience],
            tags: "ap classroom apclassroom students college board advanced placement math calculus science physics collegeboard assignments"
        },
        {
            link: "https://www.vhlcentral.com/home",
            image: "pics/vhl.png",
            weightIndex: 8,
            categories: [categories.all, categories.tide, categories.tideSpanish],
            tags: "vhl central vhlcentral vista higher learning spanish espanol assignments"
        },
        {
            link: "https://quizlet.com/",
            image: "pics/quizlet.png",
            weightIndex: 9,
            categories: [categories.all, categories.tide, categories.tideSpanish],
            tags: "quizlet spanish flash cards flashcards studying"
        },
        {
            link: "https://quizlet.com/live",
            image: "pics/quizlet_live.png",
            weightIndex: 10,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "quizlet live",
            backgroundColor: "#2b417c"
        },
        {
            link: "https://kahoot.it/",
            image: "pics/kahoot.png",
            weightIndex: 11,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "kahoot live quiz"
        },
        {
            link: "https://quizizz.com/join",
            image: "pics/quizizz.png",
            weightIndex: 35,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "quizizz live"
        },
        {
            link: "https://im.kendallhunt.com/HS/teachers/2/index.html",
            image: "pics/im.png",
            weightIndex: 12,
            categories: [categories.all, categories.tide, categories.tideMathScience],
            tags: "integrated mathematics im math algebra 1 2 im kendall hunt geometry"
        },
        {
            link: "https://app.peardeck.com/join",
            image: "pics/peardeck.png",
            weightIndex: 13,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "peardeck presentation slideshow live pd joinpd",
            imageCoversFullBox: true
        },
        {
            link: "https://mail.google.com/mail/u/0/#inbox",
            image: "pics/gmail.png",
            weightIndex: 14,
            categories: [categories.all, categories.resources, categories.resourcesGoogle],
            tags: "gmail google mail inbox email message messaging chat"
        },
        {
            link: "https://www.collegeboard.org/",
            image: "pics/college_board.png",
            weightIndex: 15,
            categories: [categories.all, categories.college],
            tags: "college board collegeboard sat psat applications"
        },
        {
            link: "https://www.canva.com/",
            image: "pics/canva.png",
            weightIndex: 16,
            categories: [categories.all, categories.tide, categories.tidePresentation],
            tags: "canva presentations posters pamphlets graphic design video editing editor" //TODO: Add more tags
        },
        {
            link: "https://foothillcollege.instructure.com/",
            image: "pics/foothill_canvas.png",
            weightIndex: 17,
            categories: [categories.all, categories.foothill],
            tags: "foothill canvas fhda instructure assignments"
        },
        {
            link: "https://www.mybib.com/#/",
            image: "pics/my_bib.png",
            weightIndex: 18,
            categories: [categories.all, categories.tide, categories.tideGrammar],
            tags: "mybib bibliography citations citing sources works cited essays"
        },
        {
            link: "https://www.easybib.com/",
            image: "pics/easy_bib.png",
            weightIndex: 19,
            categories: [categories.all, categories.tide, categories.tideGrammar],
            tags: "easybib bibliography chegg citations citing sources works cited essays"
        },
        {
            link: "https://paper.co/",
            image: "pics/paper.png",
            weightIndex: 20,
            categories: [categories.all, categories.resources],
            tags: "paper tutoring help academic support feedback essays papers educational"
        },
        {
            link: "https://www.khanacademy.org/",
            image: "pics/khan.png",
            weightIndex: 21,
            categories: [categories.all, categories.resources],
            tags: "khan academy khanacademy educational lessons practice academic support math science studying",
            imageCoversFullBox: true
        },
        {
            link: "https://www.desmos.com/calculator",
            image: "pics/desmos.png",
            weightIndex: 22,
            categories: [categories.all, categories.tide, categories.tideMathScience],
            tags: "desmos online graphing calculator science physics mathematics calculus graphs plotting"
        },
        {
            link: "https://www.merriam-webster.com/",
            image: "pics/dictionary.png",
            weightIndex: 23,
            categories: [categories.all, categories.tide, categories.tideGrammar],
            tags: "merriam webster merriam-webster dictionary words english writing definitions grammar",
            imageCoversFullBox: true
        },
        {
            link: "https://www.thesaurus.com/",
            image: "pics/thesaurus.png",
            weightIndex: 24,
            categories: [categories.all, categories.tide, categories.tideGrammar],
            tags: "thesaurus words dictionary synonyms antonyms english writing grammar support"
        },
        {
            link: "https://www.grammarly.com/",
            image: "pics/grammarly.png",
            weightIndex: 25,
            categories: [categories.all, categories.tide, categories.tideGrammar],
            tags: "grammarly grammar grammer spelling corrections feedback sentences punctuations words english writing support essays"
        },
        {
            link: "https://www.etymonline.com/",
            image: "pics/etymology.png",
            weightIndex: 26,
            categories: [categories.all, categories.tide, categories.tideGrammar],
            tags: "etymonline etymology online dictionary definitions words origin history dictionary english grammar writing",
            backgroundColor: "#83001d"
        },
        {
            link: "https://www.slidescarnival.com/",
            image: "pics/slides_carnival.png",
            weightIndex: 27,
            categories: [categories.all, categories.tide, categories.tidePresentation],
            tags: "slidescarnival carnival slides slideshow templates themes decorations presentations"
        },
        {
            link: "https://app.scoir.com/student/dashboard",
            image: "pics/scoir.png",
            weightIndex: 28,
            categories: [categories.all, categories.college],
            tags: "scoir college university applications colleges applying information counseling"
        },
        {
            link: "https://apply.commonapp.org/dashboard",
            image: "pics/common_app.png",
            weightIndex: 29,
            categories: [categories.all, categories.college],
            tags: "commonapp common applications college university applying"
        },
        {
            link: "https://apply.universityofcalifornia.edu/my-application/login",
            image: "pics/uc.png",
            weightIndex: 30,
            categories: [categories.all, categories.college],
            tags: "uc university of california applications applying college UCB berkeley UCD davis UCI irvine UCLA los angeles UCM merced UCR riverside UCSD san diego UCSB santa barbara UCSC santa cruz",
            imageCoversFullBox: true
        },
        {
            link: "https://www.calstate.edu/apply",
            image: "pics/csu.png",
            weightIndex: 31,
            categories: [categories.all, categories.college],
            tags: "california state university cal state calstate csu applications applying college"
        },
        {
            link: "https://sequoiauhsd.gethelphss.com/Login/landing",
            image: "pics/tech_support.png",
            weightIndex: 32,
            categories: [categories.all, categories.resources, categories.tide],
            tags: "sequoia tide help technical support computer problems gethelp broken fix"
        },
        {
            link: "https://foothill.edu/",
            image: "pics/foothill.png",
            weightIndex: 33,
            categories: [categories.all, categories.foothill],
            tags: "foothill website fhda homepage"
        },
        {
            link: "https://nearpod.com/student/",
            image: "pics/nearpod.png",
            weightIndex: 35,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "nearpod near pod lessons"
        },
        {
            link: "https://app.clickup.com/",
            image: "pics/clickup.png",
            weightIndex: 36,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "clickup click up"
        },
        {
            link: "https://classroom.google.com/?pli=1",
            image: "pics/google_classroom.png",
            weightIndex: 37,
            categories: [categories.all, categories.resources, categories.resourcesGoogle, categories.tide, categories.tideInClass],
            tags: "google classroom"
        },
        {
            link: "https://www.geogebra.org/calculator",
            image: "pics/geogebra.png",
            weightIndex: 38,
            categories: [categories.all],
            tags: "geogebra geometry mathmatics algebra calculator graphs plotting"
        },
    ],
    info: [
        {
            type: "link",
            text: "Bell Schedule",
            link: "https://www.tideacademy.org/About/Bell-Schedule/index.html",
            image: "pics/bell.png",
            weightIndex: 0,
        },
        {
            type: "link",
            text: "Bus Schedule",
            link: "https://www.tideacademy.org/Students/Bus-Schedule/index.html",  
            image: "pics/bus.png",
            weightIndex: 1,
        },
        {
            type: "link",
            text: "Class Schedule",
            link: "https://ic.seq.org/campus/nav-wrapper/student/portal/student/schedule",
            image: "pics/class.png",  
            weightIndex: 2,
        },
        {
            type: "page",
            text: "Mental Health Hotlines",
            html: `
            
            `,
            image: "pics/hotlines.png",
            weightIndex: 3,
        },
        {
            type: "page",
            text: "Local Teen Clinics",
            html: "Health",
            image: "pics/clinic.png",
            weightIndex: 4,
        },
        {
            type: "link",
            text: "Staff Directory",
            link: "https://www.tideacademy.org/About/Staff-Directory/index.html",
            image: "pics/staff.png",
            weightIndex: 5,
        },
        {
            type: "link",
            text: "TIDE Calendar",
            link: "https://www.tideacademy.org/Calendar/",
            image: "pics/calendar.png",
            weightIndex: 6,
        }
    ],
    mentalHealthHotlines: [
        {
            categories: ["call", "emergency", "24/7"],
            number: "(123) 456-7890"
        }
    ]
}

const linksArrow = document.getElementById("links-arrow");
document.getElementById("links-wrapper").addEventListener("scroll", (event) => {
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
    let parsedValues = parseCookie(cookie);
    linkWeights = "linkWeights" in parsedValues ? parsedValues.linkWeights.split(",") : [];
    infoWeights = "infoWeights" in parsedValues ? parsedValues.infoWeights.split(",") : [];
    for (i in linkWeights) { linkWeights[i] = Number(linkWeights[i]); }
    for (i in infoWeights) { infoWeights[i] = Number(infoWeights[i]); }

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

var expireDate = new Date();
expireDate.setTime(expireDate.getTime() + (365 * 24 * 60 * 60 * 
1000));

function saveWeights() {
    document.cookie = `linkWeights=${linkWeights}; expires=${expireDate}; path=/`;
    document.cookie = `infoWeights=${infoWeights}; expires=${expireDate}; path=/`;
}

function clickedLink(weightIndex, weightType) {
    let weights = weightType == "link" ? linkWeights : infoWeights;

    let increaseAtLowestWeight = 0.15;  // How much the weight changes for the highest weighted link (out of 1)
    let increaseAtHighestWeight = 0.01;  // How much the weight changes for the lowest weighted link (out of 1)
    // console.log(increaseAt0Weight / (1 + weights[weightIndex] * (increaseAt0Weight / increaseAt1Weight - 1)))
    let maxWeight = Math.max(weights[weightIndex]) + 0.01;
    let minWeight = Math.min(weights[weightIndex]);
    let mappedWeight = (weights[weightIndex] - minWeight) / (maxWeight - minWeight);
    weights[weightIndex] += (maxWeight - minWeight) * increaseAtLowestWeight / (1 + mappedWeight * (increaseAtLowestWeight / increaseAtHighestWeight - 1));
    // See https://www.desmos.com/calculator/162epywbzd for more info ^^^

    let avg = weights.reduce((a, b) => a + b) / weights.length
    let adjustment = avg - 0.5;
    for (let i in weights) {
        weights[i] -= adjustment;
    }
    saveWeights();
    console.log(weights, linkWeights)
}

function createLinkBoxes() {
    resources.links.forEach((linkObj) => {
        newLinkBox = document.createElement("a");
        newLinkBox.href = linkObj.link;
        newLinkBox.target = "_blank"
        newLinkBox.classList.add("link-box");
        newLinkBox.style.backgroundImage = `url("${linkObj.image}")`;
        newLinkBox.style.backgroundColor = "backgroundColor" in linkObj ? linkObj.backgroundColor : "#FFFFFF"
        newLinkBox.style.backgroundSize = "imageCoversFullBox" in linkObj && linkObj.imageCoversFullBox ? "cover" : "contain" 

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

        linkObj.linkBox = newLinkBox;
    })
}

var categorySections = {"searchCategory": document.createElement("div")};
categorySections.searchCategory.classList.add("links-full-container");
for (let categoryID in categories) {
    categorySections[categories[categoryID]] = newSection = document.createElement("div");
    newSection.classList.add("links-full-container");
}

function addLink(linkObj, categorySection) {
    lastRowContainer = categorySection.lastChild;
    lastRowIndex = categorySection.childNodes.length - 1;
    if (lastRowIndex == -1 || 
        (lastRowIndex == 0 && lastRowContainer.childNodes.length == 3) ||
        (lastRowIndex > 0  && lastRowContainer.childNodes.length == 4)) {
        lastRowContainer = document.createElement("div")
        lastRowContainer.classList.add("links-row-container")
        
        categorySection.appendChild(lastRowContainer)
    }
    let newLinkBox = linkObj.linkBox.cloneNode();
    newLinkBox.weightIndex = linkObj.weightIndex;
    newLinkBox.onclick = function () { clickedLink(this.weightIndex, "link"); };
    newLinkBox.ondragstart = () => { return false; };
    lastRowContainer.appendChild(newLinkBox);
}

function clearCategorySection(categorySection) {
    categorySection.innerHTML = "";
}

function changeCategorySection(newCategorySection) {
    if (newCategorySection == categorySectionShowing) { return; }
    if (categorySectionShowing) {
        document.getElementById("links-wrapper").removeChild(categorySectionShowing);
    }
    document.getElementById("links-wrapper").appendChild(newCategorySection);
    categorySectionShowing = newCategorySection;

}

function changeCategory(newCategory) {
    search_box.value = "";
    changeCategorySection(categorySections[newCategory]);
    if (newCategory == selectedCategory) { return; }
    if (selectedCategory) {
        categoryButtons[selectedCategory].classList.remove("selected");
    }
    categoryButtons[newCategory].classList.add("selected");
    selectedCategory = newCategory;
}

function fillInCategorySection(categorySection) {
    lastRow = categorySection.lastChild;
    lastRowIndex = categorySection.childNodes.length - 1;
    desiredColumns = lastRowIndex == -1 ? 0 : (lastRowIndex == 0 ? 3 : 4);

    while (lastRow && desiredColumns - lastRow.childNodes.length > 0) {
        newLinkBox = document.createElement("a");
        newLinkBox.classList.add("link-box");
        newLinkBox.style.visibility = "hidden";

        lastRow.appendChild(newLinkBox);
    }
}

function addLinks() {
    resources.links.forEach((linkObj) => {
        linkObj.categories.forEach((category) => {
            addLink(linkObj, categorySections[category]);
        })
    })
    

    for (let category in categorySections) {
        fillInCategorySection(categorySections[category]);
    }
}

function addCategoryButtons() {
    categoryBar = document.getElementById("category-bar");
    for (let tabIndex in tabs) {
        if (tabIndex > 0) {
            let spacer = document.createElement("div");
            spacer.classList.add("spacer")
            categoryBar.appendChild(spacer);
        }
        let [categoryName, subcategories] = tabs[tabIndex];

        let categoryButtonWrapper = document.createElement("div");
        categoryButtonWrapper.classList.add("category-button-wrapper");

        let categoryButton = document.createElement("div");
        categoryButton.classList.add("category-button");

        categoryButton.innerHTML = categoryName;
        categoryButtons[categoryName] = categoryButton;
        categoryButton.categoryName = categoryName;
        categoryButton.onclick = function() { changeCategory(this.categoryName); };
        
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

function resetOrder() {
    if (confirm("Are you sure you want to reset the order of all links?")) {
        let currentDate = new Date();
        expireDate.setTime(expireDate.getTime());

        document.cookie = `linkWeights=${linkWeights}; expires=${currentDate}; path=/`;
        document.cookie = `infoWeights=${infoWeights}; expires=${currentDate}; path=/`;
    }
}

function expand(button) {
    infoPullout = document.getElementById("info-pullout");
    if (infoPullout.classList.contains("pulled-out")) {
        infoPullout.classList.remove("pulled-out");
        button.classList.remove("selected");
    } else {
        // infoPullout.innerHTML = button.pageHTML;
        infoPullout.classList.add("pulled-out")
        button.classList.add("selected")

        // if (button.)
    }
}

function addInfo() {
    infoContainer = document.getElementById("info-full-container");
    resources.info.forEach((infoObj) => {
        let infoBox = document.createElement("a");
        infoBox.classList.add("info-box");
        if (infoObj.type == "page") {
            infoBox.classList.add("info-pullout-button");
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
        infoText.style.setProperty("--default-font-size", `${size}vw`);
        infoText.style.setProperty("--expanded-font-size", `${size * 1.05}vw`);
        infoText.innerHTML = infoObj.text;
        infoBox.appendChild(infoText);

        infoContainer.appendChild(infoBox);
    })
}

let selectedHotlineCategories = []

function selectHotlineCategory(button=undefined, category=undefined) {
    let hotlinesNumbersSection = document.getElementById("hotlines-numbers-section");
    if (!hotlinesNumbersSection) { return }
    if (button && category) {
        if (button.classList.contains("selected")) {
            button.classList.remove("selected");
            const index = array.indexOf(category);
            if (index > -1) { array.splice(index, 1); }
        } else {
            button.classList.add("selected");
            selectedHotlineCategories.push(category)
        }
    }
    hotlinesNumbersSection.innerHTML = "";
    hotlineLoop: for (let hotlineI in resources.mentalHealthHotlines) {
        let hotline = resources.mentalHealthHotlines[hotlineI];
        for (let categoryI in selectedHotlineCategories) {
            if (hotline.categories.includes(selectedHotlineCategories[categoryI])) {
                let newHotlineElement = document.createElement("div");
                newHotlineElement.classList.add("hotline");
                newHotlineElement.innerHTML = `${hotline.number}`;
                hotlinesNumbersSection.appendChild(newHotlineElement);
                continue hotlineLoop;
            }
        }
    }
}

var search_box = document.getElementById("search-input");
search_box.addEventListener('keyup', (e) => {
    search();
})

function search() {
    search_input = search_box.value;
    if (search_input.length > 0) {  // If there's a search term, activate the search section and clear it
        clearCategorySection(categorySections.searchCategory);
        changeCategorySection(categorySections.searchCategory);
    } else {  // If the search bar is empty, change the link section back to the selected category and skip everything else
        changeCategorySection(categorySections[selectedCategory]);
        return;
    }

    linkLoop: for (let loopI in resources.links) {  // For every link:
        linkObj = resources.links[loopI];

        searchWords = search_input.split(" ");
        wordLoop: for (let wordI in searchWords) { // for each word in the search input
            if (!linkObj.categories.includes(selectedCategory)) { continue linkLoop; }  // If the link isn't in the selected category, skip the link and continue to the next
            linkTags = linkObj.tags.split(" ")
            tagLoop: for (let tagI in linkTags) {  // For every tag in the link's tags:
                tag = linkTags[tagI];
                letterLoop: for (let letterI in searchWords[wordI]) { // For every letter in tag and search
                    if (tag.toLowerCase()[letterI] != searchWords[wordI].toLowerCase()[letterI]) { // If letter of tag matches letter of search
                        continue tagLoop;
                    }
                }
                continue wordLoop;
            }
            continue linkLoop;
        }
        addLink(linkObj, categorySections.searchCategory); // If matches, add link 
    }
    
    fillInCategorySection(categorySections.searchCategory);  // Fill in the last row with invisible links so the last link isn't all massive and weird
}

function toggleOptions() {
    let optionsPullout = document.getElementById("options-pullout");
    if (optionsPullout.classList.contains("pulled-out")) {
        optionsPullout.classList.remove("pulled-out");
    } else {
        optionsPullout.classList.add("pulled-out");
    }
}

function setup() {
    loadWeights();
    createLinkBoxes();
    addLinks();
    addInfo();
    addCategoryButtons();
    changeCategory(categories.all);

    saveWeights();
}

setup();
