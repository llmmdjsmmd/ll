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
            innerClass: {
                item_ipt:true
            },
            show_terminal: -1 // 显示端口，默认都显示
        }
    },
    methods:{
        drop (){

        }
    }
}