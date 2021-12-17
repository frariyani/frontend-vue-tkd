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
              <input placeholder="Judul">
            </div>
            <div class="form-wrapper">
              <textarea
                placeholder="Deskripsi"
              ></textarea>
            </div>
            <div class="submit-wrapper">
              <input type="submit" value="Simpan">
            </div>
          </form>
        </div>
        <div
          v-for="article in articles"
          :key="article.id"
        >
          <article>
            <h4>{{article.title}}</h4>
            <p>{{article.desc}}</p>
            <button>
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
      value: false,
      articles:[
        {
          id: 1,
          title: 'Mengenal Web Standard',
          desc: 'Apa itu Web Standard? Web Standard adalah teknologi yang dibangun oleh W3C dan lainnya yang dikembangkan untuk menginterpretasikan konten web agar memiliki standar yang dapat dinikmati oleh semua kalangan dan dapat diakses di semua <em>device</em> (smartphone, tablet, desktop dan lain sebagainya).'
        },
        {
          id: 2,
          title: 'Mengenal Web Standard',
          desc: 'Apa itu Web Standard?'
        },
        {
          id: 3,
          title: 'Lorem Ipsum',
          desc: 'Lorem ipsum sit dolor amet'
        }
      ]
    }
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
    border: red 2px solid;
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
  border: 1px rgb(0, 58, 165) solid;
  padding: 8px;
  border-radius: 8px;
  .form-wrapper{
    input, textarea{
      width: 75%;
      margin: 5px;
      border-color: orange 3px solid;
    }
  }
  .submit-wrapper{
    input{
      width: 75%;
      background-color: rgb(252, 122, 41);
      border: none;
      padding: 3px;
      color: white;
    }
  }
}
</style>
