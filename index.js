function newImage(src, left, bottom) {
    let img = document.createElement('img')
    img.src = 'assets/' + src
    img.style.position = 'fixed'
    img.style.left = left
    img.style.bottom = bottom
    document.body.append(img)

}

newImage('green-character.gif', '100px', '100px')
newImage('pine-tree.png', '450px', '200px')