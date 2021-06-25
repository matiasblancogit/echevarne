@extends('layouts.app')

@section('content')
<div class="panel panel-default">
    <div class="row cabecera">
        <div class="col-md-12">
            <h4>Editar Novedad</h4>
        </div>
    </div>
    <div class="panel-body">
        <div class="container-fluid">
            <div class="row">                      
                <div class="col-md-12">
                    @if($errors->any())
                    @foreach($errors->all() as $error)
                    <div class="alert alert-danger" role="alert">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span class="sr-only">Error:</span>
                        <span style="text-transform: capitalize;">&nbsp;{{$error}}</span>
                    </div>              
                    @endforeach
                    @endif
                </div>
            </div>                
            {!! Form::model($novedad, ['route' => ['admin.novedades.update', $novedad->id], 'method' => 'PUT', 'files' => 'true'])!!}                
            @include('admin.novedades.partials.fieldsEdit')   
            <div class="row">
                <div class="col-md-12" style="  text-align: right;">
                    <a href="{{ route('admin.novedades.index') }}" class="btn btn-danger">
                        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;
                        Cancelar
                    </a>    
                    <button type="submit" class="btn btn-success">
                        <span class="glyphicon glyphicon-floppy-save" aria-hidden="true"></span>&nbsp;
                        Guardar</button>
                </div>
            </div>       
            {!! Form::hidden('novedadId', $novedad->id, array('id'=>'novedadId')) !!}
            {!! Form::close() !!}
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script type="text/javascript">
    $(document).ready(function () {

        showFields();
        
        $("#es_producto").on('change', function () {
            showFields();
        });
    });

    function showFields() {
        //Si es un producto 
        if ($('#es_producto:checkbox:checked').length > 0) {
            $("#texto_novedad").hide();
            $("#url_producto").show();
        } else {
            $("#texto_novedad").show();
            $("#url_producto").hide();
        }
    }
</script>
@endsection