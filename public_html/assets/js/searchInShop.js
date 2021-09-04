// $("#search").on('click', function(){

function f(param) {  

    if(param){
        $("input.form-control").val(''); 
        if (document.getElementById('basicModal').style.display){
            if ($("#basicModal").data('bs.modal').isShown == true){
          
                setTimeout(function() {
                    $('#basicModal').modal('hide');
               }, 500);
                 
               
            }   
        }
        
    }

    var type_selected="";
    if(document.getElementById("type")==null){
        type_selected = "Lista"
        sessionStorage.Tipo = type_selected; 
    }else{
        if (sessionStorage.Tipo==undefined){
            var type = document.getElementById("type");   
            type_selected = type.options[type.selectedIndex].value;
            sessionStorage.Tipo =  type.options[type.selectedIndex].value;
            
        }else{                 
            let tipo = document.getElementById("type");                      
                tipo.value = sessionStorage.Tipo;
                type_selected = sessionStorage.Tipo; 

        }
        
    }

var type = document.getElementById("type");      

var rubro = $('#rubro').val();
var marca = $('#marca').val();
var equivalencia = $('#equivalencia').val() || param ;
var nombre = $('#nombre').val();
var equiv = $('#equivalencia').val();
var _token= $('meta[name="csrf-token"]').attr('content')

;
   
if (rubro==0&marca==0&equivalencia==""&equiv==""&nombre==""){
    alert('Complete campos para buscar')
}
    else{

     $.ajax({
        data:  {  
            'rubro':rubro,
                 'marca':marca,                 
                'nombre':nombre,
                'equivalencia':equivalencia,
                'busqueda':true
        },
        url: '/shop',
        beforeSend: function() {
           console.log('Buscando')
},
        success: function(response)
        {     


            $('.index').css('display', 'none');
            $('#table_data').html(response);             
            $('.countBusqueda').css('display', 'block');          
            $('#linksShopContent').css('display', 'none');
            $('#linksShopGrid').css('display', 'block');    
            if(sessionStorage.Tipo=='Compra'){
            $('.precioVenta').css('display', 'none');
            $('.precioLista').css('display', 'none');
            $('.precioCompra').css('display', 'block');
        } 
        if(sessionStorage.Tipo=='Venta'){
            $('.precioCompra').css('display', 'none');
            $('.precioLista').css('display', 'none');
            $('.precioVenta').css('display', 'block');
            
        } 
        if(sessionStorage.Tipo=='Lista'){
            $('.precioVenta').css('display', 'none');
            $('.precioCompra').css('display', 'none');
            $('.precioLista').css('display', 'block');
        }

        setTimeout(function() {
            recentCall();
       }, 1000);
        
}
})

}
};





$("#clear").on('click', function(){
    
    $("select.form-control").val(0);
    $("select").niceSelect('update');
    $("input.form-control").val('');          
             
});



function recentCall(){
    var rubro = $('#rubro').val();
var marca = $('#marca').val();
var equivalencia = $('#equivalencia').val() 
var nombre = $('#nombre').val();
var equiv = $('#equivalencia').val();
var _token= $('meta[name="csrf-token"]').attr('content')
    $.ajax({
        data:  {  
            'rubro':rubro,
                 'marca':marca,                 
                'nombre':nombre,
                'equivalencia':equivalencia,
                'busqueda':true
        },
        url: '/shopRecentSearch',
        success: function(response)
        {     
            $('#sidebarProduct').html(response);    
        }     
    })

}

