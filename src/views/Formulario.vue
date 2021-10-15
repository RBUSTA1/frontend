<template>
  <div>
    <Header />
    <div class="jumbotron">
      <h1 class="display-4">Datos Ciudadano</h1>
      <p class="lead">Formulario de Consentimiento para Vacunación Covid19.</p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>

      <hr class="my-4" />
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="*ID Ciudadano:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.id"
            type="text"
            placeholder="Ingrese ID"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="*Fecha:" label-for="input-2">
          <b-form-input
            id="input-1"
            v-model="form.date"
            type="date"
            placeholder="Ingrese ID"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="*País:" label-for="input-3">
          <country-select
            id="input-4"
            className="form-control"
            v-model="country"
            :country="country"
            topCountry="CO"
            placeholder="Seleccione País"
            autocomplete="true"
          />
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="*Departamento:"
          label-for="input-4"
          description="Departamento de origen"
          placeholder="Seleccione departamento"
        >
          <region-select
            v-model="region"
            id="input-4"
            className="form-control"
            placeholder="Seleccione departamento"
            :country="country"
            :region="region"
            autocomplete="true"
          />
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="*Tipo de Documento:"
          label-for="input-5"
        >
          <b-form-select
            v-model="tipoDocumento"
            :options="options"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Food:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.food"
            :options="foods"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Formulario",
  computed: {},
  data() {
    return {
      form: {
        id: "",
        fecha: null,
        country: null,
        departamento: null,
        name: "",
        lastname: "",
        email: "",
        name: "",
        fechaNacimiento: null,
        Edad: null,
        checked: [],
        TipoDocumento: null,
        optiontipoDocumentos: [
          { value: null, text: "Tipo de documento" },
          { value: "cc", text: "Cédula" },
          { value: "NUIP", text: "No. Único Identificación Personal" },
          { value: "RC", text: "Registro Civil" },
          { value: "TI", text: "Tarjeta de Identidad" },
          { value: "CE", text: "Cédula de Extranjería" },
          { value: "Pasaporte", text: "Pasaporte" },
          { value: "ASI", text: "Adulto sin Identificación" },
        ],
      },
      show: true,
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  // mounted:function(){
  //     let direccion = "http://solodata.es/pacientes?page=" + this.pagina;
  //     axios.get(direccion).then( data =>{
  //         this.Listapacientes = data.data;
  //     });
  // }
};
</script>
<style scoped>
</style>