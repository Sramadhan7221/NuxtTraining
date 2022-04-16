<template>
  <div class="py-4">
    <div class="container" v-if="!loading">
      <div class="title border-bottom d-flex align-items-center py-2">
        <h5>Task</h5>
        <div class="d-flex align-items-center ms-auto">
          <button
            class="btn btn-outline-primary py-1 px-3 me-4"
            @click="shuffle"
          >
            Shuffle!
          </button>
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            v-model="searchQuery"
          />
          <div class="d-flex align-items-center justify-content-end mx-2">
            <span class="col-3 me-2">Order On</span>
            <select v-model="sortBy">
              <option value="1">Ascending</option>
              <option value="0">Descending</option>
            </select>
          </div>
          <div class="d-flex align-items-center justify-content-end mx-1">
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
              <option value="">All</option>
              <option value="penting">Penting</option>
              <option value="biasa">biasa</option>
            </select>
          </div>
        </div>
      </div>
      <transition-group name="tasks" tag="div" class="list-task row">
        <CardItem
          v-for="tasks in resultQuery"
          :key="tasks.id"
          :task="tasks"
          :isGrid="isGrid"
        />
      </transition-group>
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
              <form v-on:submit.prevent="tambah">
                <input
                  class="form-control mb-2"
                  placeholder="Title"
                  type="text"
                  v-model="form.judul"
                />
                <div class="d-flex align-items-center ms-auto">
                  <select v-model="form.kategori">
                    <option value="penting">Penting</option>
                    <option value="biasa">biasa</option>
                  </select>
                </div>
                <textarea
                  class="form-control small"
                  placeholder="Description"
                  rows="3"
                  v-model="form.deksripsi"
                ></textarea>
                <div class="button-wrapper d-flex">
                  <button class="btn btn-primary me-2" type="submit">
                    Save
                  </button>
                  <button
                    class="btn btn-outline-secondary"
                    @click="isCreating = !isCreating"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <button @click="munculkan()">Munculkan semua Task</button>
      </div>
    </div>
    <div class="card" v-else>
      <div class="card-body col-12 d-flex justify-content-center p-0">
        <div class="loadingio-spinner-ball-clerhpg27dp">
          <div class="ldio-v6txkpbzph">
            <div></div>
          </div>
        </div>
      </div>
      <h5 class="text-center">Please Wait...</h5>
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
      sortBy: "",

      // Daftar task
      tasks: [],
      isGrid: false,
      isCreating: false,
      judul: "",
      deksripsi: "",
      loading: true,
      // form data
      form: {
        judul: "",
        kategori: "",
        deksripsi: "",
      },
    };
  },
  created() {
    setTimeout(() => {
      this.tasks = [
        {
          title: "Adalah Task 1",
          description: "ini deskripsi",
          isDone: false,
          category: "penting",
          display: true,
          id: 1,
        },
        {
          title: "Bukan Task 2",
          description: "ini deskripsi 2",
          isDone: false,
          category: "penting",
          display: true,
          id: 2,
        },
        {
          title: "Cuma Task 3",
          description: "ini deskripsi 3",
          isDone: false,
          category: "biasa",
          display: true,
          id: 3,
        },
      ];
      this.loading = false;
    }, 3000);
  },
  methods: {
    tambah() {
      let index = this.tasks.length;
      this.tasks.push({
        title: this.form.judul,
        category: this.form.kategori,
        description: this.form.deksripsi,
        isDone: false,
        display: true,
        id: index + 1, //masih bisa menimbulkan issue lanjutan jika id tidak berurutan
      });
    },
    munculkan() {
      this.tasks.forEach((element) => {
        element.display = !element.display;
      });
    },
    shuffle() {
      this.tasks = _.shuffle(this.tasks);
      console.log(this.tasks);
    },
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
      } else if (this.sortBy) {
        if (this.sortBy == 1) {
          return (this.tasks = _.orderBy(this.tasks, ["title"], ["asc"]));
        } else {
          return (this.tasks = _.orderBy(this.tasks, ["title"], ["desc"]));
        }
      } else {
        console.log(this.tasks);
        return this.tasks;
      }
    },
  },
};
</script>
<style>
.tasks-move {
  transition: 0.5s;
}
@keyframes ldio-v6txkpbzph {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
  }
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 120px);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
  }
  100% {
    transform: translate(0, 0);
  }
}

.ldio-v6txkpbzph div {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #be5960;
  left: 80px;
  top: 20px;
  animation: ldio-v6txkpbzph 0.9900990099009901s linear infinite;
}
.loadingio-spinner-ball-clerhpg27dp {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-v6txkpbzph {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-v6txkpbzph div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
</style>
