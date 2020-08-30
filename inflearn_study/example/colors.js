var Links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i++
        }
    }
}

var Body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color
    },
    setBackGround: function (color) {
        document.querySelector('body').style.backgroundColor = color
    }
}

function nightDayHandler(self) {

    if (self.value === 'night') {
        Body.setBackGround('black');
        Body.setColor('white');
        self.value = 'day'

        Links.setColor('yellow');
    } else {
        Body.setBackGround('white');
        Body.setColor('black');
        self.value = 'night'

        Links.setColor('green');
    }
}