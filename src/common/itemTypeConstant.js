import {freeze} from './utils';

export const TYPE_TEXT_ID = 1
export const TYPE_TEXT = freeze({
    id: TYPE_TEXT_ID,
    name: '文本'
})

export const TYPE_NUMBER_ID = 2
export const TYPE_NUMBER = {
    id: TYPE_NUMBER_ID,
    name: '数字'
}

export const TYPE_DATE_ID = 3
export const TYPE_DATE = {
    id: TYPE_DATE_ID,
    name: '日期类型'
}

export const TYPE_SINGLE_PULLDOWN_ID = 24
export const TYPE_SINGLE_PULLDOWN = {
    id: TYPE_SINGLE_PULLDOWN_ID,
    name: '单选下拉'
}

export const TYPE_HYPERLINK_ID = 102
export const TYPE_HYPERLINK = {
    id: TYPE_HYPERLINK_ID,
    name: '列表链接'
}

export const TYPE_CONTENT_ID = 14
export const TYPE_CONTENT = {
    id: TYPE_CONTENT_ID,
    name: '文本展示'
}

export const TYPE_LONG_CONTENT_ID = 110
export const TYPE_LONG_CONTENT = {
    id: TYPE_LONG_CONTENT_ID,
    name: '长文本展示'
}

export const TYPE_CONTANINER_ID = 64
export const TYPE_CONTANINER = {
    id: TYPE_CONTANINER_ID,
    name: '容器'
}

// export const TYPE_NUMBER_ID = 2
// export const TYPE_NUMBER = {
//     id: TYPE_NUMBER_ID,
//     name: '数字'
// }

export const TYPE_CONTAINER_NORMAL_ID = 64
export const TYPE_CONTAINER_NORMAL = {
    id: TYPE_CONTAINER_NORMAL_ID,
    name: '普通容器'
}

export const TYPE_CONTAINER_TABLE_HEADER_ID = 35
export const TYPE_CONTAINER_TABLE_HEADER = {
    id: TYPE_CONTAINER_TABLE_HEADER_ID,
    name: '表头表格'
}

export const CONTAINER_LIST = [
    TYPE_CONTAINER_NORMAL
]

export const COMPONENT_LIST = [
    TYPE_TEXT,
    TYPE_NUMBER,
    TYPE_DATE,
    TYPE_SINGLE_PULLDOWN,
    TYPE_HYPERLINK,
    TYPE_LONG_CONTENT,
    TYPE_CONTANINER
]