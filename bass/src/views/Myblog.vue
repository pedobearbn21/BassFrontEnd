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
            <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            >
                <template  v-slot:button>
                    <button>Button</button>
                </template>
            </v-data-table>
        </v-card>
    </div>
  
</template>

<script>
import axios from 'axios';
export default {
    name: "Myblog",
    data() {
        return {
            search: '',
            headers: [
            { text: 'Index', value: 'id' },
            { text: 'Title Post', value: 'title' },
            { text: 'Description', value: 'description' },
            { text: 'Status', value: 'status' },
            { text: 'Button', value: 'button'}
            ],
            desserts: [
            ],
      }
    },
    mounted() {
        this.getPost()
    },
    methods: {
        getPost(){
            axios.get('http://localhost:8000/api/Postlist').then((response) => {
              console.log(response)
              this.desserts = response.data
            })
        }
    },
}
</script>