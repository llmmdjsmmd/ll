<template>
    <div 
        :class="wrapClass" 
        :type="type" 
        :container_type = "container_type" 
        @mouseover="hover" 
        @mouseleave="leave"
        @drop="drop" 
        @dragover.prevent
        >
        <label class="name">{{name}}<span class="del" @click="del" v-show="show_del_btn">×</span></label>
        <slot></slot>
    </div>
</template>
<script>
import { TYPE_CONTANINER_ID } from '@/common/itemTypeConstant'

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
        wrapClass(){
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
            this.show_del_btn = true;
        },
        leave (){
            this.show_del_btn = false;
        },
        drop (){
            debugger;
            this.type === TYPE_CONTANINER_ID && this.$emit('dropInContainer', this.type)
        }
    }
}
</script>
<style lang="scss" scoped>
    .object_item{
        border: 1px solid #ccc;
        label{
            width: 80%;
            line-height:20px;
        }
    }
    .object_item{
        span.del{
            position: relative;
            right:0;
            top:0;
        }
        
    }
</style>