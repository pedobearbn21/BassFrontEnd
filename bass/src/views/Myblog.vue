<template>
    <div>
        <v-card>
            <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            </v-card-title>
            <DataTable
            @edit='editItem'
            :headers="headers"
            :data="desserts"
            :search="search"
            :loading="loadingTable"
            >
            </DataTable>
        </v-card>
    </div>
  
</template>

<script>
import axios from 'axios';
import DataTable from '@/components/DataTable';
export default {
    components: {
        DataTable
    },
    name: "Myblog",
    data() {
        return {
            search: '',
            headers: [
            { text: 'Index', value: 'id' },
            { text: 'Title Post', value: 'title' },
            { text: 'Description', value: 'description' },
            { text: 'Status', value: 'status' },
            { text: 'Button', value: 'manager'}
            ],
            desserts: [
            ],
            loadingTable: false,
      }
    },
    mounted() {
        this.getPost()
    },
    methods: {
        editItem(event){
            console.log(event)
            axios({
                method: 'put',
                url: `http://localhost:8000/api/Postlist/${event.id}`,
                data: event
            }).then((res)=>{
                console.log('success=',res)
            })
        },
        getPost(){
            this.loadingTable = true
            axios.get('http://localhost:8000/api/Postlist').then((response) => {
              console.log(response)
              this.desserts = response.data
              this.loadingTable = false
            })
        }
    },
}
</script>