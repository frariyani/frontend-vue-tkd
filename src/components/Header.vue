<template>
    <header>
        <div class="title">
          <p>Griya Media Nusantara</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">
                Profil
              </a>
            </li>
          </ul>
        </nav>
    </header>


</template>
<script>

</script>

<style scoped lang="scss">
header{
  background-color: #FEB856;
  box-shadow:0 5px 8px rgb(214, 214, 214);
  display: flex;
  padding: 20px;
  align-items: center;
}

.title{
  font-size: 24px;
}

nav{
  margin-left: auto;

  ul li a{
    list-style: none;
    text-decoration: none;
    color: #171C2D;
    font-size: 20px;
    margin: 6px;
  }

  ul li a:hover{
    color: honeydew;
  }

  .btn-tambah{
    background-color: rgb(252, 122, 41);
    padding: 8px;
    color: rgb(238, 238, 238);
    cursor: pointer;
  }
}



</style>
