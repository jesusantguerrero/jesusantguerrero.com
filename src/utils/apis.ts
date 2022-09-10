const HASHNODE_URL = 'https://api.hashnode.com/';
const DEVTO_URL = 'https://dev.to/api/';

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

const fetchDevtoPosts = async (username) => {
  const response = await fetch(`${DEVTO_URL}/articles?username=${username}`);
  const data = await response.json();
  return data;
}

/**
 * fetch hashnode account and publication information of a given user
 * @param {string} user
 * @returns {Promise<HashnodeUser>}
 */
export const fetchPostsByUser = async (user, count = 0) => {
  const posts = await fetchDevtoPosts(user);
  return count ? posts.slice(0 , count).map(mapToPost): posts.map(mapToPost) || [];
}

function mapToPost(post) {
    return {
        title: post.title,
        description: post.description,
        link: post.url,
        image: post.cover_image,
        date: post.published_timestamp,
    }
}
