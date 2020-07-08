const state = {
  headlines: [
    {
      title: "Headline1 veryyy long headline",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat blanditiis porro incidunt nostrum."
    },
    {
      title: "Headline2",
      description:
        "Impedit molestiae velit, alias facere minus optio corporis, sit repudiandae reiciendis at nihil."
    },
    {
      title: "Headline3",
      description:
        "Exercitationem ducimus temporibus repellendus accusamus dignissimos, est rerum iste, saepe, quis corporis odio."
    },
    {
      title: "Headline4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat blanditiis porro incidunt nostrum."
    },
    {
      title: "Headline5",
      description:
        "Impedit molestiae velit, alias facere minus optio corporis, sit repudiandae reiciendis at nihil."
    },
    {
      title: "Headline6",
      description:
        "Exercitationem ducimus temporibus repellendus accusamus dignissimos, est rerum iste, saepe, quis corporis odio."
    }
  ]
};

const getters = {
  allHeadlines: state => state.headlines
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
