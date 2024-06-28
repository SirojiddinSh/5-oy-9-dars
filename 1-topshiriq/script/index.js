let result = document.querySelector(".result");

let renderData = function (data) {
    let $fragment = document.createDocumentFragment();
    data.forEach((element) => {
        let div = document.createElement("div");
        div.className = "movie";
        div.innerHTML = `
        <div>
        <iframe src="${element.trailer}" width="300" height="250" frameborder="0"></iframe>
        <h3>${element.awards}</h3>
        <strong>Price: ${element.boxOffice}</strong>
        <p>Genre: ${element.genre}</p>
        <h3>Country: ${element.country}</h3>
        <h3>Name: ${element.title}</h3>
        <p>Year: ${element.year}</p>
        </p>Rating: ${element.rating}</p>
        </div>`;

        $fragment.appendChild(div);
    });

    result.appendChild($fragment);
    filtermovie(element.title);
};

let $result = function () {
    fetch("https://freetestapi.com/api/v1/movies ").then((Response) =>
        Response.json().then((data) => {
            renderData(data);
            console.log(data);
        })
    );
};

$result();

let filtermovie = function (name) {
    let search = document.querySelector("#search").value;
    name.filter((item) => item.title == search);
    if (search == item.title) {
        console.log(item);
    }
};

search.addEventListener("submit", (e) => {
    e.preventDefault();
    filtermovie(result);
});
