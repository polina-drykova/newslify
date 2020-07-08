import axios from "axios";

const state = {
  headlines: []
};

// get all headlines:
const getters = {
  allHeadlines: state => state.headlines
};

//api call to fetch data:
const actions = {
  async fetchHeadlines({ commit }) {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e"
    );
    commit("setHeadlines", response.data.articles);
    console.log(response.data.articles[0].urlToImage);
  }
};

const mutations = {
  setHeadlines: (state, headlines) => (state.headlines = headlines)
};

export default {
  state,
  getters,
  actions,
  mutations
};
