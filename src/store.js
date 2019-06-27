import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overviewLogo: require('./assets/tree.jpg'),
    overviewToolkit:[
    {
      name: "Toolkit Overview",
        question: "How to use the Toolkit to Fight Displacement in Greater Boston?",
        img: require("./assets/2.jpg"),
        color: "#993300"
    }],
    toolkits: [
      {
        name: "Mapping power and money",
        question: "Who has the power and money to make the changes we need in our community?",
        img: require("./assets/2.jpg"),
        num: "1",
        color: "#CA1452"
      },
      {
        name: "Finding data about your community",
        question: "Missing tagline Missing tagline Missing tagline Missing tagline Missing tagline?",
        img: require("./assets/2.jpg"),
        num: "2",
        color: "#6B00D6"
      },
      {
        name: "Using data & storytelling to make arguments",
        question: "How can we use data from Chelsea and Everett to strengthen our voice?",
        img: require("./assets/2.jpg"),
        num: "3",
        color: "#0000FF"
      },
      {
        name: "Identifying & evaluating policies",
        question: "How do we protect where we live?",
        img: require("./assets/2.jpg"),
        num: "4",
        color: "#006100"
      },
      {
        name: "Identifying community strategies & tactics",
        question: "How can we prepare to act effectively?",
        img: require("./assets/2.jpg"),
        num: "5",
        color: "#A80054"
      },
      {
        name: "Sharing our stories",
        question: "What is displacement and how is it impacting Greater Boston?",
        img: require("./assets/2.jpg"),
        num: "6",
        color: "#0052A3"
      },
    ],
    // toolkits: [{
    //   "Toolkit Overview": {
    //     "Introduction": [
    //       "Purpose, Values and Goals",
    //       "How to use the Toolkit to Fight Displacement in Greater Boston",
    //       {
    //         "Who was Involved in Creating this Anti-Displacement Toolkit": [
    //           "Community Partner Organizations",
    //           "Coordinating Organizations"
    //         ]
    //       }
    //     ],
    //     "Purpose & Outcomes": {
    //       "Purpose": "We've decided to build a multi-media organizing toolkit -- a collection of activities, how-to guides, facilitation plans, and resources -- that both organizers and residents can use to fight displacement in their communities. Our communities (Chelsea and Everett, MA) are facing a lot of pressure from developers, which has resulted in land being lost, housing prices and rent increasing, forcing residents and small businesses to be pushed out, or displaced.  Displacement has many negative effects on individuals, families and communities.  See the Resources Section for a short video (Pushed Out by the Urban Displacement Project) on some of these, including impacts on health, educational outcomes, and community power.  We wanted to create a guide for community members to work together to protect & preserve their communities. Our goal is for you, the user, to build power through collective analysis (from your own knowledge), create shared goals and actions, and develop your own guiding principles of equitable development.",
    //       "Outcomes": {
    //         intro: "Value and goals driving anti-displacement organizing efforts, campaigns, etc.",
    //         List: [
    //           "Think + Do + Cultivating Collective Power, Using Knowledge in the Room Solidarity",
    //           "Hyper-Accessible, Multi-Generational, Multi-Lingual",
    //           "Hyper-Local - Rooted Here (Chelsea, Everett, Revere, Boston) and Shared + Generalizable"
    //         ]

    //       }
    //     },
    //     "How to use the Toolkit to Fight Displacement in Greater Boston": [
    //       "Ex. Describe how imagine folx using the toolkit in Chelsea & Everett, Greater Boston, beyond. How see it being useful for your communities? Using stories & experience to create shared goals and actions.",

    //       "Ex. Who is the toolkit for? </br> This toolkit can be used by anybody who wants to work with others to fight against displacement in their community, no matter their organizing experience.  With easy to read, translatable and accessible facilitation guides - whether you are a seasoned organizer, a service provider, a tenant, a lifelong resident, or newly arrived - this toolkit is for you!",

    //       "Ex.  Vision, what would success look like in terms of how it’s used, who uses it, how you, others build on it. What will we have, know by using, implementing, facilitating these activities in our communities?",

    //       "What your community wants and needs has to come from your community - and we hope this toolkit will help you get there!  Develop guiding principles of equitable development: know that there are multiple actions that can and should be taken, and that there is no one-size-fits-all solution. Protection of residents, production of affordable housing, and preservation of existing affordable housing stock are all key pieces of preventing displacement."
    //     ],
    //     "Who was Involved in Creating this Anti-Displacement Toolkit" : {
    //       intro: "This toolkit was made possible by the contributions of many organizations and community members. We thank all for sharing their time, expertise, and commitment to the development of this toolkit for and by the community.",
    //       "Community Partner Organizations": {
    //         "Everett Community Health Partnership" : {
    //           logo: "",
    //           info: "The Everett Community Health Partnership (ECHP) is a multisector community coalition facilitated by the Cambridge Health Alliance Department of Community Health Improvement.  ECHP seeks to improve the health and quality of life of the people of Everett by creating opportunities to strategically address challenges facing the community and ensuring that critical data regarding community health and wellbeing is made widely available. ECHP is particularly interested in raising awareness about the impact of development on neighborhood well-being. ECHP is a community research partner on the Healthy Neighborhood Study, a participatory action research study led by Mariana Arcaya and CoLab. </br> Kathleen O’Brien, who else like to list here?"
    //         },
    //         "Greenroots" : {
    //           logo: "",
    //           info: "Greenroots Chelsea, formerly affiliated with the Chelsea Collaborative, is a community-based organization working to achieve environmental justice and climate resiliency throughout the city. Greenroots Chelsea is a community research partner on the Healthy Neighborhood Study, a participatory action research study led by Mariana Arcaya and CoLab. </br> Maria Belen Power, Indira Garmendia Alfaro, who else like to list here??"
    //         }
    //       }
    //     }


    //   }
    // }]
  },
  mutations: {

  },
  actions: {

  }
})