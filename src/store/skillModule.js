export default {
  state: {
    skills: [
      {skill: "Vue.js"},
      {skill: "Frontend developer"}
    ]
  },

  getters: {
    countSkills: state => {
      return state.skills.length
    }
  },

  mutations: {
    ADD_SKILL: (state, skill) => {
      state.skills.push(skill)
    },
    REMOVE_SKILL: (state, index) => {
      state.skills.splice(index, 1)
    },
    REMOVE_ALL: (state) => {
      state.skills = []
    }
  },

  actions: {
    removeSkill: (context, index) => {
      context.commit("REMOVE_SKILL", index)
    },
    removeAll({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  }
}
