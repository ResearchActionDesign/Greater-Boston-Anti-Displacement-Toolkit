import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './i18n';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overviewLogo: require('./assets/Overview.png'),
    overviewToolkit: [{
      name: "Toolkit Overview",
      question: "How to use the Toolkit to Fight Displacement in Greater Boston?",
      img: require("./assets/2.jpg"),
      color: "#993300",
      link: 'ToolkitOverview',
      edit: "https://www.google.com/",
      print: "https://www.google.com/",
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

    translateTo: i18n.t('translateTo'),
    edit: i18n.t('edit'),
    print: i18n.t('print'),
  },
  mutations: {

  },
  actions: {

  }
})