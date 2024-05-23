const paths = {
  home() {
    return "/";
  },
  showTopic(topicSlug: string) {
    return `/topic/${topicSlug}`;
  },
  createPost(topicSlug: string) {
    return `/topic/${topicSlug}/posts/new`;
  },
  showPost(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
  // home() {
  //   return "/";
  // },
};

export default paths;
