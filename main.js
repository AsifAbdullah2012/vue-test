// creating a vue instance

var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    seen: true,
    todolis: [
      [{ isok: true }, { task: "wake up in the morning " }],
      [{ isok: false }, { task: "eat some food" }],
      [{ isok: true }, { task: "pass another day doing nothing" }],
    ],
  },
});

app.product = "Socks are changed to Shoes";

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});

// here is the code for components
// components can access the instance created
// in app7, via props. "todo"

Vue.component("todo-item", {
  props: ["todo"],
  template:
    "<li>here id is {{todo.id}} and inside element is {{ todo.text }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" },
    ],
  },
});

// add to cart method

var app8 = new Vue({
  el: "#app-8",
  data: {
    message: "i am a butterfly",
    cart: 0,
    food: "",
    classobject: {
      east: true,
      west: false,
      north: false,
    },
    checked: true,
    picked: "",
  },
  methods: {
    addtocart: function () {
      this.cart = this.cart + 1;
    },
    readRefs: function () {
      console.log(this.$refs);
      this.food = this.$refs.input.value;
    },
  },
  computed: {
    reversemessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
});
