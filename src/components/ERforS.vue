<template>

  <v-app>
    <v-app-bar app dark color="purple" elevation="8" rounded>
      <v-toolbar-title src> <v-img src="../assets/LOGO ERforS.png" width="150"></v-img>       
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Home</v-btn>
      <v-btn text rounded>Login </v-btn>
      <v-btn text rounded> About</v-btn>
  </v-app-bar>
  <v-main>
    <v-card width="300" height="400" class="mx-auto mt-9">
      <v-card-title > LOGIN </v-card-title>
      <v-card-text >
        <form v-on:submit.prevent="login">
        <v-text-field 
          label="Username" 
          prepend-icon="mdi-account-circle" 
          v-model="usuario"/>
        <v-text-field 
          label="Password" 
          :type= "MostrarContraseña ? 'text' : 'Password'" 
          prepend-icon="mdi-lock" 
          :append-icon="MostrarContraseña ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="MostrarContraseña = ! MostrarContraseña"
          v-model= "password"
        />
        <div>
        <v-btn color="success" type="submit" value="log in">Login</v-btn>
        <v-col></v-col>
        <v-btn color="info" left= "true" >Register</v-btn>
      </div>
      </form>
      
      </v-card-text>
      
      
    
    </v-card>
    <div v-if= "error" >
      <v-alert
      prominent
      :type= "typeError"
      width="500" 
      class="mx-auto mt-9"
      
    >
      <v-row align ="center"  @click:append= "error = ! error" >
        <v-col class="grow">
          {{error_msg}}
        </v-col>
        <v-col class="shrink">
          <v-btn  @click = "error = ! error, usuario='', password=''">Reintentar!</v-btn>
        </v-col>
      </v-row>
    </v-alert>
    
  </div>
  </v-main>

   <!-- <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table> -->
  </v-app>

</template>


<script>
/*import ERforS from '@/components/ERforS.vue'*/
import axios from 'axios'
export default {
  name: 'App',
  /*components: {
    ERforS
  },*/
   data () {
    return  {
      MostrarContraseña: false,
      usuario: "",
      password: "",
      error: false,
      error_msg:"",
      typeError:"",
  }},
  methods:{
    login(){
           let json = {
        "nickname" : this.usuario,
        "password" : this.password
      };
      

      axios.post('https://marcosrepositorio.herokuapp.com/auth', json)
      .then( response =>{
         console.log(response.data)
        if(response.status == 500){
            console.log("error conexion")
             //localStorage._id = data.data.result._id;
             //this.$router.push('dashboard');
        }
          else{ 
            if(response.data == "No digito ningun campo"){
            this.error = true;
              this.error_msg = "Por favor digite los campos";
              this.typeError = "info";
          } 
          else if(response.data == "No ingreso Usuario"){
              this.error = true;
              this.error_msg = "Por favor ingrese un Usuario";
              this.typeError = "error";
          }
          else if(response.data == "No ingreso contraseña"){
            this.error = true;
            this.error_msg = "Por favor ingrese una contraseña";
            this.typeError = "error";
          }
          else if( response.data == "Usuario invalido" || response.data == "No existe el usuario"){
              this.error = true;
              this.error_msg = "Usuario o contraseña invalido";
              this.typeError = "warning";
            }
            else{
              this.error = true;
              this.error_msg = "Success";
              this.typeError = "success";
            }
          }
      })
    }

  },
  mounted() {
   /* this.axios.get('https://marcosrepositorio.herokuapp.com/peoples')
    .then((response) => {
       console.log(response.data)
        this.items = response.data;
      })*/
  },


};
</script>