<template>
    <div :class="classObject" :type="type" :container_type = "container_type">
        <label>{{name}}</label>
        <slot></slot>
    </div>
</template>
<script>
export default {
    data (){
        return {
            need_data: 0,
            is_visible: 1,
            is_lock: 0,
            hide_label: 0,
            name: '',
            position: 'fl',
            td_align: 'left',
            is_show_tip: 0,
            width_type: 1,
            show_terminal: -1 // 显示端口，默认都显示
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
    }
}
</script>