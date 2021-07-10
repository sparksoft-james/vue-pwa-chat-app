<template lang="">
  <div class="chat-list-item">
     <v-list two-line>
       <template v-for="(item, index) in items">
        <v-list-item class="single-list-item">
          <v-list-item-avatar class="avatar">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="renderCallListTitle(item)" class="name"></v-list-item-title>
            <v-list-item-subtitle v-html="renderCallListSubtitle(item)" class="description"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </template>
      </v-list>
  </div>
 
</template>
<script>
import {incoming, outgoing, missed} from '@/assets/svg/commonSvg.js'
export default {
  props: { items: { type: Array, required: true } },
  methods: {
    renderCallListTitle(item){
      return `<b>${item.name}</b> <span style="float:right; font-weight: 400; font-size: 13px">${item.datetime}</span>`
    },
    renderCallListSubtitle(item) {
      let iconSvg = ''

      if(item.callStatus === 'Incoming') {
        iconSvg = incoming
      } else if (item.callStatus === 'Outgoing') {
        iconSvg = outgoing
      } else if (item.callStatus === 'Missed') {
        iconSvg = missed
        return `<span>${iconSvg}</span> <span style="font-weight: 400; font-size: 13px">${item.callStatus}</span>`
      }
      return `<span>${iconSvg}</span> <span style="font-weight: 400; font-size: 13px">${item.callStatus}</span> . <span>${item.duration}</span> `
    }
  },
}
</script>
<style lang="scss">
.chat-list-item {
  padding:0;
  .single-list-item {
    padding:0;
    margin-bottom: 10px;
    .avatar {
      margin-right: 20px;
      height: 40px;
      width: 40px;
    }
    .name {
      font-weight: bold;
    }
    .description {
      font-size: 15px;
      line-height: 22px;
      white-space: nowrap;
      overflow: hidden; 
      text-overflow: ellipsis;
    }
    
  }
}
</style>