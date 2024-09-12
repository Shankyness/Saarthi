import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Welcome to Saarthi
        </h1>
        <p className="text-gray-500 text-m m:text-m">
        "Saarthi is an innovative platform designed to empower university students by sharing interview experiences and insights. It fosters a collaborative environment where students can exchange valuable knowledge, helping them prepare more effectively for interviews and placements. By leveraging the collective experiences of peers, Saarthi enables students to approach the recruitment process with greater confidence and readiness."
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all Reviews
        </Link>
      </div>

      {/* <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div> */}

      {/* Old posts  */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
  {posts && posts.length > 0 && (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
      <div className="flex flex-wrap gap-4 justify-center lg:px-4">
        {/* Added lg:px-4 to provide equal padding from left and right for large screens */}
        {posts.map((post) => (
          <div key={post._id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
      <Link
        to={"/search"}
        className="text-lg text-teal-500 hover:underline text-center"
      >
        View all posts
      </Link>
    </div>
  )}
</div>


      



    </div>
  );
}
