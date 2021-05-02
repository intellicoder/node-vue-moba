<template>
    <div>
        <h1>新建分类</h1>
        <el-form label-width="120px">
            <el-form-item label="名称">
                <el-input v-model="model.name" @submit.native.prevent="save"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: {}
        }
    },
    methods: {
        save() {
            this.$http.post(`路径`, {})
        }
    },
}
</script>