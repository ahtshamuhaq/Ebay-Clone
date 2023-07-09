import BlogNav from "../Blogs/BlogNav";
import HeroSection from "../Blogs/HeroSection";
import BlogCardList from "../Blogs/BlogCardList";
import NewsFeed from "../Blogs/NewsFeed";
import Awards from "../Blogs/Awards";
import Footer from "../Blogs/Footer";
const Blogs = () => {
  return (
    <div className="bg-[#f1f1f1]">
      <BlogNav />
      <HeroSection />
      <BlogCardList />
      <NewsFeed />
      <Awards />
      <Footer />
    </div>
  );
};

export default Blogs;
