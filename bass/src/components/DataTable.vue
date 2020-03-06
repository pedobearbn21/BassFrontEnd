<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      :loading="loading"
      loading-text="กำลังโหลดข้อมูล กรุณารอสักครู่..."
      class="elevation-1 text-center justify-center"
    >
      <!-- @todo: move line 15 to computed -->
      <template v-slot:item.index="{ item }" class="text-primary">
        {{ item.index }}
      </template>
      <template v-slot:item.status="{ item }" class="py-2">
        <div v-if="item.status === 1">UnPurchase</div>
        <div v-else>Purchased</div>
      </template>
      <template v-slot:item.manager="{ item }">
        <v-btn
          @click="editItem(item)"
          color="warning"
          small
          class="mr-2"
        >
          <v-icon class="default-font-size">
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn
          v-if="item.id!=userID"
          @click="setDeleteID(item.id)"
          color="danger"
          small
        >
          <v-icon class="default-font-size text-white">
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <v-dialog
      v-model="dialog"
      @click:outside="dialog = false"
      max-width="350"
    >
      <v-card>
        <v-card-title
          class="headline"
        >
          คุณต้องการจะลบหรือไม่ ?
        </v-card-title>

        <v-card-text>
          คุณกำลังจะยืนยันการลบข้อมูลรายการนี้ ถ้าหากต้องการลบข้อมูลกรุณากดปุ่มยืนยัน
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1" />
          <v-btn
            @click="dialog = false"
          >
            ไม่ใช่
          </v-btn>

          <v-btn
            @click="deleteItem()"
            :loading="loading"
            color="error"
          >
            ใช่
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>


export default {
  props: {
    userID: {
      type: Number,
      default: null
    },
    headers: {
      type: Array,
      default: null
    },
    data: {
      type: Array,
      default: null
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    loading: {
      type: Boolean,
      default: true
    },
    total: {
      type: Number,
      default: 0
    },
    rowPerPage: {
      type: Array,
      default () {
        return [5, 20, 30, 50]
      }
    },
    path: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    dialog: false,
    deleteID: 0,
    footerOption: {
      itemsPerPageOptions: [5, 10, 30, 50],
      itemsPerPageText: 'จำนวนแถวต่อหน้า'
    },
    disabled: false,
    successMessage: null,
    watchImage: false,
    env: process.env.SERVICE_URL,
    imageItems: []
  }),
  computed: {
    optionsObj: {
      get () { return this.options },
      set (value) {
        this.$emit('update:options', value)
      }
    }
  },
  watch: {
    loading (value) {
      if (!value) {
        this.disabled = false
      }
    }
  },
  methods: {
    updatestatus (item, e) {
      this.$emit('statustestimonial', item, e)
    },
    editItem (item) {
      this.$emit('edit', item)
    },
    editStatus (item, e) {
      this.$emit('status', item, e)
    },
    setDeleteID (id) {
      this.dialog = true
      this.deleteID = id
    },
    deleteItem () {
      this.$axios.delete(`${this.path.delete}/${this.deleteID}`)
        .then(() => {
          this.$emit('delete')
          this.successMessage = 'ลบข้อมูลสำเร็จ'
          setTimeout(() => {
            this.successMessage = null
          }, 2000)
        })
      this.dialog = false
    },
    onWatchImage (imgSrc) {
      this.watchImage = true
      this.imageItems[0] = { src: imgSrc }
    },
    closeImage () {
      this.watchImage = false
    }
  }
}
</script>
