const HASHNODE_URL = 'https://api.hashnode.com/';

export const HASHNODE_QUERY_ACCOUNT = `
query getAccount($user: String!) {
  user(username: $user) {
    publication {
      title
      favicon
      logo
      embedCode
      posts(page: 0) {
        coverImage
        title
        brief
        slug
      }
    }
  }
}`;

export const fetchGQL = async (query, variables = {}) => {
  return await fetch(HASHNODE_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
}

/**
 * fetch hashnode account and publication information of a given user
 * @param {string} user
 * @returns {Promise<HashnodeUser>}
 */
export const fetchPostsByUser = async (user) => {
  const response = await fetchGQL(HASHNODE_QUERY_ACCOUNT, { user });
  const data = await response.json();
  return data.data.user.publication.posts.map(mapToPost) || [];
}

function mapToPost(post) {
    return {
        title: post.title,
        description: post.brief,
        url: `https://hashnode.com/${post.slug}`,
        image: post.coverImage
    }
}
