<template>
    <div :class="classObject" :type="type" :container_type = "container_type" @hover="hover">
        <label>{{name}}</label>
        <slot></slot>
        <span @click="del"  v-show="show_del_btn">×</span>
    </div>
</template>
<script>
export default {
    data (){
        return {
            name:'',
            show_del_btn: false
        }
    },
    props: {
        type:{
            default: 0,
            type: Number
        },
        container_type: {
            default: 0,
            type: Number
        }
    },
    computed: {
        classObject(){
            return {
                object_item: true,
                is_required: +this.need_data === 1
            }
        }
    },
    methods: {
        del (){
            this.$el.parentNode.removeChild(this.$el);
        },
        hover (){
            debugger;
            show_del_btn = true;
        }
    }
}
</script>