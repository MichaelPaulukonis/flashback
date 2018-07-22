(function () {
    var c = document.getElementById("canvas");
    var img;
    var ctx = c.getContext("2d");
    var current_img_url = "pic.PNG"
    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
        // Init default image
        img = document.createElement("img");

        img.onload = function () {
            ctx.drawImage(img, 10, 10, 220, 277);

        }

        img.src = "pic6.PNG"

        document.getElementById('img_uploader').addEventListener('change', readURL, true);

        assembleFilteredPhotos()

    }

    function drawImage2Canvas(img) {


    }

    function readURL() {
        file = document.getElementById("img_uploader").files[0];

        console.log(file);

        if (file) {
            ctx.clearRect(0, 0, c.width, c.height);
            img = new Image();
            img.addEventListener("load", function () {
                    ctx.drawImage(img, 0, 0, 220, 277);
                });
            img.src = file.name;
            current_img_url = file.name;
            img.crossOrigin = "Anonymous";

            assembleFilteredPhotos();

        }
        else {
            console.log("No image found.")
        }
    }

    function assembleFilteredPhotos() {   
        var newImgData;
        var new_canvas = document.createElement("canvas");

        var new_ctx = new_canvas.getContext("2d");

        const solange_func = function () {

            console.log("solange called");
            img = new Image();
            img.addEventListener("load", function () {
                new_ctx.drawImage(img, 0, 0, 220, 277);
            });
            img.src = current_img_url;
            img.crossOrigin = "Anonymous";

            return new_canvas;

        }

    //         img2.src = "img.PNG"

    //         newImgData = new_ctx.getImageData(0, 0, canvas_new.width, canvas_new.height);

    //         for (i = 0; i < newImgData.data.length; i += 4) {
    //             newImgData.data[i] = 255 - newImgData.data[i];

    //             // imgData.data[i + 1] = 255 - imgData.data[i + 1];
    //             // imgData.data[i + 2] = 255 - imgData.data[i + 2];
    //         }
    //         new_ctx.putImageData(newImgData, 0, 0);


    //         return canvas_new;
    //     }

    //     const cool_twilight = function () {
    //         console.log("hi");

    //         img2 = document.createElement("img")

    //         img.onload = function() {

    //             new_ctx = canvas_new.getContext("2d");
    //             console.log("hi2")
    //             new_ctx.drawImage(img, 10, 10, 50, 80);

    //             newImgData = new_ctx.getImageData(0, 0, canvas_new.width, canvas_new.height);

    //             for (i = 0; i < newImgData.data.length; i += 4) {
    //                 newImgData.data[i] = 120 - newImgData.data[i];

    //                 // imgData.data[i + 1] = 255 - imgData.data[i + 1];
    //                 // imgData.data[i + 2] = 255 - imgData.data[i + 2];
    //             }
    //             new_ctx.putImageData(newImgData, 0, 0);

    //         }
    //         return canvas_new;
    //     }

        const group = [solange_func]

        var tiles = document.getElementsByClassName("tile is-child box check");
        console.log(tiles);
        var tile_elem;

        for (var i = 0; i < group.length; i += 1) {
            console.log("I is on:", i)
             // var new_canvas = group[i]();
    //         // console.log(new_canvas);
    //         // tile_elem = tiles[i];
    //         // tile_elem.appendChild(new_canvas)
        }
        var one = group[0]()
        var tile_un = tiles[0]
        tile_un.appendChild(one);

    //     one = group[1]()
    //     tile_un = tiles[1]
    //     tile_un.appendChild(one);


    // }

    // function darkify(img) {

    //     ctx.drawImage(img, 10, 10, 220, 277);

    //     var imgData = ctx.getImageData(0, 0, c.width, c.height);

    //     var BRIGHTNESS_ADJ = 10;
    //     for (var i = 0; i < imgData.data.length; i += 4) {
    //         imgData.data[i] -= BRIGHTNESS_ADJ
    //         imgData.data[i + 1] -= BRIGHTNESS_ADJ
    //         imgData.data[i + 2] -= BRIGHTNESS_ADJ
    //     }
    //     ctx.putImageData(imgData, 0, 0);
    }


    // function blueGreyScale() {

    //     ctx.drawImage(img, 10, 10, 220, 277);
    //     var imgData = ctx.getImageData(0, 0, c.width, c.height);

    //     for (var i = 0; i < imgData.data.length; i += 4) {
    //         var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
    //         imgData.data[i] = avg + 20
    //         imgData.data[i + 1] = avg + 30
    //         imgData.data[i + 2] = avg + 60
    //     }
    //     ctx.putImageData(imgData, 0, 0);
    // }


    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();