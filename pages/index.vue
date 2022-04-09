<template>
  <div class="py-4">
    <div class="container">
      <div class="title border-bottom d-flex align-items-center py-2">
        <h5>Task</h5>
        <div class="d-flex align-items-center ms-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            v-model="searchQuery"
          />
          <div class="d-flex align-items-center justify-content-end w-100">
            <span class="me-2">View As</span>
            <button
              class="btn btn-outline-secondary py-1 px-3"
              @click="isGrid = !isGrid"
            >
              {{ isGrid ? "Grid" : "List" }}
            </button>
          </div>
          <div class="d-flex align-items-center ms-auto">
            <select v-model="kategori">
              <option value="penting">Penting</option>
              <option value="biasa">biasa</option>
            </select>
          </div>
        </div>
      </div>
      <div class="list-task row">
        <CardItem
          v-for="(tasks, i) in resultQuery"
          :key="i"
          :task="tasks"
          :isGrid="isGrid"
        />
      </div>

      <div class="action py-2">
        <a
          href="#"
          class="add-button"
          v-if="!isCreating"
          @click="isCreating = !isCreating"
          >Add Task</a
        >
        <div class="add-card" v-else>
          <div class="card mb-2">
            <div class="card-body d-flex flex-column p-0">
              <input
                class="form-control mb-2"
                placeholder="Title"
                type="text"
                v-model="judul"
              />
              <textarea
                class="form-control small"
                placeholder="Description"
                rows="3"
                v-model="deksripsi"
              ></textarea>
            </div>
          </div>
          <div class="button-wrapper d-flex">
            <button class="btn btn-primary me-2" @click="tambah()">Save</button>
            <button
              class="btn btn-outline-secondary"
              @click="isCreating = !isCreating"
            >
              Cancel
            </button>
          </div>
        </div>
        <button @click="munculkan()">Munculkan semua Task</button>
      </div>
    </div>
  </div>
</template>
<script>
import CardItem from "~/component/Card/CardItem.vue";
export default {
  components: {
    CardItem,
  },
  data() {
    return {
      searchQuery: "",
      kategori: "",
      // Daftar task
      tasks: [
        {
          title: "Task 1",
          description: "ini deskripsi",
          isDone: false,
          category: "penting",
        },
        {
          title: "Task 2",
          description: "ini deskripsi 2",
          isDone: false,
          category: "penting",
        },
        {
          title: "Task 3",
          description: "ini deskripsi 3",
          isDone: false,
          category: "biasa",
        },
      ],
      isGrid: false,
      isCreating: false,
      judul: "",
      deksripsi: "",
    };
  },
  methods: {
    tambah() {
      this.tasks.push({
        title: this.judul,
        description: this.deksripsi,
        isDone: false,
      });
    },
    pilih(e) {
      let selected = e.target.value;
      return this.tasks.filter((item) => {
        return item.category == selected;
      });
    },
    munculkan(){
      this.tasks.forEach(element => {
        element.isDone = !element.isDone;
      });
    }
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.tasks.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split("")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else if (this.kategori) {
        return this.tasks.filter((item) => {
          return this.kategori == item.category;
        });
      } else {
        console.log(this.tasks);
        return this.tasks;
      }
    },
  },
};
</script>
<style></style>
