function newImage(src, left, bottom) {
    let img = document.createElement('img')
    img.src = 'assets/' + src
    img.style.position = 'fixed'
    img.style.left = left
    img.style.bottom = bottom
    document.body.append(img)

}

function newItem(src, left, bottom) {
    let item = document.createElement('img')
    item.src = 'assets/' + src
    item.style.position = 'fixed'
    item.style.left = left
    item.style.bottom = bottom
    document.body.append(item)

    item.addEventListener('dblclick', function(){
    item.remove()
})
}

newImage('green-character.gif', '100px', '100px')
newImage('pine-tree.png', '450px', '200px')
newImage('tree.png', '200px', '300px')
newImage('pillar.png', '350px', '100px')
newImage('crate.png', '150px', '200px')
newImage('well.png', '500px', '425px')

newItem('sword.png', '500px', '405px')
newItem('shield.png', '165px', '185px')
newItem('staff.png', '600px', '100px')
