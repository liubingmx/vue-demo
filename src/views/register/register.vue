
<template>
    <div class="register">
        <input type="text" v-model="name"/>
        <input type="text" v-model="password"/>
        <button @click="register">register</button>
        <button @click="goHello">to hello</button>
        <button @click="goLogin">go goLogin</button>
        <br>
        <div>
            <div v-for="item in orders" :key="item.id" >
                <span v-if="item.contractNo==='123456'">contractNo:</span><span>{{item.contractNo}}</span>
                <span>limsOrderId:</span><span>{{item.limsOrderId}}</span>
                <span>productName:</span><span>{{item.productName}}</span>
            </div>
        </div>
    </div>
</template>
<script lang='ts' src='./register.ts'></script>