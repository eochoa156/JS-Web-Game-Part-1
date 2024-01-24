function newImage(characterSrc, characterLeft, characterBottom, 
                pineSrc, pineLeft, pineBottom,
                oakSrc, oakLeft, oakBottom,
                pillarSrc, pillarLeft, pillarBottom,
                wellSrc, wellLeft, wellBottom,
                crateSrc, crateLeft, crateBottom) {
    let greenCharacter = document.createElement('img');
    greenCharacter.src = characterSrc;
    greenCharacter.style.position = 'fixed';
    greenCharacter.style.left = characterLeft;
    greenCharacter.style.bottom = characterBottom;
    document.body.append(greenCharacter);

    let pineTree = document.createElement('img');
    pineTree.src = pineSrc;
    pineTree.style.position = 'fixed';
    pineTree.style.left = pineLeft;
    pineTree.style.bottom = pineBottom;
    document.body.append(pineTree);

    let  oakTree= document.createElement('img');
    oakTree.src = oakSrc;
    oakTree.style.position = 'fixed';
    oakTree.style.left = oakLeft;
    oakTree.style.bottom = oakBottom;
    document.body.append(oakTree);

    let stonePillar = document.createElement('img');
    stonePillar.src = pillarSrc;
    stonePillar.style.position = 'fixed';
    stonePillar.style.left = pillarLeft;
    stonePillar.style.bottom = pillarBottom;
    document.body.append(stonePillar);

    let woodCrate = document.createElement('img');
    woodCrate.src = crateSrc;
    woodCrate.style.position = 'fixed';
    woodCrate.style.left = crateLeft;
    woodCrate.style.bottom = crateBottom;
    document.body.append(woodCrate);

    let stoneWell = document.createElement('img');
    stoneWell.src = wellSrc;
    stoneWell.style.position = 'fixed';
    stoneWell.style.left = wellLeft;
    stoneWell.style.bottom = wellBottom;
    document.body.append(stoneWell);
}
newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

function newItem(swordSrc, swordLeft, swordBottom,
    shieldSrc, shieldLeft, shieldBottom,
    staffSrc, staffLeft, staffBottom) {
    let sword = newImage(swordSrc, swordLeft, swordBottom);
    let shield = newImage(shieldSrc, shieldLeft, shieldBottom);
    let staff = newImage(staffSrc, staffLeft, staffBottom);

    sword.addEventListener('click', function() {
    sword.remove()
    })

    shield.addEventListener('click', function() {
    shield.remove()
    })

    staff.addEventListener('click', function() {
    staff.remove()
    })
}

newItem('assets/sword.png', '500px', '405px');
newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600x', '100px');