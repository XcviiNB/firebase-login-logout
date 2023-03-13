<template>
    <div class="container mt-5">
        <div class="col-md-5 mx-auto">
            <div class="card">
                <div class="card-header bg-primary text-center">
                    <h4>Login</h4>
                </div>

                <div class="card-body">
                    <div v-show="error" class="alert alert-danger">
                        {{ errorMessage }}
                    </div>

                    <div v-show="success" class="alert alert-success">
                        {{ successMessage }}
                    </div>

                    <div class="form-group mb-3">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" v-model="email">
                    </div>
                    <div class="form-group mb-3">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" v-model="password">
                    </div>
                    <div class="d-flex float-start">
                        <router-link to="/register">Don't have an account?</router-link>
                    </div>
                    <div class="d-flex float-end">
                        <router-link to="/" class="btn btn-primary" @click="login">Login</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { signInWithEmailAndPassword } from '@firebase/auth';
    import { ref } from 'vue'
    import { auth } from '../firebase/index.js'
    
    const email = ref('')
    const password = ref('')
    const error = ref('')
    const errorMessage = ref('')
    const success = ref('')
    const successMessage = ref('')

    const login = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            route.push('/')
        })
        .catch((err) => {
            error.value = true
            errorMessage.value = err.message
        })
    }
</script>