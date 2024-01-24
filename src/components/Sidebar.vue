<template>
    <div>
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
div{
  padding: 1vh 1vw;
}
nav{
  background-color: rgb(145, 47, 145);
  color: white;
  width: 20rem;
  height: 90vh;
  z-index: 1;
  border-radius: 20px;
  padding: 3rem;
}
</style>