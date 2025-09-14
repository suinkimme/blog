import { MiniPostCard } from '@/components/post_list/MiniPostCard';
import PostCard from '@/components/post_list/PostCard';
import { Post } from '@/config/types';

export const Curation = ({ postList }: { postList: Post[] }) => {
  const firstPost = postList[0];
  const hotPostAllList = postList.filter((post) => post.isHot);
  const hotPostShowList = firstPost.isHot ? hotPostAllList.slice(1, 5) : hotPostAllList.slice(0, 4);

  return (
    <div className='mx-auto mt-6 flex w-full max-w-[1200px] flex-col items-stretch gap-6 px-4 sm:mt-10 sm:flex-row lg:gap-8'>
      <section className='flex w-full flex-1 flex-col min-[980px]:min-w-[520px]'>
        <h2 className='mb-3 text-lg font-bold sm:text-2xl'>최신 게시물</h2>
        <div>
          <PostCard post={firstPost} />
        </div>
      </section>
      <section className='flex w-full flex-1 flex-col'>
        <h2 className='mb-3 text-lg font-bold sm:text-2xl'>추천 게시물 🔥</h2>
        <div className='grid flex-1 grid-rows-4 gap-3'>
          {hotPostShowList.map((post) => (
            <MiniPostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};
