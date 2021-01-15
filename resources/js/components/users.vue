<template>
    <div class="content-us">
     <button data-toggle="modal" data-target="#guardarModal" type="button" class="justify-content-center boton_create btn-warning">Nuevo Usuario</button>
      <table class="table table-dark table-striped">
        <tr>
          <th>Nombre</th>
          <th>Apellido  Paterno</th>
          <th>Apellido  Materno</th>
          <th>Email</th>
          <th>Telefono</th> 
        </tr>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td v-text="usuario.name"></td>
          <td v-text="usuario.apellido_p"></td>
          <td v-text="usuario.apellido_m"></td>
            <td v-text="usuario.telefono"></td>
          <td v-text="usuario.email"></td>
        </tr>
      </table>
      <div class="modal fade border-dark " id="guardarModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-dark ">
                    <div class="modal-header border-dark ">
                        <h5 class="modal-title" id="exampleModalLabel">Nueva Reservacion</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="createUsu()">
                            <div class="form-group">
                                <label align="left" for="recipient-name" class="col-form-label">Nombre:</label>
                                <input type="text" v-model="newusu.name" class="form-control" placeholder="Nombre" id="recipient-name">
                            </div>
                            <div class="form-group">
                                <label align="left" for="recipient-name" class="col-form-label">Apellido Paterno:</label>
                                <input type="text" v-model="newusu.apellido_p" class="form-control"  placeholder="Apellido Paterno" id="recipient-name">
                            </div>
                            <div class="form-group">
                                <label align="left" for="recipient-name" class="col-form-label">Apellido Materno:</label>
                                <input type="text" v-model="newusu.apellido_m" class="form-control" placeholder="Apellido Materno"  id="recipient-name">
                            </div>
                            <div class="form-group">
                                <label align="left" for="recipient-name" class="col-form-label">Telefono:</label>
                                <input type="number" v-model="newusu.telefono" placeholder="Telefono" class="form-control" id="recipient-name">
                            </div>
                            <div class="form-group">
                                <label align="left" for="recipient-name" class="col-form-label">Email:</label>
                                <input type="email" v-model="newusu.email" placeholder="Email" class="form-control" id="recipient-name">
                            </div>
                            <div class="modal-footer border-dark ">
                                <button type="button" class="boton_cancel" data-dismiss="modal">Cancelar</button>
                                <button type="submit" name="action" class="boton_update">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            usuarios:[],
            newusu:{
                name:"",
                apellido_p:"",
                apellido_m:"",
                telefono:"",
                email:"",
            }
        };
    },
    mounted(){
        this.getUsu();
    },
    methods:{
        getUsu: function () {
            axios.get("users").then((response) => {
            this.usuarios = response.data.usuarios;
            console.log(this.usuarios);
            });
        },
            createUsu(){
            let url="users";
            axios.post(url,this.newusu).then(response=>{
                if(response.data.error ){
                    alert("No se puedo guardar")
                }else{
                    this.newusu.name="",
                    this.newusu.apellido_p="",
                    this.newusu.apellido_m="",
                    this.newusu.telefono="",
                    this.newusu.email=""
                    $('#guardarModal').modal('hide');
                    alert("El usuario se guardo de manera correcta, por favor actualiza la página");
                }
            }).catch(error=>{
              alert("Ocurrio un problema...");
            });
        },
    }
}
</script>
<style>
    .content-us{
        padding: 20px 20px;
    }
    .btn-warning{
        margin-bottom: 10px;
        border-radius: 4px;

    }
    th{
        background-color: brown;
    }
</style>