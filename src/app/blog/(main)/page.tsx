import { Curation } from './curation';
import PostListPage from '@/components/post_list/PostListPage';
import { getSortedPostList } from '@/lib/post';

const Blog = async () => {
  const postList = await getSortedPostList();

  return (
    <section>
      <Curation postList={postList} />
      <div className='mx-auto my-10 w-full max-w-[1200px] px-8'>
        <hr />
      </div>
      <PostListPage postList={postList.slice(1)} />
    </section>
  );
};

export default Blog;
