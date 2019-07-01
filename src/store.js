import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './i18n';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overviewLogo: require('./assets/tree.jpg'),
    overviewToolkit: [{
      name: "Toolkit Overview",
      question: "How to use the Toolkit to Fight Displacement in Greater Boston?",
      img: require("./assets/2.jpg"),
      color: "#993300",
      link: 'ToolkitOverview',
      resources: [
        {
          name: 'Tools for Campaign Planning',
          link: 'https://organizingforpower.org/tools/',
          text: 'Organizing for Power, Organizing for Change,'
        },
        {
          name: 'Power Analysis* - Trainer - Training',
          link: 'http://www.ctbh.org/documents/Power_Analysis_Trainer_Training.pdf',
          text: ' Northeast Action Training,'
        },
        {
          name: 'Power Mapping, Charting Strategic Relationships',
          link: 'http://greenlining.org/wp-content/uploads/2013/02/PowerMapping.pdf',
          text: 'DFA Training Academy,'
        },
        {
          name: 'Power Mapping Tool',
          link: 'https://beautifulrising.org/tool/power-mapping',
          text: 'Beautiful Rising,'
        },
        {
          name: 'SCOPELA Power Mapping Slides',
          link: 'https://network.progressivetech.org/system/files/SCOPEpresentationonPA.pdf',
          text: 'Strategic Concepts in Organizing & Policy Education, SCOPELA Training,'
        },
      ]
    }],
    // toolkits: i18n.t('toolkits'),
    // toolkits: [{
    //     name: "Mapping power and money",
    //     question: "Who has the power and money to make the changes we need in our community?",
    //     img: require("./assets/2.jpg"),
    //     num: "1",
    //     color: "#CA1452",
    //     link: 'Mapping',
    //     resources: [
    //       {
    //         name: 'Tools for Campaign Planning',
    //         link: 'https://organizingforpower.org/tools/',
    //         text: 'Organizing for Power, Organizing for Change,'
    //       },
    //       {
    //         name: 'Power Analysis* - Trainer - Training',
    //         link: 'http://www.ctbh.org/documents/Power_Analysis_Trainer_Training.pdf',
    //         text: ' Northeast Action Training,'
    //       },
    //       {
    //         name: 'Power Mapping, Charting Strategic Relationships',
    //         link: 'http://greenlining.org/wp-content/uploads/2013/02/PowerMapping.pdf',
    //         text: 'DFA Training Academy,'
    //       },
    //       {
    //         name: 'Power Mapping Tool',
    //         link: 'https://beautifulrising.org/tool/power-mapping',
    //         text: 'Beautiful Rising,'
    //       },
    //       {
    //         name: 'SCOPELA Power Mapping Slides',
    //         link: 'https://network.progressivetech.org/system/files/SCOPEpresentationonPA.pdf',
    //         text: 'Strategic Concepts in Organizing & Policy Education, SCOPELA Training,'
    //       },
    //     ]
    //   },
    //   {
    //     name: "Finding data about your community",
    //     question: "Missing tagline Missing tagline Missing tagline Missing tagline Missing tagline?",
    //     img: require("./assets/2.jpg"),
    //     num: "2",
    //     color: "#6B00D6",
    //     link: 'FindData',
    //     resources: [
    //       {
    //         name: 'Tools for Campaign Planning',
    //         link: 'https://organizingforpower.org/tools/',
    //         text: 'Organizing for Power, Organizing for Change,'
    //       },
    //       {
    //         name: 'Power Analysis* - Trainer - Training',
    //         link: 'http://www.ctbh.org/documents/Power_Analysis_Trainer_Training.pdf',
    //         text: 'Northeast Action Training,'
    //       },
    //       {
    //         name: 'Power Mapping, Charting Strategic Relationships',
    //         link: 'http://greenlining.org/wp-content/uploads/2013/02/PowerMapping.pdf',
    //         text: 'DFA Training Academy,'
    //       },
    //       {
    //         name: 'Power Mapping Tool',
    //         link: 'https://beautifulrising.org/tool/power-mapping',
    //         text: 'Beautiful Rising,'
    //       },
    //       {
    //         name: 'SCOPELA Power Mapping Slides',
    //         link: 'https://network.progressivetech.org/system/files/SCOPEpresentationonPA.pdf',
    //         text: 'Strategic Concepts in Organizing & Policy Education, SCOPELA Training,'
    //       },
    //     ]
    //   },
    //   {
    //     name: "Using data & storytelling to make arguments",
    //     question: "How can we use data from Chelsea and Everett to strengthen our voice?",
    //     img: require("./assets/2.jpg"),
    //     num: "3",
    //     color: "#0000FF",
    //     link: 'UseData',
    //     resources: [
    //       {
    //         name: 'Tools for Campaign Planning',
    //         link: 'https://organizingforpower.org/tools/',
    //         text: 'Organizing for Power, Organizing for Change,'
    //       },
    //       {
    //         name: 'Power Analysis* - Trainer - Training',
    //         link: 'http://www.ctbh.org/documents/Power_Analysis_Trainer_Training.pdf',
    //         text: ' Northeast Action Training,'
    //       },
    //       {
    //         name: 'Power Mapping, Charting Strategic Relationships',
    //         link: 'http://greenlining.org/wp-content/uploads/2013/02/PowerMapping.pdf',
    //         text: 'DFA Training Academy,'
    //       },
    //       {
    //         name: 'Power Mapping Tool',
    //         link: 'https://beautifulrising.org/tool/power-mapping',
    //         text: 'Beautiful Rising,'
    //       },
    //       {
    //         name: 'SCOPELA Power Mapping Slides',
    //         link: 'https://network.progressivetech.org/system/files/SCOPEpresentationonPA.pdf',
    //         text: 'Strategic Concepts in Organizing & Policy Education, SCOPELA Training,'
    //       },
    //     ]
    //   },
    //   {
    //     name: "Identifying & evaluating policies",
    //     question: "How do we protect where we live?",
    //     img: require("./assets/2.jpg"),
    //     num: "4",
    //     color: "#006100",
    //     link: 'Policies',
    //     resources: [
    //       {
    //         name: 'Tools for Campaign Planning',
    //         link: 'https://organizingforpower.org/tools/',
    //         text: 'Organizing for Power, Organizing for Change,'
    //       },
    //       {
    //         name: 'Power Analysis* - Trainer - Training',
    //         link: 'http://www.ctbh.org/documents/Power_Analysis_Trainer_Training.pdf',
    //         text: ' Northeast Action Training,'
    //       },
    //       {
    //         name: 'Power Mapping, Charting Strategic Relationships',
    //         link: 'http://greenlining.org/wp-content/uploads/2013/02/PowerMapping.pdf',
    //         text: 'DFA Training Academy,'
    //       },
    //       {
    //         name: 'Power Mapping Tool',
    //         link: 'https://beautifulrising.org/tool/power-mapping',
    //         text: 'Beautiful Rising,'
    //       },
    //       {
    //         name: 'SCOPELA Power Mapping Slides',
    //         link: 'https://network.progressivetech.org/system/files/SCOPEpresentationonPA.pdf',
    //         text: 'Strategic Concepts in Organizing & Policy Education, SCOPELA Training,'
    //       },
    //     ]
    //   },
    //   {
    //     name: "Identifying community strategies & tactics",
    //     question: "How can we prepare to act effectively?",
    //     img: require("./assets/2.jpg"),
    //     num: "5",
    //     color: "#A80054",
    //     link: 'Strategies',
    //     resources: [
    //       {
    //         name: 'Tools for Campaign Planning',
    //         link: 'https://organizingforpower.org/tools/',
    //         text: 'Organizing for Power, Organizing for Change,'
    //       },
    //       {
    //         name: 'Power Analysis* - Trainer - Training',
    //         link: 'http://www.ctbh.org/documents/Power_Analysis_Trainer_Training.pdf',
    //         text: ' Northeast Action Training,'
    //       },
    //       {
    //         name: 'Power Mapping, Charting Strategic Relationships',
    //         link: 'http://greenlining.org/wp-content/uploads/2013/02/PowerMapping.pdf',
    //         text: 'DFA Training Academy,'
    //       },
    //       {
    //         name: 'Power Mapping Tool',
    //         link: 'https://beautifulrising.org/tool/power-mapping',
    //         text: 'Beautiful Rising,'
    //       },
    //       {
    //         name: 'SCOPELA Power Mapping Slides',
    //         link: 'https://network.progressivetech.org/system/files/SCOPEpresentationonPA.pdf',
    //         text: 'Strategic Concepts in Organizing & Policy Education, SCOPELA Training,'
    //       },
    //     ]
    //   },
    //   {
    //     name: "Sharing our stories",
    //     question: "What is displacement and how is it impacting Greater Boston?",
    //     img: require("./assets/2.jpg"),
    //     num: "6",
    //     color: "#0052A3",
    //     link: 'Stories',
    //     resources: [
    //       {
    //         name: 'Tools for Campaign Planning',
    //         link: 'https://organizingforpower.org/tools/',
    //         text: 'Organizing for Power, Organizing for Change,'
    //       },
    //       {
    //         name: 'Power Analysis* - Trainer - Training',
    //         link: 'http://www.ctbh.org/documents/Power_Analysis_Trainer_Training.pdf',
    //         text: ' Northeast Action Training,'
    //       },
    //       {
    //         name: 'Power Mapping, Charting Strategic Relationships',
    //         link: 'http://greenlining.org/wp-content/uploads/2013/02/PowerMapping.pdf',
    //         text: 'DFA Training Academy,'
    //       },
    //       {
    //         name: 'Power Mapping Tool',
    //         link: 'https://beautifulrising.org/tool/power-mapping',
    //         text: 'Beautiful Rising,'
    //       },
    //       {
    //         name: 'SCOPELA Power Mapping Slides',
    //         link: 'https://network.progressivetech.org/system/files/SCOPEpresentationonPA.pdf',
    //         text: 'Strategic Concepts in Organizing & Policy Education, SCOPELA Training,'
    //       },
    //     ]
    //   },
    // ],
  },
  mutations: {

  },
  actions: {

  }
})