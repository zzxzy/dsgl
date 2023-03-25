<template>
	<div class="bd">
		<div class="jp">
			<img src="http://shop.tangxiaoyang.vip/img/login_img.ca4e6fe8.png" alt="">
		</div>
		<div class="dl">
			<div class="ys">
				<div data-v-2f76d9b9="" class="avatar-box"><img data-v-2f76d9b9="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlFQzlDQzUwMUExMTFFOEIwMjFBRkFFQkI0NjQwNzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlFQzlDQzYwMUExMTFFOEIwMjFBRkFFQkI0NjQwNzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OUVDOUNDMzAxQTExMUU4QjAyMUFGQUVCQjQ2NDA3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3OUVDOUNDNDAxQTExMUU4QjAyMUFGQUVCQjQ2NDA3NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pja4b4UAAAV4SURBVHja5Jt7iFVVFMb3NUGJqWwynaKHQxMUWYxhYTTSEJFJZo5lLxSKtChNptLeo9n00Ag0msJA0soeUtlrwj+Smh6UoZFD/RE2OUIWUzORxASmQ7dvMd92VnvO3M69Z9/zGBd8uM+Ze8/dv7PWWXvvtY+5fD5vDicbGfUCLZ1F3bAxUBUl1gN18d+SbFF1Ll7gENefAl0FzYBqhvicAL8DbYLaoL7UengIGw1dR00L8fmx0HzqM4K/Dv2eBWDx4mvQ5IC/7VBhbEElvGtVX6ZSjdD1/E5qgS8h7Fh1rgN6FnoT2lvAw7OghYS3N+5j6DZoo68OjvAIezW0RcGKJ++AzoTWFIC1n10HTaJX9/B8BfQyvZ0q4NnQkypi3ue5lhISkDy7M6EX1bnl0M1pAa5iyFbzWLLsDUw+pdq3TGBr1XAmUTIxDcAPqHH1E2gJ1OvhuhIZK6BXVXg3Rc07kYAx6ahhUrEdFNivPeYFyeZ3Q/t4fA10WZIeflDd8Q2+hxAF3aSOmxMBhndHMzOL7Xc65dvWqsxdW2DGVlYPX8nnymblrjIC96ln2f527MB1qv1RDAudLapdnwTwqc4wUm77DjrA9klJAI9X7d9iAN6nfmd8EsAnqvYPMa3f7azthCSA/1Dtk2MCPqi8PSpu4F9Ve1wMsKNUKMtv/x03sC7LVMcALGF8NNvdSYT0l6p9cQzAs1X7iySAN6v2HFP++tj0IcbkeIAXVedkQb9NVSzmlxG2jtUUm7A+T2rxsE61F7C64duOhO5Sx0+bCFXNqMBSnWhl+1xxvOmvWPq0O6EGtmU19kpiy0OE9V+849ZuJ7Qvk7Xvw+r4+aiTHB8Vj63QMnW8jJ08JuJ1F0PPqWS4Gnohamd9FfGaGd5iR5n+otvGEif5Ur9az8ix47skqXugf9ICLDbPSWIzGH7NIcEFVMqxndCNTgRNN562X3yOnX3M1O3QMzwnCewhSoawNuhHFgvk81L8O43DTl1AfyRKbjIe95p8Al8IXUHPBtkUqhiT7ZrHORJ86qOTPkJ6AvQGvXcvdFbAnLs3ZIS4ZaIzoKWmv/z7No+T8XBLZ16+K2VZqVxWBFQnZPvzA4bySHpLwvY489/9Ydkh3MnE1EsoKQ5Oc8pIsxg9T0GPmRJr37lS3gBgPVq8Wuv8SSBXEMCH1fCGznWcs5dJsq3YDfERJcBKBn3Lgd3E1UyDR1ixDiatSznpsAV5yfqyS7kU/TmibB7GxSWEn1B3W8JKdgg3xFTxqCOoHubktxfA031ePQxYCa1VCvY9ejUuWDsBmenMuCTiVqN/x3oDxsVkQvCo+rzMqq7FXf3QxG/fmP6t0/v1tN6Z3pYODNi5nMdak538eYDdb5K1lXSCtUb0tTkSMC5wAcdBay/J2jTs8xKDPcLH7NBqDX2eE8XDsvd7DtuSfRcC9ieTHjuI/tynFi6VMjMDdEXRwPjSYjVN/BlqwsV7TTptpSo31XC1Fh4YsGM4mzlUygFsa0phpRDR7vR3CRhqi/Fwo5ou7nSSQ1qhW50hcnkoYNyZCRzrrK1KUZL6P5ON81/YrgdLfRgPyyR9Etsy+d+cEVjx8ldcVdmCQkMY4Fv1tA0XOWCyZS2qfQvzUTAwV0F2zbmHq59MGRz0vRkoHUvFpb6Qhy9X7Xcz9Oy6prdiLioEfL5qbzfZte1OmWgwMMK5UgH/mXHgHWbgnbHJYJsY5OFxZuD9p90I511ZpUXf8ywz2ee4KghYv7awy2Tfdqv2KUHAx6t29zAA7gliGwq4ZxgAdzuP6yBg/dp+1zDzcGUQsH3tV8bercMAeJtyXPsgYGQ2mVWdB52OdkfWaVmCOhuaivYaez53uP1XvH8FGAD+pVtlmmnDlgAAAABJRU5ErkJggg=="></div>
				<el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="username">
				<el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item style="margin-right: 20px;">
				<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
		</div>
		

	</div>

</template>

<script>

	import {
		loginByUserInfo
	} from "@/api/user.js"
	export default {
		data() {
			return {
				ruleForm: {
					username: "admin",
					password: '123456'
				}
			};
		},
		methods: {
			submitForm(formName) {
				http://www.tangxiaoyang.vip:8888/api/v2/login
				loginByUserInfo(this.ruleForm).then(res => {
					
					localStorage.setItem('token',res.data.data.token);
					console.log(res);
					this.$router.push({
						path:"/main"
					})
				})

			}
		}
	}
</script>
<style>
.avatar-box{
    width: 120px;
    height: 120px;
    border: 5px solid #93defe;
    border-radius: 100px;
    background: #fff;
    text-align: center;
    line-height: 110px;
    position: absolute;
    top: 110px;
    right: 390px;
}
.ys{
	width: 400px;
	height: 400px;
	background-color: rgb(255, 255, 255);
	display: grid;
	place-content: center;
}
.bd{
	background-color: rgb(135, 219, 255);
	display: flex;
	justify-content: space-around;
	height: 100%;
	
}
.demo-ruleForm{
	display: grid;
	place-content: center;
	margin-right: 56px;
}
.dl{
	text-align: center;
	width: 400px;
	height: 720px;
	display: grid;
	place-content: center;
	margin-right: 180px;
}

.jp{
	height:  720px;
	line-height: 720px;
	display: grid;
	place-content: center;
	margin-left: 180px;
}
</style>
