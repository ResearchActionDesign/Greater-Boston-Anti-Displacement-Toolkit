import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overviewLogo: require('./assets/tree.jpg'),
    overviewToolkit: [{
      name: "Toolkit Overview",
      nameRoute: "Toolkit_Overview",
      question: "How to use the Toolkit to Fight Displacement in Greater Boston?",
      img: require("./assets/2.jpg"),
      color: "#993300",
      link: 'ToolkitOverview'
    }],
    toolkits: [{
        name: "Mapping power and money",
        nameRoute: "Mapping_power_and_money",
        question: "Who has the power and money to make the changes we need in our community?",
        img: require("./assets/2.jpg"),
        num: "1",
        color: "#CA1452",
        link: 'Mapping'
      },
      {
        name: "Finding data about your community",
        nameRoute: "Finding_data_about_your_community",
        question: "Missing tagline Missing tagline Missing tagline Missing tagline Missing tagline?",
        img: require("./assets/2.jpg"),
        num: "2",
        color: "#6B00D6",
        link: 'FindData'
      },
      {
        name: "Using data & storytelling to make arguments",
        nameRoute: "Using_data_&_storytelling_to_make_arguments",
        question: "How can we use data from Chelsea and Everett to strengthen our voice?",
        img: require("./assets/2.jpg"),
        num: "3",
        color: "#0000FF",
        link: 'UseData'
      },
      {
        name: "Identifying & evaluating policies",
        nameRoute: "Identifying_&_evaluating_policies",
        question: "How do we protect where we live?",
        img: require("./assets/2.jpg"),
        num: "4",
        color: "#006100",
        link: 'Policies'
      },
      {
        name: "Identifying community strategies & tactics",
        nameRoute: "Identifying_community_strategies_&_tactics",
        question: "How can we prepare to act effectively?",
        img: require("./assets/2.jpg"),
        num: "5",
        color: "#A80054",
        link: 'Strategies'
      },
      {
        name: "Sharing our stories",
        nameRoute: "Sharing_our_stories",
        question: "What is displacement and how is it impacting Greater Boston?",
        img: require("./assets/2.jpg"),
        num: "6",
        color: "#0052A3",
        link: 'Stories'
      },
    ],
  },
  mutations: {

  },
  actions: {

  }
})