const state = {
tasks: {
    'ID1':{
          name:"Go to shop",
          completed: false,
          dueDate: "12/05/2019",
          dueTime: "18:30"
    },
    'ID2':{
          name: "Get bananas",
          completed: false,
          dueDate: "14/05/2019",
          dueTime: "14:00"
    },
    'ID3':{
           name: "Get apples",
           completed: false,
           dueDate: "15/05/2019",
           dueTime: "16:00"
    },
}


    // tasks: [
    //     {
    //       id: 1,
    //       name: "Go to shop",
    //       completed: false,
    //       dueDate: "12/05/2019",
    //       dueTime: "18:30"
    //     },
    //     {
    //       id: 2,
    //       name: "Get bananas",
    //       completed: false,
    //       dueDate: "14/05/2019",
    //       dueTime: "14:00"
    //     },
    //     {
    //       id: 3,
    //       name: "Get apples",
    //       completed: false,
    //       dueDate: "15/05/2019",
    //       dueTime: "16:00"
    //     }
    //   ]
}

const mutations = {

}

const actions = {

}

const getters = {
tasks: (state) =>{
    return state.tasks
}
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}