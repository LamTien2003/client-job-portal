import ArticleItem from './ArticleItem';

const Article = () => {
    return (
        <div className="flex justify-between gap-5">
            <ArticleItem
                month="March"
                date="02"
                comment="03 Comments"
                name="Mr. Jack Frank"
                title="To Make Your Smartness & Catch Your Bright Dream."
                imgArticle="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-img-01.png"
            />

            <ArticleItem
                month="March"
                date="04"
                comment="11 Comments"
                name="Mr. Jack Frank"
                title="Be Confident Your Dream & Struggle About Your Bright Dream"
                imgArticle="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-img-02.png"
            />

            <ArticleItem
                month="March"
                date="05"
                comment="02 Comments"
                name="Mr. Jack Frank"
                title="To Make Your Smartness & Catch Your Bright Dream."
                imgArticle="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/blog/blog-img-03.png"
            />
        </div>
    );
};

export default Article;
