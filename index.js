var categories = { 
    all: "All", 
    tide: "TIDE", 
    tideInClass: "In-Class Tools",
    resourcesPresentation: "Presentation Material",
    tideMathScience: "Math/Science",
    tideSpanish: "Spanish",
    foothill: "Foothill", 
    hotlines: "Mental Health", 
    resources: "Academic Resources", // Support, tools, resources
    resourcesGoogle: "Google",
    resourcesSupport: "Support",
    resourcesGrammar: "English/Grammar",
    resourcesMath: "Math",
    schedules: "Schedules", 
    college: "College Apps", 
};
var tabs = [
    [categories.all, []],
    [categories.tide, [
        categories.tideInClass, 
        categories.tideMathScience, 
        categories.tideSpanish]],
    [categories.foothill, []],
    [categories.resources, [
        categories.resourcesSupport, 
        categories.resourcesPresentation, 
        categories.resourcesGrammar, 
        categories.resourcesMath,
        categories.resourcesGoogle]], 
    [categories.college, []],
];
var selectedCategory;
var categorySectionShowing;
var categoryButtons = {};

var hotlineCategories = {
    call: "Call",
    text: "Text",
    alwaysActive: "24/7",
    anonymous: "Anonymous",
    emergency: "Immediate Emergency"
}
var clinicCities = {
    redwoodCity: "Redwood City",
    paloAlto: "Palo Alto",
    eastPaloAlto: "East Palo Alto",
    mountainView: "Mountain View",
    sanJose: "San Jose",
    sanMateo: "San Mateo",
    sunnyvale: "Sunnyvale",
    dalyCity: "Daly City",
    sanFrancisco: "San Francisco",
    all: "All Nearby Cities"
}

var linkWeights = [];
var infoWeights = [];

var resources = {
    links: [
        {
            link: "https://apstudents.collegeboard.org/",
            name: "AP Classroom",
            image: "pics/ap_classroom.png",
            weightIndex: 7,
            categories: [categories.all, categories.tide, categories.tideMathScience],
            tags: "ap classroom apclassroom students college board advanced placement math calculus science physics collegeboard assignments"
        },
        {
            link: "https://www.canva.com/",
            name: "Canva",
            image: "pics/canva.png",
            weightIndex: 16,
            categories: [categories.all, categories.resources, categories.resourcesPresentation],
            tags: "canva presentations posters pamphlets graphic design video editing editor" 
        },
        {
            link: "https://www.ck12.org/student/",
            name: "CK-12",
            image: "pics/ck12.png",
            weightIndex: 44,
            categories: [categories.all, categories.resources, categories.resourcesMath, categories.tide, categories.tideMathScience],
            tags: "ck-12 ck 12 learning lessons education resources"
        },
        {
            link: "https://app.clickup.com/",
            name: "ClickUp",
            image: "pics/clickup.png",
            weightIndex: 36,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "clickup click up click-up sprint collaboration"
        },
        {
            link: "https://www.collegeboard.org/",
            name: "College Board",
            image: "pics/college_board.png",
            weightIndex: 15,
            categories: [categories.all, categories.college],
            tags: "college board collegeboard sat psat applications"
        },
        {
            link: "https://apply.commonapp.org/dashboard",
            name: "Common App",
            image: "pics/common_app.png",
            weightIndex: 29,
            categories: [categories.all, categories.college],
            tags: "commonapp common app applications collegea university universities applying"
        },
        {
            link: "https://conjuguemos.com/",
            name: "Conjuguemos",
            image: "pics/conjuguemos.jpg",
            weightIndex: 47,
            categories: [categories.all, categories.tide, categories.tideSpanish],
            tags: "conjuguemos spanish conjugations espanol language"
        },
        {
            link: "https://www.calstate.edu/apply",
            name: "CSU Apply",
            image: "pics/csu.png",
            weightIndex: 31,
            categories: [categories.all, categories.college],
            tags: "california state university universities cal state calstate csu applications applying colleges"
        },
        {
            link: "https://www.desmos.com/calculator",
            name: "Desmos",
            image: "pics/desmos.png",
            weightIndex: 22,
            categories: [categories.all, categories.resources, categories.resourcesMath, categories.tide, categories.tideMathScience],
            tags: "desmos online graphing calculator science physics mathematics calculus algebra graphs plotting scientific"
        },
        {
            link: "https://www.easybib.com/",
            name: "EasyBib",
            image: "pics/easy_bib.png",
            weightIndex: 19,
            categories: [categories.all, categories.resources, categories.resourcesGrammar],
            tags: "easybib easy bib bibliography chegg citations citing sources works cited essays"
        },
        {
            link: "https://auth.edgenuity.com/Login/Login/Student",
            name: "Edgenuity",
            image: "pics/edgenuity.svg",
            weightIndex: 2,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "PE P.E. physical education edgenuity lessons educational assignments"
        },
        {
            link: "https://edpuzzle.com/",
            name: "Edpuzzle",
            image: "pics/edpuzzle.png",
            weightIndex: 46,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "edpuzzle video lessons"
        },
        {
            link: "https://www.etymonline.com/",
            name: "Etymonline",
            image: "pics/etymology.png",
            weightIndex: 26,
            categories: [categories.all, categories.resources, categories.resourcesGrammar],
            tags: "etymonline etymology online dictionary definitions words origin history dictionary english grammar writing",
            backgroundColor: "#83001d"
        },
        {
            link: "https://info.flip.com/en-us.html",
            name: "Flip",
            image: "pics/flip.jpg",
            weightIndex: 45,
            categories: [categories.all, categories.tide],
            tags: "flip flipgrid video discussion"
        },
        {
            link: "https://foothillcollege.instructure.com/",
            name: "Foothill Canvas",
            image: "pics/foothill_canvas.png",
            weightIndex: 17,
            categories: [categories.all, categories.foothill],
            tags: "foothill college canvas fhda instructure assignments homework"
        },
        {
            link: "https://myportal.fhda.edu/uPortal/f/home/normal/render.uP/",
            name: "Foothill MyPortal",
            image: "pics/foothill_myportal.png",
            weightIndex: 4,
            categories: [categories.all, categories.foothill],
            tags: "foothill college fhda de anza myportal portal information"
        },
        {
            link: "https://foothill.edu/",
            name: "Foothill Website",
            image: "pics/foothill.png",
            weightIndex: 33,
            categories: [categories.all, categories.foothill],
            tags: "foothill website fhda homepage"
        },
        {
            link: "https://app.formative.com/",
            name: "Formative",
            image: "pics/formative.png",
            weightIndex: 0,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "english formative instructions class assignments homework"
        },
        {
            link: "https://www.seq.org/Departments/Student-Services/COVID-19-Updates/Resources/Free-Internet-Programs/index.html",
            name: "Free Internet Programs",
            image: "pics/wifi.jpg",
            weightIndex: 49,
            categories: [categories.all, categories.tide, categories.resources, categories.resourcesSupport],
            tags: "free internet program wifi sequoia SUHSD resources technology application home support"
        },
        {
            link: "https://www.geogebra.org/calculator",
            name: "Geogebra",
            image: "pics/geogebra.png",
            weightIndex: 38,
            categories: [categories.all, categories.resources, categories.resourcesMath],
            tags: "geogebra geometry mathmatics algebra calculator graphs plotting"
        },
        {
            link: "https://mail.google.com/mail/u/0/#inbox",
            name: "Gmail",
            image: "pics/gmail.png",
            weightIndex: 14,
            categories: [categories.all, categories.resources, categories.resourcesGoogle],
            tags: "gmail google mail inbox emails message messaging chat"
        },
        {
            link: "https://www.grammarly.com/",
            name: "Grammarly",
            image: "pics/grammarly.jpg",
            weightIndex: 25,
            categories: [categories.all, categories.resources, categories.resourcesGrammar],      
            tags: "grammarly grammar grammer spelling corrections feedback sentences punctuations words english writing support essays"
        },
        {
            link: "https://classroom.google.com/?pli=1",
            name: "Google Classroom",
            image: "pics/google_classroom.png",
            weightIndex: 37,
            categories: [categories.all, categories.resources, categories.resourcesGoogle, categories.tide, categories.tideInClass],
            tags: "google classroom lessons classes"
        },
        {
            link: "https://docs.google.com/document/u/0/?tgif=c",
            name: "Google Docs",
            image: "pics/docs.jpg",
            weightIndex: 39,
            categories: [categories.all, categories.resources, categories.resourcesGoogle],
            tags: "google docs documents writing notes"
        },
        {
            link: "https://docs.new/",
            name: "New Google Doc",
            image: "pics/new_doc.png",
            weightIndex: 40,
            categories: [categories.all, categories.resources, categories.resourcesGoogle],
            tags: "google docs documents writing notes new create"
        },
        {
            link: "https://drive.google.com/?authuser=0",
            name: "Google Drive",
            image: "pics/drive.png",
            weightIndex: 6,
            categories: [categories.all, categories.tide, categories.resources, categories.resourcesGoogle],
            tags: "google drive files documents folders",
            imageCoversFullBox: true
        },
        {
            link: "https://docs.google.com/spreadsheets/u/0/?tgif=d",
            name: "Google Sheets",
            image: "pics/sheets.png",
            weightIndex: 42,
            categories: [categories.all, categories.resources, categories.resourcesGoogle],
            tags: "google sheets spreadsheets"
        },
        {
            link: "https://sheets.new/",
            name: "New Google Sheet",
            image: "pics/new_sheet.png",
            weightIndex: 43,
            categories: [categories.all, categories.resources, categories.resourcesGoogle],
            tags: "google sheets spreadsheets new create"
        },
        {
            link: "https://docs.google.com/presentation/u/0/?tgif=d",
            name: "Google Slides",
            image: "pics/slides.png",
            weightIndex: 5,
            categories: [categories.all, categories.resources, categories.resourcesGoogle, categories.resourcesPresentation],
            tags: "google slides slideshows presentations"
        },
        {
            link: "https://slides.new/",
            name: "New Google Slide",
            image: "pics/new_slide.png",
            weightIndex: 41,
            categories: [categories.all, categories.resources, categories.resourcesGoogle, categories.resourcesPresentation],
            tags: "google slides slideshows presentations new create"
        },
        {
            link: "https://ic.seq.org",
            name: "Infinite Campus",
            image: "pics/ic.png",
            weightIndex: 3,
            categories: [categories.all, categories.tide, categories.college],
            tags: "sequoia tide infinite campus ic portal myportal student information schedule grades gradebook calendar attendance transcript",
            backgroundColor: "#81cc31"
        },
        {
            link: "https://im.kendallhunt.com/HS/teachers/2/index.html",
            name: "Integrated Mathematics",
            image: "pics/im.png",
            weightIndex: 12,
            categories: [categories.all, categories.tide, categories.tideMathScience],
            tags: "integrated mathematics im math algebra 1 2 im kendall hunt geometry"
        },
        {
            link: "https://kahoot.it/",
            name: "Kahoot",
            image: "pics/kahoot.png",
            weightIndex: 11,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "kahoot live quiz"
        },
        {
            link: "https://www.khanacademy.org/",
            name: "Khan Academy",
            image: "pics/khan_academy.png",
            weightIndex: 21,
            categories: [categories.all, categories.resources, categories.resourcesSupport],
            tags: "khan academy khanacademy educational lessons practice academic support math science studying",
            // imageCoversFullBox: true
        },
        {
            link: "https://www.merriam-webster.com/",
            name: "Merriam-Webster Dictionary",
            image: "pics/dictionary.png",
            weightIndex: 23,
            categories: [categories.all, categories.resources, categories.resourcesGrammar],
            tags: "merriam webster merriam-webster dictionary words english writing definitions grammar",
            imageCoversFullBox: true
        },
        {
            link: "https://www.mybib.com/#/",
            name: "MyBib",
            image: "pics/my_bib.png",
            weightIndex: 18,
            categories: [categories.all, categories.resources, categories.resourcesGrammar],
            tags: "mybib bibliography citations citing sources works cited essays"
        },
        {
            link: "https://nearpod.com/student/",
            name: "Nearpod",
            image: "pics/nearpod.png",
            weightIndex: 35,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "nearpod near pod lessons"
        },
        {
            link: "https://paper.co/",
            name: "Paper Tutoring",
            image: "pics/paper.png",
            weightIndex: 20,
            categories: [categories.all, categories.resources, categories.resourcesSupport],
            tags: "paper tutoring help academic support feedback essays papers educational"
        },
        {
            link: "https://app.peardeck.com/join",
            name: "Peardeck",
            image: "pics/peardeck.png",
            weightIndex: 13,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "peardeck pear deck presentation slideshow live pd joinpd",
            imageCoversFullBox: true
        },
        {
            link: "https://quizizz.com/join",
            name: "Quizizz",
            image: "pics/quizizz.png",
            weightIndex: 35,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "quizizz live"
        },
        {
            link: "https://quizlet.com/",
            name: "Quizlet",
            image: "pics/quizlet.png",
            weightIndex: 9,
            categories: [categories.all, categories.tide, categories.tideSpanish, categories.resources, categories.resourcesSupport],
            tags: "quizlet spanish flash cards flashcards studying"
        },
        {
            link: "https://quizlet.com/live",
            name: "Quizlet Live",
            image: "pics/quizlet_live.png",
            weightIndex: 10,
            categories: [categories.all, categories.tide, categories.tideInClass],
            tags: "quizlet live",
            backgroundColor: "#2b417c"
        },
        {
            link: "https://app.scoir.com/student/dashboard",
            name: "Scoir",
            image: "pics/scoir.png",
            weightIndex: 28,
            categories: [categories.all, categories.college],
            tags: "scoir college university universities applications colleges applying information counseling"
        },
        {
            link: "https://www.slidescarnival.com/",
            name: "Slides Carnival",
            image: "pics/slides_carnival.png",
            weightIndex: 27,
            categories: [categories.all, categories.resources, categories.resourcesPresentation],
            tags: "slidescarnival carnival slides slideshow templates themes decorations presentations"
        },
        {
            link: "https://sequoia.instructure.com/",
            name: "TIDE Canvas",
            image: "pics/tide_canvas.png",
            weightIndex: 34,
            categories: [categories.all, categories.tide],
            tags: "tide canvas sequoia instructure assignments homework"
        },
        {
            link: "https://sequoiauhsd.gethelphss.com/Login/landing",
            name: "TIDE Tech Support",
            image: "pics/tech_support.png",
            weightIndex: 32,
            categories: [categories.all, categories.resources, categories.resourcesSupport, categories.tide],
            tags: "sequoia tide help technical support computer problems gethelp broken fix"
        },
        {
            link: "https://www.thesaurus.com/",
            name: "Thesaurus",
            image: "pics/thesaurus.png",
            weightIndex: 24,
            categories: [categories.all, categories.resources, categories.resourcesGrammar],
            tags: "thesaurus words dictionary synonyms antonyms english writing grammar support"
        },
        {
            link: "https://www.tideacademy.org/",
            name: "TIDE Website",
            image: "pics/tide.png",
            weightIndex: 1,
            categories: [categories.all, categories.tide],
            tags: "tide academy website T.I.D.E. homepage"
        },
        {
            link: "https://apply.universityofcalifornia.edu/my-application/login",
            name: "UC Apply",
            image: "pics/uc.png",
            weightIndex: 30,
            categories: [categories.all, categories.college],
            tags: "uc university of california applications applying colleges UCB berkeley UCD davis UCI irvine UCLA los angeles UCM merced UCR riverside UCSD san diego UCSB santa barbara UCSC santa cruz",
            imageCoversFullBox: true
        },
        {
            link: "https://www.vhlcentral.com/home",
            name: "VHL Central",
            image: "pics/vhl.png",
            weightIndex: 8,
            categories: [categories.all, categories.tide, categories.tideSpanish, categories.tideInClass],
            tags: "vhl central vhlcentral vista higher learning spanish espanol assignments lessons"
        },
        {
            link: "https://yearbookavenue.jostens.com/",
            name: "Yearbook",
            image: "pics/yearbook.jpg",
            weightIndex: 48,
            categories: [categories.all, categories.tide],
            tags: "yearbook year book jostens tide order"
        }
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
            text: "Class Schedule",
            link: "https://ic.seq.org/campus/nav-wrapper/student/portal/student/schedule",
            image: "pics/class.png",  
            weightIndex: 2,
        },
        {
            type: "link",
            text: "TIDE Calendar",
            link: "https://www.tideacademy.org/Calendar/",
            image: "pics/calendar.png",
            weightIndex: 6,
        },
        {
            type: "page",
            text: "Mental Health Hotlines",
            id: "hotlines",
            html: `
            <div id="info-pullout-category-bar-wrapper"><div id="info-pullout-category-bar"></div></div>
            <div id="hotlines-numbers-section"></div>`,
            image: "pics/hotlines.png",
            weightIndex: 3,
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
            text: "Bus Schedule",
            link: "https://www.tideacademy.org/Students/Bus-Schedule/index.html",  
            image: "pics/bus.png",
            weightIndex: 1,
        },
        {
            type: "page",
            text: "Local Teen Clinics",
            // html: "<div style='text-align: center; background-color: white; padding: 10px;'><span style='font-weight: bold;'>NOTE:</span></br>The Local Teen Clinics section is still a work in progress, but it will contain the following information:<img src='pics/local_teen_clinics.png' style='width: 75%; display: block; margin: auto; margin-top: 10px;'></img></div>",
            html: `
            <div id="info-pullout-category-bar-wrapper"><div id="info-pullout-category-bar"></div></div>
            <div id="teen-clinics-section"></div>`,
            image: "pics/clinic.png",
            id: "clinics",
            weightIndex: 4,
        },
    ],
    mentalHealthHotlines: [
        {
            label: "Behavior Health and Recovery Services",
            numbers: [
                {
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive],
                    number: "800-686-0101"
                }
            ]
        },
        {
            label: "Communities Overcoming Relationship Abuse",
            numbers: [
                {
                    number: "800-300-1080",
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive, hotlineCategories.anonymous],
                }
            ]
        },
        {
            label: "Crisis Text Line",
            numbers: [
                {
                    number: `741-741: "START"`,
                    categories: [hotlineCategories.text, hotlineCategories.alwaysActive, hotlineCategories.anonymous],
                }
            ]
        },
        {
            label: "Disaster Distress Helpline",
            numbers: [
                {
                    number: "800-985-5990",
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive],
                },
                {
                    number: `6674: "TalkWithUs" or "Hablamos"`,
                    categories: [hotlineCategories.text, hotlineCategories.alwaysActive],
                }
            ]
        },
        {
            label: "Domestic Violence Hotline",
            numbers: [
                {
                    number: "866-799-7233",
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive, hotlineCategories.anonymous],
                }
            ]
        },
        {
            label: "Grief Counseling Hotline",
            numbers: [
                {
                    number: "415-499-1195",
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive],
                }
            ]
        },
        {
            label: "KARA - Grief Support",
            numbers: [
                {
                    number: "650-321-5273",
                    categories: [hotlineCategories.call],
                    time: "M-Th, 9-4 PM & F, 9-1 PM",
                }
            ]
        },
        {
            label: "Mills Peninsula Burlingame Psychiatric Emergency Services",
            numbers: [
                {
                    number: "650-696-5915",
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive, hotlineCategories.emergency],
                }
            ]
        },
        {
            label: "National Suicide Prevention Line",
            numbers: [
                {
                    number: "988",
                    categories: [hotlineCategories.call, hotlineCategories.text, hotlineCategories.alwaysActive, hotlineCategories.anonymous, hotlineCategories.emergency],
                }
            ]
        },
        {
            label: "RAINN Sexual Assault Hotline",
            numbers: [
                {
                    number: "800-656-4673",
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive, hotlineCategories.anonymous],
                }
            ]
        },
        {
            label: "Rape Trauma Services",
            numbers: [
                {
                    number: "650-692-7273",
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive, hotlineCategories.anonymous, hotlineCategories.emergency],
                }
            ]
        },
        {
            label: "SAMHSA National Helpline",
            numbers: [
                {
                    number: "800-662-4357",
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive],
                }
            ]
        },
        {
            label: "San Mateo Crisis Intervention and Suicide Prevention Hotline",
            numbers: [
                {
                    number: "650-579-0350", 
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive, hotlineCategories.emergency],

                },
                {
                    number: "800-273-8255",
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive, hotlineCategories.emergency],
                }
            ]
        },
        {
            label: "San Mateo Medical Center Psychiatric Emergency Services",
            numbers: [
                {
                    number: "650-573-2662",
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive, hotlineCategories.emergency],
                }
            ]
        },
        {
            label: "Starvista Teen Crisis",
            numbers: [
                {
                    number: "650-747-6463",
                    categories: [hotlineCategories.text],
                    time: "M-F, 4-10 PM",
                }
            ]
        },
        {
            label: "Trevor Project LGBTQ+",
            numbers: [
                {
                    number: "866-799-7233",
                    categories: [hotlineCategories.call, hotlineCategories.alwaysActive, hotlineCategories.anonymous, hotlineCategories.emergency],
                },
                {
                    number: `678-678: "START"`,
                    categories: [hotlineCategories.text, hotlineCategories.alwaysActive, hotlineCategories.anonymous, hotlineCategories.emergency],
                }
            ]
        },
        {
            label: "TXT 4 HELP",
            numbers: [
                {
                    number: `44357: "safe" & current address`,
                    categories: [hotlineCategories.text, hotlineCategories.alwaysActive],
                }
            ]
        },
    ],
    healthClinics: [
        {
            name: "Daly City Kaiser Teen Clinic (members only)",
            city: clinicCities.dalyCity,
            website: "www.kaiserpermanente.org",
            number: "650-877-5700",
            address: "395 Hickey Blvd.",
            hours: "M-F, 8:30-5 PM",
        },
        {
            name: "Daly City Youth Health Center",
            city: clinicCities.dalyCity,
            website: "www.dalycityyouth.org",
            number: "650-877-5700",
            address: "350 90th St. (3rd Floor)",
            hours: "M-F, 9-5:30 PM",
        },
        {
            name: "Fair Oaks Health Center",
            city: clinicCities.redwoodCity,
            website: "www.sanmateomedicalcenter.org",
            number: "650-578-7141",
            address: "2710 Middlefield Rd.",
            hours: "M-F, 8:30-5 PM",
        },
        {
            name: "Kaiser Teen Clinic (members only)",
            city: clinicCities.redwoodCity,
            website: "www.kaiserpermanente.org",
            number: "650-299-2025",
            address: "910 Marshall Rd. (Birch Building)",
            hours: "M-F, 9-5 PM",
        },
        {
            name: "Kaiser Teen Clinic (members only)",
            city: clinicCities.sanJose,
            website: "www.kaiserpermanente.org",
            number: "408-362-4740",
            address: "276 International Cir",
            hours: "M-F, 3:30-5 PM",
        },
        {
            name: "Lucile Packard Teen Clinic (Stanford)",
            city: clinicCities.sunnyvale,
            website: "www.stanfordchildrens.org/en/service/teens-and-young-adults",
            number: "650-497-7201",
            address: "1195 W. Fremont Ave.",
            hours: "M-Sat, 7:30-5 PM",
        },
        {
            name: "MayView Community Health Center",
            city: clinicCities.paloAlto,
            website: "www.mayview.org",
            number: "650-327-8717",
            address: "270 Grant Ave.",
            hours: "M, W, Th, F, 8-5 PM & T, 10-5 PM * 4th T/mo, 1-5 PM",
        },
        {
            name: "MayView Community Health Center",
            city: clinicCities.mountainView,
            website: "www.mayview.org",
            number: "650-965-3323",
            address: "900 Miramonte Ave. (2nd floor)",
            hours: "Contact to confirm hours + app availability",
        },
        {
            name: "Planned Parenthood Blossom Hill",
            city: clinicCities.sanJose,
            website: "www.ppmarmonte.org",
            number: "408-281-9777",
            address: "5440 Thornwood Dr. (Suite G)",
            hours: "M-F, 8:40-5 PM",
        },
        {
            name: "Planned Parenthood Eastside",
            city: clinicCities.sanJose,
            website: "www.ppmarmonte.org",
            number: "408-729-7600",
            address: "3131 Alum Rock Ave.",
            hours: "M-F, 8:40-5 PM",
        },
        {
            name: "Planned Parenthood Mar Monte",
            city: clinicCities.sanJose,
            website: "www.ppmarmonte.org",
            number: "408-274-7100",
            address: "2470 Alvin Ave. (Suite G)",
            hours: "M-F, 8-6 PM & Sat, 8-5 PM & Sun, 8-4 PM",
        },
        {
            name: "Planned Parenthood Mountain View",
            city: clinicCities.mountainView,
            website: "www.ppmarmonte.org",
            number: "650-948-0807",
            address: "2500 California St.",
            hours: "M-F, 9-5 PM",
        },
        {
            name: "Planned Parenthood Redwood City",
            city: clinicCities.redwoodCity,
            website: "www.ppmarmonte.org",
            number: "650-503-7810",
            address: "2907 El Camino Real",
            hours: "M-F, 9-5 PM",
        },
        {
            name: "Planned Parenthood San Mateo",
            city: clinicCities.sanMateo,
            website: "www.ppmarmonte.org",
            number: "650-235-7940",
            address: "29 Baywood Ave.",
            hours: "M-F, 8:30-5 PM",
        },
        {
            name: "Planned Parenthood San Jose Central",
            city: clinicCities.sanJose,
            website: "www.ppmarmonte.org",
            number: "408-287-7526",
            address: "1691 The Alameda",
            hours: "M-Th, 8-8 PM & F, 8-5 PM & Sat-Sun, 8-4 PM",
        },
        {
            name: "Planned Parenthood South SF",
            city: clinicCities.sanFrancisco,
            website: "www.ppmarmonte.org",
            number: "877-855-7526",
            address: "435 Grand Ave.",
            hours: "M-F, 9-5 PM",
        },
        {
            name: "Ravenswood Family Health Center",
            city: clinicCities.eastPaloAlto,
            website: "www.ravenswoodfhc.org",
            number: "650-330-7400",
            address: "1885 Bay Rd. (Suite A)",
            hours: "M-Th, 8-7 PM & F, 8-5 PM & Sat, 8-1 PM",
        },
        {
            name: "Redwood City Sequoia Teen Wellness Center",
            city: clinicCities.redwoodCity,
            website: "www.smchealth.org/location/sequoia-teen-wellness-center",
            number: "650-366-2927",
            address: "200 James Ave. (Sequoia HS)",
            hours: "M-F, 8:30-5 PM",
        },
        { // TO LEON: If you reorder these, you might want to make this one last no matter the alphabetical ordering
            name: "Stanford Children's Health Teen Van",
            city: clinicCities.all,
            website: "https://www.stanfordchildrens.org/en/service/teen-van",
            number: "650-736-7172 or EMAIL: teenvan@stanfordchildrens.org",
            address: `Time and Address Vary: <a href="https://www.stanfordchildrens.org/en/service/teen-van/schedule?">Schedule</a>`,
        },
    ]
}
        
document.getElementById("links-wrapper").addEventListener("scroll", (event) => {
    document.getElementById("links-arrow").classList.add("hidden");
})
        
document.getElementById("info-section").addEventListener("scroll", (event) => {
    document.getElementById("info-arrow").classList.add("hidden");
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

function sortResourcesByWeights() {
    // if (linkWeights.length == 0) {
    //     resources.links.sort((a, b) => a.text > b.text ? 1 : 0);
    // } else {
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
// }
}

function loadWeights() {
    let cookie = document.cookie;
    let parsedValues = parseCookie(cookie);
    linkWeights = "linkWeights" in parsedValues ? parsedValues.linkWeights.split(",") : [];
    infoWeights = "infoWeights" in parsedValues ? parsedValues.infoWeights.split(",") : [];
    for (i in linkWeights) { linkWeights[i] = Number(linkWeights[i]); }
    for (i in infoWeights) { infoWeights[i] = Number(infoWeights[i]); }

    sortResourcesByWeights();
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

    sortResourcesByWeights();
    addLinks(prevBoxesPerRow);
}

function createLinkBoxes() {
    resources.links.forEach((linkObj) => {
        newLinkBox = document.createElement("a");
        newLinkBox.href = linkObj.link;
        newLinkBox.target = "_blank"
        newLinkBox.title = linkObj.name;
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

function addLink(linkObj, categorySection, boxesPerRow=5) {
    lastRowContainer = categorySection.lastChild;
    lastRowIndex = categorySection.childNodes.length - 1;
    if (lastRowIndex == -1 || 
        (lastRowIndex == 0 && lastRowContainer.childNodes.length == boxesPerRow - 1) ||
        (lastRowIndex > 0  && lastRowContainer.childNodes.length == boxesPerRow)) {
        lastRowContainer = document.createElement("div")
        lastRowContainer.classList.add("links-row-container")
        
        categorySection.appendChild(lastRowContainer)
    }
    let newLinkBox = linkObj.linkBox.cloneNode();
    newLinkBox.weightIndex = linkObj.weightIndex;
    newLinkBox.onclick = function () { clickedLink(this.weightIndex, "link"); };
    newLinkBox.ondragstart = () => { return false; };
    newLinkBox.style.setProperty("--boxes-per-row", boxesPerRow);
    lastRowContainer.appendChild(newLinkBox);
}

function clearCategorySection(categorySection) {
    categorySection.innerHTML = "";
}

function clearAllCategorySections() {
    for (category in categorySections) {
        clearCategorySection(categorySections[category]);
    }
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

function fillInCategorySection(categorySection, boxesPerRow=4) {
    lastRow = categorySection.lastChild;
    lastRowIndex = categorySection.childNodes.length - 1;
    desiredColumns = lastRowIndex == -1 ? 0 : (lastRowIndex == 0 ? boxesPerRow - 1 : boxesPerRow);

    while (lastRow && desiredColumns - lastRow.childNodes.length > 0) {
        newLinkBox = document.createElement("a");
        newLinkBox.classList.add("link-box");
        newLinkBox.style.visibility = "hidden";

        lastRow.appendChild(newLinkBox);
    }
}

function addLinks(boxesPerRow) {
    clearAllCategorySections();
    resources.links.forEach((linkObj) => {
        linkObj.categories.forEach((category) => {
            addLink(linkObj, categorySections[category], boxesPerRow);
        })
    })
    

    for (let category in categorySections) {
        fillInCategorySection(categorySections[category], boxesPerRow);
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

var infoButtonSelected = undefined;
function expand(button) {
    infoPullout = document.getElementById("info-pullout");
    if (button === infoButtonSelected) {
        infoPullout.classList.remove("pulled-out");
        button.classList.remove("selected");
        infoButtonSelected = undefined;
    } else if (infoButtonSelected) {
        infoButtonSelected.classList.remove("selected");
        infoPullout.classList.remove("pulled-out");
        button.classList.add("selected");
        infoButtonSelected = undefined;
        setTimeout(function() { expand(button); }, 200);
    } else {
        infoButtonSelected = button;
        infoPullout.innerHTML = button.pageHTML;
        infoPullout.classList.add("pulled-out");
        button.classList.add("selected")

        if (button.infoId == "hotlines" || button.infoId == "clinics") {
            let categoryList = button.infoId == "hotlines" ? hotlineCategories : clinicCities;
            let categoryBar = document.getElementById("info-pullout-category-bar");
            let i = 0;
            for (let categoryID in categoryList) {
                let category = categoryList[categoryID];
                if (category == categoryList.all) { continue; }
                if (i++ > 0) {
                    let spacer = document.createElement("div");
                    spacer.classList.add("info-pullout-spacer");
                    spacer.style.display = "inline-block";
                    spacer.style.float = "none";
                    categoryBar.appendChild(spacer);
                }
                let newCategoryButton = document.createElement("div");
                newCategoryButton.classList.add("info-pullout-category-button");
                // newCategoryButton.style.paddingLeft = newCategoryButton.style.paddingRight = `${parseInt(newCategoryButton.style.paddingLeft) + 5}px`
                if (button.infoId == "hotlines") newCategoryButton.onclick = function() { selectHotlineCategory(this, category); };
                if (button.infoId == "clinics") newCategoryButton.onclick = function() { selectClinicCity(this, category); };
                
                newCategoryButton.innerHTML = category;
                categoryBar.appendChild(newCategoryButton);
            }
            if (button.infoId == "hotlines") {
                selectHotlineCategory();
            } else if (button.infoId == "clinics") {
                selectClinicCity();
            }
        }
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
            if ("id" in infoObj) {
                infoBox.infoId = infoObj.id;
            }
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

// name: "Daly City Youth Health Center",
// city: clinicCities.dalyCity,
// website: "www.dalycityyouth.org",
// number: "650-877-5700",
// address: "350 90th St. (3rd Floor)",
// hours: "M-F, 9-5:30 PM",

var selectedClinicCities = [];
function selectClinicCity(button=undefined, city=undefined) {
    let teenClinicsSection = document.getElementById("teen-clinics-section");
    if (!teenClinicsSection) { return }
    if (button && city) {
        if (button.classList.contains("selected")) {
            button.classList.remove("selected");
            const index = selectedClinicCities.indexOf(city);
            if (index > -1) { selectedClinicCities.splice(index, 1); }
        } else {
            button.classList.add("selected");
            selectedClinicCities.push(city)
        }
    }
    teenClinicsSection.innerHTML = "";
    clinicLoop: for (let clinicI in resources.healthClinics) {
        let clinic = resources.healthClinics[clinicI];
        if (selectedClinicCities.length > 0 && !selectedClinicCities.includes(clinic.city) && clinic.city != clinicCities.all) { continue clinicLoop; }

        let newClinicElement = document.createElement("div");
        newClinicElement.classList.add("clinic");

        let nameElement = document.createElement("div");
        nameElement.classList.add("clinic-name");
        nameElement.innerHTML = clinic.name;

        let cityElement = document.createElement("div");
        cityElement.classList.add("clinic-city");
        cityElement.innerHTML = clinic.city;

        let websiteElement = document.createElement("a");
        websiteElement.classList.add("clinic-website");
        websiteElement.innerHTML = clinic.website;
        websiteElement.href = `https://${clinic.website}`
        websiteElement.target = "_blank"

        let numberElement = document.createElement("div");
        numberElement.classList.add("clinic-number");
        numberElement.innerHTML = `CALL: ${clinic.number}`;

        let addressElement = document.createElement("div");
        addressElement.classList.add("clinic-address");
        addressElement.innerHTML = "hours" in clinic ? `${clinic.address} (${clinic.hours})` : clinic.address;
        
        newClinicElement.appendChild(nameElement);
        newClinicElement.appendChild(cityElement);
        newClinicElement.appendChild(websiteElement);
        newClinicElement.appendChild(numberElement);
        newClinicElement.appendChild(addressElement);
        teenClinicsSection.appendChild(newClinicElement);
    }
}

var selectedHotlineCategories = [];
function selectHotlineCategory(button=undefined, category=undefined) {
    let hotlinesNumbersSection = document.getElementById("hotlines-numbers-section");
    if (!hotlinesNumbersSection) { return }
    if (button && category) {
        if (button.classList.contains("selected")) {
            button.classList.remove("selected");
            const index = selectedHotlineCategories.indexOf(category);
            if (index > -1) { selectedHotlineCategories.splice(index, 1); }
        } else {
            button.classList.add("selected");
            selectedHotlineCategories.push(category)
        }
    }
    hotlinesNumbersSection.innerHTML = "";
    hotlineLoop: for (let hotlineI in resources.mentalHealthHotlines) {
        let hotline = resources.mentalHealthHotlines[hotlineI];
        let atLeastOneNumberValid = false;
        numberLoop: for (let numberI in hotline.numbers) {
            let numberObj = hotline.numbers[numberI];
            for (let categoryI in selectedHotlineCategories) {
                if (!numberObj.categories.includes(selectedHotlineCategories[categoryI])) {
                    continue numberLoop;
                }
            }
            atLeastOneNumberValid = true;
            break numberLoop;
         }
        if (!atLeastOneNumberValid) { continue hotlineLoop; }

        let newHotlineElement = document.createElement("div");
        newHotlineElement.classList.add("hotline");

        let labelElement = document.createElement("div");
        labelElement.classList.add("hotline-label");
        labelElement.innerHTML = hotline.label;

        let numbersElement = document.createElement("div");
        numbersElement.classList.add("hotline-numbers");
        numberLoop: for (let numberI in hotline.numbers) {
            let numberObj = hotline.numbers[numberI]
            for (let categoryI in selectedHotlineCategories) {
                if (!numberObj.categories.includes(selectedHotlineCategories[categoryI])) {
                    continue numberLoop;
                }
            }
            if (numberI > 0) { numbersElement.innerHTML += "<br>"; }
            if (numberObj.categories.includes(hotlineCategories.call) && numberObj.categories.includes(hotlineCategories.text)) {
                numbersElement.innerHTML += "CALL/TEXT: ";
            } else if (numberObj.categories.includes(hotlineCategories.call)) {
                numbersElement.innerHTML += "CALL: ";
            } else if (numberObj.categories.includes(hotlineCategories.text)) {
                numbersElement.innerHTML += "TEXT: ";
            }
            numbersElement.innerHTML += numberObj.number;
            if ("time" in numberObj) {
                numbersElement.innerHTML += ` (${numberObj.time})`
            }
        }
        
        newHotlineElement.appendChild(labelElement);
        newHotlineElement.appendChild(numbersElement);
        hotlinesNumbersSection.appendChild(newHotlineElement);
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

var prevBoxesPerRow = false;
function onResize(event) {
    let windowRatio = window.innerWidth / window.innerHeight;
    let boxesPerRow = 5;
    if (windowRatio < 0.9) { boxesPerRow = 2 }
    if (windowRatio < 1.1) { boxesPerRow = 3 }
    else if (windowRatio < 1.4) { boxesPerRow = 4 }
    if (prevBoxesPerRow == false || prevBoxesPerRow != boxesPerRow) {
        prevBoxesPerRow = boxesPerRow;
        addLinks(boxesPerRow);
    }
    // (0, 0.8]: 0 + 2
    // (0.9, 1.6]: 3
    // (1.6, 2.4]: 4
}

addEventListener("resize", onResize);

function setup() {
    loadWeights();
    createLinkBoxes();
    onResize();
    addInfo();
    addCategoryButtons();
    changeCategory(categories.all);

    saveWeights();
}

setup();
