const app = Vue.createApp({
  // data, funtions
  // template: '<h2>I am the template</h2>'
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(x, data){
        console.log(x, x.type)
        if(data){
            console.log(data)
        }
    }
    // changeTitle(title) {
    //   // this.title = 'words of radiance'
    //   this.title = title;
    // },
  },
});

app.mount("#app");
