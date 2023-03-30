var tabs = ["Home", ""]
var home = tabs[0];

linkWeights = [0.5, 0.5]
infoWeights = [0.5, 0.5]

var resources = {
    links: [
        {
            link: "",
            image: "",
            weightIndex: 0
        },
        {
            link: "",
            image: "",
            weightIndex: 1
        }
    ],
    info: [
        {
            type: "link",
            weightIndex: 0,
            link: ""
        },
        {
            type: "page",
            weightIndex: 1,
            html: ""
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
            if (cookie[j] == ":") {
                let [cookieName, cookieVal] = [cookie.substring(0, j), cookie.substring(j + 2)];
                parsed[cookieName] = cookieVal;
                break;
            }
        }
    }
    return parsed;
}

function setup() {
    let cookie = document.cookie;
    if (cookie == "") {
    } else {
        let parsedValues = parseCookie(cookie);
        console.log(parsedValues);
    }
    document.cookie = `linkWeights: ${linkWeights}; path=/`;
    document.cookie = `infoWeights: ${infoWeights}; path=/`;

}

setup();