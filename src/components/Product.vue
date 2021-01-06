<template>
    <div>
        <div class="text-right mt-4">
            <button class="btn btn-primary">建立新產品</button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="120">分類</th>
                    <th>產品名稱</th>
                    <th width="120">原價</th>
                    <th width="120">售價</th>
                    <th width="80">是否啟用</th>
                    <th width="90">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in products" :key="item.id">
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td class="text-right">
                        {{item.origin_price}}
                    </td>
                    <td class="text-right">
                        {{item.price}}
                    </td>
                    <td>
                        <span v-if="item.is_enable" class="text-success">啟用</span>
                        <span v-else>啟用</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary button">編輯</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default{
    data(){
        return{
            products:[],
        }
    },
    methods:{
        getProducts(){
            var api = `${process.env.APIPATH}/api/${process.env. CUSTOMPATH}/products`;
            var vm = this;
            this.$http.get(api).then((response) => {
                console.log(response.data)  
                vm.products = response.data.products;
            })
        }
    },
    created(){
        this.getProducts();
    }
}
</script>