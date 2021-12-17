<template>
  <body>
    <div class="container">
      <div class="sub-header">
        <h2>Daftar Artikel</h2>
        <button @click="value = !value">
          Tambah
        </button>
      </div>
      <div class="contents">
        <div v-if="value">
          <form method="POST" enctype="multipart/form-data">
            <div class="form-wrapper">
              <input
                placeholder="Judul"
                v-model="form.title"
              >
            </div>
            <div class="form-wrapper">
              <textarea
                placeholder="Deskripsi"
                v-model="form.description"
              ></textarea>
            </div>
          </form>
          <div class="submit-wrapper" @click="save()">
            <button>
              Simpan
            </button>
          </div>
        </div>
        <div
          v-for="article in articles"
          :key="article.id"
        >
          <article>
            <h4>{{article.title}}</h4>
            <p>{{article.description}}</p>
            <button @click="deleteArticle(article.id)">
              Hapus
            </button>
          </article>
        </div>
      </div>
      <div class="profile">
        <aside>
          <img src="../assets/foto_diri.jpg">
          <h3>Profil Pembuat</h3>
          <p>
            Nama: Ariyani
          </p>
          <p>
            Jurusan: Informatika
          </p>
          <p>
            Universitas: Atma Jaya Yogyakarta
          </p>
        </aside>
      </div>
    </div>

  </body>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      article: new FormData,
      value: false,
      message: '',
      articles:[],
      load: false,
      form:{
        title: null,
        description: null
      }
    }
  },
  methods:{
    readData(){
      var url = this.$api + '/article/display/'
      this.$http.get(url, {}).then(response => {
        this.articles = response.data.data
      })
    },
    save(){
      this.article.append('title', this.form.title)
      this.article.append('description', this.form.description)

      var url = this.$api+'/article/create'
      this.load = true
      this.$http.post(url, this.article, {
      }).then(
        this.readData()
      )
    },
    deleteArticle(id){
      var url = this.$api + '/article/delete/'+id
      this.load = true
      this.$http.get(url,{
      }).then(
        this.readData()
      )
    }
  },
  mounted(){
    this.readData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html, body{
  height: 100vh;
  padding: 2rem;
}

.container{
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3rem 3fr;
  background-color: papayawhip;
  gap: 3px;
  padding: 16px;
  .sub-header{
    align-items: center;
    grid-column-start: 1;
    grid-column-end: 4;
    display: flex;
    button{
      background-color: rgb(252, 122, 41);
    }
    h2{
      margin-inline: 1rem;
    }
  }
}
button{
  padding: 8px;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.contents{
  grid-column-start: 1;
  grid-column-end: span 2;
  padding: 16px;
  border-radius: 8px;
  background-color: rgb(250, 209, 142);
  box-shadow:-5px 5px 5px rgb(184, 184, 184);
  margin-inline: 16px;
}
article{
  background-color: rgb(255, 234, 117);
  padding: 8px;
  border-radius: 8px;
  text-align: justify;
  margin-top: 8px;
  button{
    margin-top: 1rem;
    background-color: red;
  }

}
.profile{
  background-color: rgb(250, 209, 142);
  box-shadow:-5px 5px 5px rgb(184, 184, 184);
  border-radius: 8px;
  padding: 16px;
  aside{
    padding: 8px;
    img{
      margin: 5px;
      width: 30%;
      border: rgb(255, 229, 157) 1px solid;
      border-radius: 8px;
    }
  }
}
form{
  padding: 8px;
  border-radius: 8px;
  .form-wrapper{
    input, textarea{
      width: 75%;
      margin: 5px;
      border-color: orange 3px solid;
    }
  }
}
.submit-wrapper{
  button{
    width: 75%;
    background-color: rgb(252, 122, 41);
    border: none;
    padding: 3px;
    color: white;
  }
}
</style>
