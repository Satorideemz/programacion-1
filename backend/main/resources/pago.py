from flask_restful import Resource
from flask import request

PAGO = {

    1: {'nombre':'Juan', 'apellido':'Perez', 'dni':'3234653','telefono':'3432423', 'email':'a@mail.com','esatado':'activo', 'Pago':'al dia',},
    2: {'nombre':'Pedro', 'apellido':'Gonzales', 'dni':'1534653','telefono':'4132423', 'email':'b@mail.com', 'esatado':'activo', 'Pago':'registra deuda'},
    3: {'nombre':'Pepe', 'apellido':'Sancho', 'dni':'3234553','telefono':'3435623', 'email':'a@mail.com', 'esatado':'activo', 'Pago':'registra deuda'},
    4: {'nombre':'Peter', 'apellido':'Lopez', 'dni':'3234560','telefono':'3435656', 'email':'a@mail.com', 'esatado':'suspendido','Pago':'registra deuda'},
    5: {'nombre':'Ortencia', 'apellido':'Ramirez', 'dni':'2234553','telefono':'3435000', 'email':'a@mail.com', 'esatado':'activo', 'Pago':'al dia'}

}

class Pago(Resource): 
    def get(self, id):

        if int(id) in PAGO:
            return PAGO[int(id)]
 
        return '', 404
    
    def put(self, id):

        if int(id) in PAGO:
            pago = PAGO[int(id)]
            data = request.get_json()
            pago.update(data)
            return '', 201
        return '', 404    