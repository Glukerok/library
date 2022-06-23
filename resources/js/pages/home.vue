<template>
    <div>
        <div v-if="loading">
            Загрузка
        </div>
        <div v-else class="container">
            <div class="row">
                <div class="col-3" v-for="book in books">
                    <img :src="'/img/books/' + book.photo">
                    <router-link :to="'/books/' + book.id">{{book.title}}</router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import _api from '../system/dataCore/_api';

export default {
    name: "home",
    data() {
        return {
            loading: false,
            books: [],
        }
    },
    created() {
        this.getBooksApi()
    },
    methods: {
        //Api
        async getBooksApi() {
            this.loading = true;
            await _api.getBooks({
            })
                .then((response) => {
                    this.loading = false;
                    this.books = response.data.books;
                }).catch((error) => {
                    this.loading = false;
                })
        }
    }
}
</script>

<style>
img {
    width: 100%;
}
a {
    font-size: 20px;
}
</style>
