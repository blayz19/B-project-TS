import type { Profile } from "@/interfaces/profile";
import { defineStore } from "pinia";
import {ref} from 'vue';
import { API_ROUTES, http } from "@/api";
import axios from "axios";

export const useProfileStore = defineStore('profile', () =>{
    const profile = ref<Profile>();

    async function fetchProfile() {
        const {data} = await http.get<Profile>(API_ROUTES.profile)
        profile.value = data;
        profile.value.name="Олег";
    }

    return {profile, fetchProfile};
});