@extends('layout.app')

@section('content')
<input type="hidden" id="item_id_view" name="item_id_view" value="{{ $data }}" />
<div id="product-view"></div>
@endsection