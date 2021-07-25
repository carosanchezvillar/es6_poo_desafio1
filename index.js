function Consultorio(nombre, pacientes){
    this.nombre = nombre;
    this.pacientes = pacientes;
}

Consultorio.prototype.todosLosPacientes = function(){
    console.log(this.pacientes.map((paciente) => paciente.toString()));
};

Consultorio.prototype.buscarPaciente = function (nombrePacienteABuscar) {
    var indice = -1;
    for (var i = 0; i < this.pacientes.length; i++){
        if (this.pacientes[i].nombre == nombrePacienteABuscar){
            indice = i;
        }
    }

    if(indice >= 0){
        console.log("Paciente encontrado, sus datos son: ", 
        this.pacientes[indice].nombre,
        this.pacientes[indice].edad)

    }else {
        console.log("Paciente no encontrado, intenta con otro nombre")
    }
}


function Paciente(nombre, edad, rut, diagnostico){
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    Object.defineProperty(this, "nombre", {
        get: function (){
            return _nombre;
        },
        set: function (nuevoNombre) {
            _nombre = nuevoNombre;
        }
    })

    Object.defineProperty(this, "edad", {
        get: function (){
            return _edad;
        },
        set: function (nuevoEdad) {
            _nombre = nuevoEdad;
        }
    })

    Object.defineProperty(this, "rut", {
        get: function (){
            return _rut;
        },
        set: function (nuevoRut) {
            _nombre = nuevoRut;
        }
    })

    Object.defineProperty(this, "diagnostico", {
        get: function (){
            return _diagnostico;
        },
        set: function (nuevoDiagnostico) {
            _nombre = nuevoDiagnostico;
        }
    })
}

Paciente.prototype.toString = function () {
    console.log
    return {
        nombre: this.nombre,
        edad: this.edad,
        rut: this.rut,
        diagnostico : this.diagnostico,
    }
}

const PacienteRobertoHurtado = new Paciente("Roberto", 25, "1.222.333-4", "resfrío")

const PacienteCarolinaSanchez = new Paciente("Carolina", 32, "1.234.567-k", "neumonía")

const ConsultorioJuanBautista = new Consultorio("Juan Bautista", [PacienteRobertoHurtado, PacienteCarolinaSanchez]);


ConsultorioJuanBautista.todosLosPacientes();
ConsultorioJuanBautista.buscarPaciente("Roberto");
