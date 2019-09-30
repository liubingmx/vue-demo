<template>
    <div id="login-box" class='login-body'>
        <div class="navigator-box">
            <span class="nav-span">小程序页面</span>
        </div>
        <div class="login-content">
            <div class="form-div">
                <div class='wel-title'>Hi~ 欢迎使用</div>
                <div>商家系统</div>
                <div class="control-box">
                    <input class="control-input" type="text" placeholder="请输入用户名">
                </div>
                <div class="control-box">
                    <input class="control-input" type="password" placeholder="请输入密码">
                </div>
                <div class="login-btn">
                    <button class="btn-box login-btn">登录</button>
                </div>
                <div>
                    <button class="btn-box">忘记密码</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' src='./login.ts'></script>
<style lang='scss' src='./login.scss'></style>