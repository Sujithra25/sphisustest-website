var index = 0;

function changebgcolors(){
    var colors = ["blue", "yellow", "black", "white"];

    document.getElementsByClassName("container")[0].style.background = colors[index++];

    if (index > colors.length - 1) index = 0;
}



