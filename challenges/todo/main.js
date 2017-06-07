var setDate = new Date(),
    locale = "es-ES",
    dateOptions = { weekday: 'long', month: 'long', day: 'numeric' }
    readableDate = setDate.toLocaleDateString(locale, dateOptions);

var todayDate = readableDate.charAt(0).toUpperCase() + readableDate.slice(1);

new Vue({
  el: '#app',
  data: {
    todoTitle: 'Mi lista de tareas',
    todoDate: todayDate,
    editTitle: false,
    taskItem: '',
    taskList: ['Hacer la compra','Pasear al perro', 'Llevar el coche al taller', 'Comprarme una camiseta nueva'],
  },

  methods: {
    addTask: function() {
      if(this.taskItem === '') {
        alert('Debes escribir una tarea y seleccionar una prioridad');
      } else {
        this.taskList.push(this.taskItem);
        this.taskItem = '';
      }
    },
    setTitle: function(event) {
      this.todoTitle = event.target.value;
      this.editTitle = false;
    },
    removeTask: function (index) {
      this.taskList.splice(index, 1)
    },
    addTaskFocus: function() {
      this.$refs.taskInput.focus();
    }
  },
  computed: {
    taskListEmpty: function() {
      this.taskList.length === 0;
    }
  }
})
