
export default function NewsHeadlines(props) {
  const { news, loaded } = props;

  if (!loaded) return null;

  return (
    <div className="rounded-lg bg-blue-800 p-3">
      {news.articles.map(article => {
        return (
          <div key={article.title} className="py-3 text-white flex items-center justify-between">
            <span className="">
              <span className="text-sm text-gray-100">{article.title}</span><br />
              <span className="font-bold text-lg">{article.description}</span><br />
            </span>
          </div>
        );
      })}
    </div>
  )
}