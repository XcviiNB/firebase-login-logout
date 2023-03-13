<template>
    <div class="container mt-5">
        <div class="col-md-5 mx-auto">
            <div class="card">
                <div class="card-header bg-primary text-center">
                    <h3>Create a new Account</h3>
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
                        <router-link to="/login">Already have an account?</router-link>
                    </div>
                    <div class="d-flex float-end">
                        <button class="btn btn-primary" @click="registerAccount">Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { auth } from '../firebase/index.js'
    import { createUserWithEmailAndPassword } from '@firebase/auth';

    const email = ref('')
    const password = ref('')
    const error = ref('')
    const errorMessage = ref('')
    const success = ref('')
    const successMessage = ref('')

    const registerAccount = () => {
        if (email.value != '' || password.value != '') {
            createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((cred) => {
                console.log('user created', cred.user)
                email.value = ''
                password.value = ''
                error.value = false
                success.value = true
                successMessage.value = 'Registered Successfully'
            })
            .catch((err) => {
                success.value = false
                error.value = true
                errorMessage.value = err.message
            })
        } else {
            error.value = true
            errorMessage.value = 'Please do not leave a field empty'
        }
    }
</script>