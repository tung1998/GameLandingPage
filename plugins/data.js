/* eslint-disable no-irregular-whitespace */
export default (context, inject) => {
  const heroesList = [{
    name: 'Human',
    description: `<p><span style="color:#f1c40f">The Human</span> took over the most fertile land, located on the North of Eragard called <span style="color:#f39c12">Darmid</span>.</p>
                  <p>The bonus stat for Dragon's team is Balance between Attack, Defense, HP:</p>
                  <p>
                    BONUS DRAGON ATTACK: 5%<br>
                    BONUS DRAGON DEFENSE: 5%<br>
                    BONUS DRAGON HP: 5%
                  </p>`,
    avatarUrl: 'human_avatar.png',
    characterBgUrl: 'character_bg_human.png',
    modelUrl: 'chr_human.gif'
  }, {
    name: 'Dark Elf',
    description: `<p><span style="color:#f1c40f">The Wizards</span> had a territory in <span style="color:#f39c12">Vanirm</span>. This land was said to be the intersection of the elements and was the source of ancient magic&nbsp;</p>
                  <p>The bonus stat for Dragon's team is Priority Strengthen in Attack:</p>
                  <p>BONUS DRAGON ATTACK: 7%<br>
                  BONUS DRAGON DEFENSE: 4%<br>
                  BONUS DRAGON HP: 4%</p>`,
    avatarUrl: 'wizard_avatar.png',
    characterBgUrl: 'character_bg_dark_elf.png',
    modelUrl: 'chr_dark_elf.gif'
  }, {
    name: 'Elf',
    description: `<p><span style="color:#f1c40f">The Elf</span> race lived hidden deep in the forest spirit in the land called <span style="color:#f39c12">Flamheim</span>, where the elves are a legend.</p>
                  <p>The bonus stat for Dragon's team is Priority Strengthen in Defense:</p>
                  <p>BONUS DRAGON ATTACK: 4%<br>
                  BONUS DRAGON DEFENSE: 7%<br>
                  BONUS DRAGON HP: 4%</p>`,
    avatarUrl: 'elf_avatar.png',
    characterBgUrl: 'character_bg_elf.png',
    modelUrl: 'chr_elf.gif'
  }, {
    name: 'Orc',
    description: `<p><span style="color:#f1c40f">The Orc</span> had their territory in <span style="color:#f39c12">Jotun </span>lying close to the border of Vanirm, behind the Sephera mountains.</p>
                  <p>The bonus stat for Dragon's team is Priority Strengthen in Defense:</p>
                  <p>BONUS DRAGON ATTACK: 4%<br>
                  BONUS DRAGON DEFENSE: 4%<br>
                  BONUS DRAGON HP: 7%</p>`,
    avatarUrl: 'ore_avatar.png',
    characterBgUrl: 'character_bg_orc.png',
    modelUrl: 'chr_ore.gif'
  }]

  const dragonsList = [{
    name: 'Earth',
    type: 'Tanker',
    modelUrl: 'earth.gif',
    avatarUrl: 'earthavatar.png',
    roleIconUrl: 'role_earth.png',
    backgroundUrl: 'background_earth.png',
    elementalUrl: 'element_earth.png'
  }, {
    name: 'Fire',
    type: 'Warrior',
    modelUrl: 'fire.gif',
    avatarUrl: 'fireavatar.png',
    roleIconUrl: 'role_earth.png',
    backgroundUrl: 'background_fire.png',
    elementalUrl: 'element_fire.png'
  }, {
    name: 'Water',
    type: 'Ranger',
    modelUrl: 'water.gif',
    avatarUrl: 'wateravatar.png',
    roleIconUrl: 'role_water.png',
    backgroundUrl: 'background_water.png',
    elementalUrl: 'element_water.png'
  }, {
    name: 'Grass',
    type: 'Support/Healer',
    modelUrl: 'grass.gif',
    avatarUrl: 'grassavatar.png',
    roleIconUrl: 'role_grass.png',
    backgroundUrl: 'background_grass.png',
    elementalUrl: 'element_grass.png'
  }, {
    name: 'Thunder',
    type: 'Mage',
    modelUrl: 'thunder.gif',
    avatarUrl: 'thunderavatar.png',
    roleIconUrl: 'role_thunder.png',
    backgroundUrl: 'background_thunder.png',
    elementalUrl: 'element_thunder.png'
  }]

  inject('heroesList', heroesList)
  inject('dragonsList', dragonsList)
}
