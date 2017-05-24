new Vue({
  el: '#app',
  data: {
    selectedPriority: '',
    nombrequesea: '',
    priorityFilter: 'all',
    priorities: [
      { text: 'Sin prioridad', value: 0 },
      { text: 'Baja', value: 1 },
      { text: 'Media', value: 2 },
      { text: 'Alta', value: 3 },
    ],
    taskItem: '',
    taskList: [
      { name: 'Hacer la compra', priority: 3, priorityName: 'Alta' },
      { name: 'Pasear al perro', priority: 2, priorityName: 'Media' },
      { name: 'Llevar el coche al taller', priority: 1, priorityName: 'Baja' },
      { name: 'Comprarme una camiseta nueva', priority: 0, priorityName: 'Sin prioridad' },
    ],
  },
  
  methods: {
    getPriorityNames: function(event) {
      var target = event.target;
      this.nombrequesea = target.options[target.selectedIndex].innerHTML;
      this.selectedPriority = target.value;
    },
    addItem: function() {
      if(this.taskItem === '' || this.selectedPriority === '') {
        alert('Debes escribir una tarea y seleccionar una prioridad');
      } else {
        this.taskList.push({
          name: this.taskItem,
          priority: this.selectedPriority,
          priorityName: this.nombrequesea,
        })
        this.taskItem = '';
      }
    },
  },

  computed: {
    badgePriority: function() {
      return this.filteredTasks.map(task => ({
        grey: task.priority == 0,
        blue: task.priority == 1,
        orange: task.priority == 2,
        red: task.priority == 3
      }));
    },
    filteredTasks: function() {
      return this.taskList.filter((task) => {
        if(this.priorityFilter !== 'all') {
          return task.priority === this.priorityFilter;
        } else {
          return task;
        }
      });
    }
  }
})
