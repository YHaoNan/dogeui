<template>
    <button :class="['doge-button', 'type-'+type, round ? 'round' : '', loading ? 'loading' : '', 'size-'+size]"
            :disabled="disabled">
        <doge-loading class="doge-button-loading"
                    v-if="loading"
                    :color="loadingColor" 
                    :style="{margin: '0 ' + loadingMarginSide}"></doge-loading>

        <doge-icon class="doge-button-start-icon" v-if="startIcon" :icon="startIcon"></doge-icon>

        <span class="doge-button-content" v-if="defaultSlotHasContent">
            <slot></slot>
        </span>

        <doge-icon class="doge-button-end-icon" v-if="endIcon" :icon="endIcon"></doge-icon>
    </button>
</template>

<script>
import '../css/button.css';
import {useSlots, computed, watch, toRefs, ref} from 'vue';
import DogeIcon from './DogeIcon.vue';
import DogeLoading from './DogeLoading.vue'
export default {
    name: 'doge-button',
    components: {DogeIcon, DogeLoading},
    setup(props) {
        const defaultSlotHasContent = useSlots().default;
        const loadingMarginSide = props.loading ? ref('0em') : ref('-0.5em');
        const { loading } = toRefs(props);
        watch(loading, (newValue)=> {
            setTimeout(()=>{
                if (newValue) {
                    loadingMarginSide.value = '0em';
                } else {
                    loadingMarginSide.value = '-0,5em';
                }
            }, 10);
        })

        const loadingColor = computed(()=>{
            if(['normal', 'plain', 'dashed', 'link'].includes(props.type)) return '#bebebe';
            else if(props.disabled) return '#bebebe';
            else return '#ffffff';
        });
        return {
            defaultSlotHasContent, loadingColor, loadingMarginSide
        }
    },
    props: {
        buttonColor: {
            type: String,
            default: '#3185FF'
        },
        textColor: {
            type: String,
            default: '#ffffff'
        },
        type: {
            validator(value) {
                return ['normal', 'primary', 'warning', 'plain', 'dashed', 'link'].includes(value)
            },
            default: 'primary'
        },
        size: {
            validator(value) {
                return ['small', 'normal', 'large'].includes(value);
            },
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        startIcon: {
            type: String,
        },
        endIcon: {
            type: String
        },
        round: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

</style>