<template>
    <header>  
        <nav class="bg-zinc-50 border-indigo-200 border-b w-full fixed z-50 dark:bg-zinc-900 dark:border-teal-800">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2 md:py-0.5">
                <span class="self-center text-xl whitespace-nowrap text-indigo-900 font-bold uppercase dark:text-indigo-50">gabriel dev</span>
                <button @click="toggleNavbar" type="button" class="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-indigo-900 rounded-lg md:hidden hover:bg-indigo-100 dark:text-indigo-50 dark:hover:bg-indigo-700" aria-controls="navbar-multi-level" :aria-expanded="isNavbarOpen.toString()">
                    <span class="sr-only">Menu</span><i class="fa-solid fa-bars"></i>
                </button>
                <div :class="[isNavbarOpen ? 'block' : 'hidden']" class="w-full block md:flex md:flex-wrap md:items-center md:justify-between md:w-auto md:relative md:mt-0">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 gap-y-1 border border-indigo-100 rounded-lg bg-indigo-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-zinc-50 dark:bg-indigo-800 md:dark:bg-zinc-900 dark:border-indigo-700">
                        <li>
                            <router-link to="/"class="block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-white dark:bg-indigo-600 md:dark:bg-transparent" aria-current="page">Inicio</router-link>
                        </li>
                        <li>
                            <router-link to="/" class="block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-white dark:bg-indigo-600 md:dark:bg-transparent" aria-current="page">Projetos</router-link>
                        </li>
                        <li>
                            <router-link to="/"class="block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-white dark:bg-indigo-600 md:dark:bg-transparent" aria-current="page">Contato</router-link>
                        </li>
                    </ul>
                    <button id="theme-toggle" type="button" class="text-indigo-700 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg text-sm p-2.5 my-2 ml-0 md:ml-10" @click="toggleDarkMode">
                        <i :class="[isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon']"></i>
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isNavbarOpen: false,
            isDarkMode: false,
        };
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            document.body.classList.toggle('dark', this.isDarkMode);
            localStorage.setItem('darkMode', this.isDarkMode ? 'dark' : 'light');
        },
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        }
    },
    created() {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'dark') {
            this.toggleDarkMode();
        }
    },
}
</script>