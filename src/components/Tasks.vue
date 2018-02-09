<template>
    <v-layout row wrap>
        <v-flex xs12 md4 v-for="task in tasks">
            <v-card dark hover :color="corTask(task.status)">
                <v-card-title>
                    <span class="headline">{{ task.title }}</span>
                    <v-checkbox color="white" :input-value="task.status" @click="alternaStatus(task)"></v-checkbox>
                </v-card-title>
                <v-card-text>
                    <v-layout>
                        <v-flex>
                            <v-text-field solo>
                                {{task.description}}
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                tasks: []
            };
        },
        methods: {
            obterDados() {
                axios
                    .get("http://api-nodejs-mlab.herokuapp.com/new")
                    .then(res => {
                        this.tasks = res.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            corTask(status) {
                return status ? "green" : "red";
            },
            alternaStatus(task) {
                axios
                    .put("http://api-nodejs-mlab.herokuapp.com/new" + task._id, {
                        title: task.title,
                        description: task.description,
                        status: !task.status
                    })
                    .then(res => {
                        this.obterDados();
                    });
            },
            alternaDescAndTitle(task) {
                axios
                    .put("http://api-nodejs-mlab.herokuapp.com/new" + task._id, {
                        title: task.title,
                        description: task.description,
                        status: task.status
                    })
                    .then(res => {
                        this.obterDados();
                    });
            }
        },
        mounted() {
            this.obterDados();
        }
    };
</script>

<style>
</style>