function ReadMore({ read, toggle }) {
  console.log(read);
  return <>
    {read.map((item, index) => (
        <div key={item.id} className={`film-container`}>
            <div className="image-left">
                <img src={item.poster.previewUrl} alt="" width={300} />
            </div>
            <div className="about-film-right">
                <h3 className="film-title">
                    {item.name}
                </h3>
                <p className="film-desc">
                    {item.description}
                </p>
                <h4>
                    Оценки:
                </h4>
                <p className="stats">
                    <p>Кинопоиск: <b>{item.rating.kp}</b></p>
                    <p>imDb: <b>{item.rating.imdb}</b></p>
                    <p>Критики: <b>{item.rating.filmCritics}</b></p>
                </p>
            </div>
        </div>
    ))}
  </>;
}

export default ReadMore;


// Надо будет проверять индекс и смотреть по индексу, что отображать, а что нет, но этом потом
