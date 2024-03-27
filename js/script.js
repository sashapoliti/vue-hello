const { createApp } = Vue

  createApp({
    data() {
      return {
        message : 'Happiny!',
        image : {
            name : 'Pokémon Happiny',
            media : 'img/Happiny.png'
        }
      }
    }
  }).mount('#app')