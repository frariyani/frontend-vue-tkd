<template>
    <header>
        <p>Griya Media Nusantara</p>
        <nav>
          <ul>
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">
                Tambah
              </a>
            </li>
          </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header{
  background-color: #FEB856;
  display: flex;
  padding: 1.5rem;
  box-shadow:0 5px 8px rgb(214, 214, 214);

  p{
    font-size: 18px;
    color: #171C2D;
  }
  nav{
    margin-left: auto;

    ul li a{
      display: inline-flex;
      font-size: 18px;
      color: #171C2D;
      list-style: none;
      text-decoration: none;
    }
    ul li a:hover{
      color: honeydew;
    }
  }
}

</style>
