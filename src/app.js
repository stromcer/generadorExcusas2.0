/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let randomizar = () => {
    let result = excusaFinal();
    document.getElementById("excuse").innerHTML = result[0];
    document.getElementById("quienImagen").innerHTML = result[1];
    document.getElementById("queImagen").innerHTML = result[2];
    document.getElementById("cuandoImagen").innerHTML = result[3];
  };
  randomizar();

  document.getElementById("boton").addEventListener("click", () => {
    randomizar();
  });

  function cargaCss() {
    // Get HTML head element
    var head = document.getElementsByTagName("HEAD")[0];

    // Create new link Element
    var link = document.createElement("link");

    // set the attributes for link element
    link.rel = "stylesheet";

    link.type = "text/css";

    link.href = "cssDani.css";

    // Append link element to HTML head
    head.appendChild(link);
  }

  function excusaFinal() {
    let quien = [
      "El perro",
      "Mi abuela",
      "Un mono de tres cabezas",
      "Elvis presley resucitado",
      "Uno de los monty python",
      "Ganondorf",
      "Un velocirraptor en moto lanzando petalos",
      "Jesucristo-colega",
      "La rana Pepe",
      "Cristian",
    ];
    let que = [
      "lo ha destrozado",
      "lo usó como ingrediente para pizzas",
      "lo utilizo como un bolo",
      "se quemo mientras probaba un traje ignifugo",
      "chasqueo con el guante de thanos y desaparecio",
      "estaba usandolo como un Frisbee",
    ];
    let cuando = [
      "mientras cenaba",
      "cuando estaba jugando",
      "a media dungeon mitica",
      "cuando construia un reactor nuclear",
      "mientras estaba en el pasado salvando hyrule",
    ];

    let quienIndex = Math.floor(Math.random() * quien.length);
    let queIndex = Math.floor(Math.random() * que.length);
    let cuandoIndex = Math.floor(Math.random() * cuando.length);

    let excusaFinal = `${quien[quienIndex]} ${que[queIndex]} ${cuando[cuandoIndex]}.`;

    let quienImagen = [
      "https://i.imgur.com/zXGdRb3.jpg",
      "https://www.escudodigital.com/uploads/s1/11/22/34/abuela-condenada-fotos-menores.jpeg",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9be23d57-8824-450b-88db-0ae58ef5934e/d1p7knt-55f9999a-e56f-45be-8c38-a02be797a7d3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzliZTIzZDU3LTg4MjQtNDUwYi04OGRiLTBhZTU4ZWY1OTM0ZVwvZDFwN2tudC01NWY5OTk5YS1lNTZmLTQ1YmUtOGMzOC1hMDJiZTc5N2E3ZDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3CqnlobhYEZqr7dZ4TCTZYIiXOxB9fEorD8FvlQ2o-A",
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/4D8E/production/_95845891_img_4419.jpg.webp",
      "https://phantom-elmundo.unidadeditorial.es/8a38e700cc89eaa02490fe89603df7e4/resize/473/f/webp/assets/multimedia/imagenes/2020/01/22/15797007276268.gif",
      "https://www.nintenderos.com/wp-content/uploads/2017/02/71455290.jpg",
      "https://scontent.fmad7-1.fna.fbcdn.net/v/t1.18169-9/375267_296045777095916_1749474767_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9267fe&_nc_ohc=juTNXCce2QoAX86lM3E&_nc_ht=scontent.fmad7-1.fna&oh=00_AfBDgRHd9kuFlPXBNpX4PlruHQOQgQbwBbmGpnZUpaaNug&oe=64011AF2",
      "https://s1.eestatic.com/2017/04/15/actualidad/actualidad_208739511_32684409_1706x960.jpg",
      "https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png",
      "https://ca.slack-edge.com/T0BFXMWMV-U03KR679V5Y-ab2cbae00711-512",
    ];

    let mostrarQuienImagen = `<img src="${quienImagen[quienIndex]}"  class="comicImagen "/>`;

    let queImagen = [
      "https://img.blogs.es/anexom/wp-content/uploads/2018/07/anger-room.jpg",
      "https://www.hogarmania.com/archivos/202102/como-hacer-pizza-casera-masa-recetas-668x400x80xX-1.jpg",
      "https://hazrevista.org/wp-content/uploads/2014/01/bolos.jpg",
      "https://m.media-amazon.com/images/I/81C77n2RbCL._AC_SL1500_.jpg",
      "https://www.latercera.com/resizer/fa4emg5E1Jm5etLjcYWmm4EDhPQ=/900x600/filters:focal(1020x228:1030x218)/cloudfront-us-east-1.images.arcpublishing.com/copesa/FE43BZR7FND5DEHB4DNQZQOEWI.jpg",
      "https://sports-images.vice.com/images/articles/meta/2015/10/16/ultimate-el-deporte-ms-buena-onda-del-mundo-1445014923.png",
    ];

    let mostrarQueImagen = `<img src="${queImagen[queIndex]}" class="comicImagen "/>`;

    let cuandoImagen = [
      "https://media.glamour.mx/photos/619083f02d97bd4c522a9d79/master/w_1600,c_limit/203867.jpg",
      "https://previews.123rf.com/images/graphicbee/graphicbee1611/graphicbee161100178/66571623-felices-los-ni%C3%B1os-jugando-bajo-el-sol.jpg",
      "https://cdnb.20m.es/videojuegos/files/playingwow.jpg",
      "https://www.theneweconomy.com/wp-content/uploads/2016/03/China-nuclear-reactor-construction.jpg",
      "https://www.wikihow.com/images/thumb/9/9c/Save-in-The-Legend-of-Zelda-Games-Step-14.jpg/aid5377845-v4-728px-Save-in-The-Legend-of-Zelda-Games-Step-14.jpg.webp",
    ];
    let mostrarCuandoImagen = `<img src="${cuandoImagen[cuandoIndex]}" class="comicImagen"/>`;

    return [
      excusaFinal,
      mostrarQuienImagen,
      mostrarQueImagen,
      mostrarCuandoImagen,
    ];
  }
};
