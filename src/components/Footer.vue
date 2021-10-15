<template>
  <!-- Remove the container if you want to extend the Footer to full width. -->
  <div class="container my-5">
    <footer class="text-center text-lg-start text-white">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row my-4">
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div
              class="shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
              style="width: 150px; height: 150px"
            >
              <img
                src="../assets/minSalud.png"
                style="width: 100%; height: 30%"
                alt=""
                loading="lazy"
              />
            </div>

            <p class="text-center">Ministerio de Salud</p>

            <ul class="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a
                  v-for="red in social"
                  class="text-white px-2"
                  :href="red.url"
                  target="_blank"
                >
                  <font-awesome-icon :icon="['fab', red.name]" />

                  <!-- <font-awesome-icon icon="fa-brands fa-amazon" />
                  <font-awesome-icon icon="fa-solid fa-0" /> -->
                </a>
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Servicios</h5>

            <ul v-for="servicio in servicios" class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="text-white"
                  ><font-awesome-icon :icon="['fas', 'circle']" size="xs" />
                  {{ servicio }}</a
                >
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Departamentos</h5>

            <ul v-for="departamento in departamentos" class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="text-white">
                  <font-awesome-icon :icon="['fas', 'circle']" size="xs" />
                  {{ departamento }}</a
                >
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-4">Contact</h5>

            <ul class="list-unstyled">
              <li>
                <p>
                  <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                  Bogota, Colombia
                </p>
              </li>
              <li>
                <p>
                  <font-awesome-icon :icon="['fas', 'mobile-alt']" /> +57
                  {{ phone }}
                </p>
              </li>
              <li>
                <p>
                  <font-awesome-icon :icon="['fas', 'envelope']" /> {{ email }}
                </p>
              </li>
            </ul>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2021 Copyright:
        <a class="text-white" href="https://www.misiontic2022.gov.co/portal//"
          >Mision Tic</a
        >
      </div>
      <!-- Copyright -->
    </footer>
  </div>
  <!-- End of .container -->
</template>
<script>
export default {
  data() {
    return {
      email: "correo@gmail.com",
      phone: "316 0000 133",
      mention: "2021 | MisioTic",
      social: {
        youtube: {
          name: "youtube",
          url: "https://www.youtube.com/channel/UC9IKtxn9AIGelnYmwYr0Lxw",
        },
        github: {
          name: "github",
          url: "https://github.com/",
        },
      },
      servicios: ["servicios 1", "servicios 2", "servicios 3"],
      departamentos: ["departamento 1", "departamento 2", "departamento 3"],
    };
  },
};
</script>

<style  scoped>
footer {
  background: #17A2B8;
}
</style>