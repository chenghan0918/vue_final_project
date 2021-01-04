<template>
    <div>
        <Navbar></Navbar>
<div class="container-fluid">
  <div class="row">
         <Sidebar/>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        123456
    </main>
  </div>
</div>


    </div>
</template>
<script>
import Sidebar from './Sidebar';
import Navbar from './Navbar';
export default {
    components:{
        Sidebar,
        Navbar,
    }
}
</script>