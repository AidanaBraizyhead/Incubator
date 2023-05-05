$(function () {
  game = function () {
    if (check_egg_breaks(egg2) || check_egg_in_basket(egg2)) {
      reload_eggs(egg2);
    } else {
      move_egg(egg2);
    }

    // setTimeout(() => {
    if (check_egg_breaks(egg1) || check_egg_in_basket(egg1)) {
      reload_eggs(egg1);
    } else {
      move_egg(egg1);
    }
    // }, Math.random() * (500 - 300) + 300);

    // setTimeout(() => {
    if (check_egg_breaks(egg3) || check_egg_in_basket(egg3)) {
      reload_eggs(egg3);
    } else {
      move_egg(egg3);
    }
    // }, Math.random() * (700 - 300) + 300);

    // async function
    if (life > 0) {
      animation = requestAnimationFrame(game);
    } else {
      stop_game();
    }

    // stop animation
    // cancelAnimationFrame(animation);
  };

  animation = requestAnimationFrame(game);
});
