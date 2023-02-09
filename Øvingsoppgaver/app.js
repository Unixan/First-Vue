const app = Vue.createApp({
  // data, funtions
  // template: '<h2>I am the template</h2>'
  data() {
    return {
      url: "http://youtube.com",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book){
      book.isFav = !book.isFav
    }
    // ,
    // handleEvent(x, data) {
    //   console.log(x, x.type);
    //   if (data) {
    //     console.log(data);
    //   }
    // },
    // handleMousemove(e) {
    //   this.x = e.offsetX
    //   this.y = e.offsetY
    // },
    // changeTitle(title) {
    //   // this.title = 'words of radiance'
    //   this.title = title;
    // },
  },
  computed:{
    filteredBooks(){
      return this.books.filter((book) => book.isFav)
    }
  }
});

app.mount("#app");