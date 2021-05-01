<template>
  <div>
    <div class="comment-container" v-for="comment in comments" :key="comment.user">
      <div class="comment">
        <div class="profile">
          <v-img
            height="60"
            width="60"
            class="rounded-circle"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          />
        </div>
        <div class="comment-body py-2 px-2 py-md-4 px-md-4">
          <span>{{ comment.user }}</span>
          <v-rating
            :value="comment.rating"
            color="#ffe700"
            background-color="warning lighten-1"
            dense
            half-increments
            readonly
            size="17"
            :empty-icon="icon.StarOutline"
            :full-icon="icon.Star"
            :half-icon="icon.StarHalfFull"
            class="mb-3"
          ></v-rating>
          <span class="body-2">{{ comment.text }}</span>
          <div class="comment-bottem">
            <span class="caption">{{ comment.date }}</span>
            <v-btn :text="isDark" small>پاسخ <v-icon color="c_1" small>{{ icon.Reply }}</v-icon></v-btn>
          </div>
        </div>
      </div>
    
      <Comments v-if="comment.replys" :comment="comment.replys"/>

    </div>
  </div>
</template>

<script>import {
  mdiChevronLeft,
  mdiSchoolOutline,
  mdiChevronDown,
  mdiCloudDownloadOutline,
  mdiFolderZipOutline,
  mdiStarOutline,
  mdiStar,
  mdiStarHalfFull,
  mdiAccountMultiple,
  mdiForumOutline,
  mdiReply,
} from "@mdi/js";
const icon = {
  ChevronLeft: mdiChevronLeft,
  ChevronDown: mdiChevronDown,
  SchoolOutline: mdiSchoolOutline,
  CloudDownloadOutline: mdiCloudDownloadOutline,
  FolderZipOutline: mdiFolderZipOutline,
  StarOutline: mdiStarOutline,
  Star: mdiStar,
  StarHalfFull: mdiStarHalfFull,
  AccountMultiple: mdiAccountMultiple,
  ForumOutline: mdiForumOutline,
  Reply: mdiReply,
};
export default {
  props:["comment"],
  data:()=>({
    icon: icon
  }),
  computed:{
    comments(){
      return this.comment
    }
  }
};
</script>

<style>
</style>