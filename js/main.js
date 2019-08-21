var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    additem: function(event) {
      //alert();
      if (this.newItem == '') return;
      var todo = {
        item: this.newItem,
        isdone: false
      };

      this.todos.push(todo)
      this.newItem = ''
    },
    deleatitem: function(index) {
      //alert(index);
      this.todos.splice(index,1)
    }
  }

})
